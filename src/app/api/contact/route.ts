import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface RateBucket {
  count: number;
  resetAt: number;
}

const rateBuckets = new Map<string, RateBucket>();

function getClientIp(request: Request): string {
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 64);
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return (fwd.split(",")[0] || "local").trim().slice(0, 64);
  return "local";
}

function checkContactLimit(ip: string): { allowed: boolean; retrySec: number } {
  const now = Date.now();
  const windowMs = 15 * 60_000;
  const maxRequests = 5;
  const entry = rateBuckets.get(ip);

  if (!entry || now > entry.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retrySec: 0 };
  }

  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      retrySec: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }

  entry.count += 1;
  return { allowed: true, retrySec: 0 };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rl = checkContactLimit(ip);
    if (!rl.allowed) {
      return NextResponse.json(
        {
          error: `Too many messages sent. Please wait ${Math.ceil(
            rl.retrySec / 60
          )} minute(s) and try again.`,
        },
        { status: 429, headers: { "Retry-After": String(rl.retrySec) } }
      );
    }

    const body = await request.json();

    // Honeypot check for bots
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const senderEmail =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "General Inquiry";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Please enter your name (2–100 characters)." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail) || senderEmail.length > 150) {
      return NextResponse.json(
        { error: "Please enter a valid email address so I can reply to you." },
        { status: 400 }
      );
    }
    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: "Please write a message between 10 and 2000 characters." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "nafees6005@gmail.com";
    const safeSubject = subject.slice(0, 120) || "Portfolio Contact";
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
        <h2 style="margin-bottom: 12px; color: #0284c7;">New Portfolio Message</h2>
        <p style="margin: 4px 0;"><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(senderEmail)})</p>
        <p style="margin: 4px 0;"><strong>Topic:</strong> ${escapeHtml(safeSubject)}</p>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
      </div>
    `;

    // Option 1: Resend API (if configured)
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: senderEmail,
          subject: `[Portfolio] ${safeSubject} — from ${name}`,
          html: htmlBody,
        }),
      });

      if (!resendRes.ok) {
        console.error("Resend delivery failed:", await resendRes.text());
        return NextResponse.json(
          { error: "Could not deliver message right now. Please try again shortly." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // Option 2: Gmail SMTP via Nodemailer (if configured)
    const gmailUser = process.env.GMAIL_USER || toEmail;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${gmailUser}>`,
        to: toEmail,
        replyTo: `${name} <${senderEmail}>`,
        subject: `[Portfolio] ${safeSubject} — from ${name}`,
        text: `From: ${name} (${senderEmail})\nTopic: ${safeSubject}\n\n${message}`,
        html: htmlBody,
      });

      return NextResponse.json({ success: true });
    }

    // Neither email provider configured yet
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet on this server. Add GMAIL_APP_PASSWORD or RESEND_API_KEY in environment variables.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 500 }
    );
  }
}
