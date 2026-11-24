import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nafees Ahmed Bhatti — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Nafees Ahmed Bhatti: AI Engineer at Drytis, Computer Science Teacher at EMPHSS Bawli, and Full-Stack Developer building production LLM and Next.js systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090D16] font-sans text-slate-100 antialiased selection:bg-sky-400/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
