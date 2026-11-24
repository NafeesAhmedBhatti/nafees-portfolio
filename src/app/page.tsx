import {
  ArrowUpRight,
  Award,
  Briefcase,
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import {
  AnimatedName,
  FadeIn,
  HeroItem,
  HeroStagger,
  PortraitShowcase,
  RotatingRolePill,
} from "@/components/MotionPrimitives";
import {
  EDUCATION,
  EXPERIENCES,
  FEATURED_PROJECTS,
  IMPACT_STATS,
  PROFILE,
  SKILL_GROUPS,
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#090D16] text-slate-100">
      {/* Subtle Ambient Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-sky-500/12 blur-[130px]" />
        <div className="absolute top-[42%] -right-40 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
        {/* HERO SECTION */}
        <section className="py-10 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Copy */}
            <HeroStagger className="lg:col-span-7">
              <HeroItem>
                <RotatingRolePill />
              </HeroItem>

              <HeroItem>
                <h1 className="font-heading mt-5 text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl lg:text-[54px] lg:leading-[1.08]">
                  Hi, I&apos;m <AnimatedName name={PROFILE.name} />
                  <span className="text-sky-400">.</span>
                </h1>
              </HeroItem>

              <HeroItem>
                <p className="mt-4 font-heading text-lg font-medium text-slate-200 sm:text-xl">
                  {PROFILE.headline}
                </p>
              </HeroItem>

              <HeroItem>
                <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  {PROFILE.subheadline}
                </p>
              </HeroItem>

              {/* Mobile-first 2+1 Grid -> Desktop inline row */}
              <HeroItem>
                <div className="mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                  <a
                    href="#projects"
                    className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/15 transition-all hover:bg-sky-300 sm:col-span-1 sm:w-auto"
                  >
                    View Live Projects
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-5"
                  >
                    Send a Message
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </HeroItem>
            </HeroStagger>

            {/* Right Editorial Portrait Frame */}
            <PortraitShowcase className="lg:col-span-5">
              <div className="relative mx-auto max-w-[360px]">
                {/* Soft Outer Glow */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-0.5 rounded-[30px] bg-gradient-to-br from-sky-400/35 via-white/10 to-indigo-500/35 blur-sm"
                />

                <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#0E1525] p-2.5 shadow-2xl">
                  <div className="relative overflow-hidden rounded-[20px] bg-[#090D16]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PROFILE.portrait}
                      alt={PROFILE.name}
                      className="aspect-[4/4.4] w-full object-cover object-top"
                    />

                    {/* Bottom Frosted Glass Overlay */}
                    <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-[#090D16]/80 p-3.5 backdrop-blur-md">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="font-heading text-sm font-bold text-white">
                            AI Engineer @ Drytis
                          </p>
                          <p className="mt-0.5 text-[11px] text-slate-300">
                            CS Faculty • EMPHSS Bawli
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PortraitShowcase>
          </div>

          {/* Impact Bento Strip */}
          <FadeIn delay={0.15}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
              {IMPACT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-[#111827]/60 p-4 transition-colors hover:border-sky-400/30 sm:p-5"
                >
                  <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section
          id="projects"
          className="scroll-mt-20 border-t border-white/10 py-14 sm:py-20"
        >
          <FadeIn>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
                  Selected Work
                </p>
                <h2 className="font-heading mt-1.5 text-2xl font-bold text-white sm:text-3xl">
                  Featured Projects
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">
                  Real-world software running in production — from AI study and
                  health companions to a full-scale school portal.
                </p>
              </div>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200"
              >
                See all repositories on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          <div className="mt-8 space-y-8">
            {FEATURED_PROJECTS.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.06}>
                <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/75 transition-all duration-300 hover:border-sky-400/30">
                  <div
                    className={`grid items-center gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:gap-8 ${
                      idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* HD Live Screenshot Preview */}
                    <div className="lg:col-span-6">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#090D16] shadow-xl"
                      >
                        <div className="flex items-center justify-between border-b border-white/10 bg-[#0D1320] px-3.5 py-2">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                          </div>
                          <span className="truncate font-mono text-[10px] text-slate-400">
                            {project.liveUrl.replace("https://", "")}
                          </span>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={`${project.title} live preview`}
                          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </a>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-6">
                      <span className="font-mono text-[11px] font-semibold text-sky-300">
                        {project.tag}
                      </span>
                      <h3 className="font-heading mt-1.5 text-xl font-bold text-white sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                        {project.summary}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {project.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400 sm:text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/10 bg-[#090D16] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-sky-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition-colors hover:bg-sky-300"
                        >
                          Open Live App
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                        >
                          <GithubIcon className="h-4 w-4" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & TEACHING SECTION */}
        <section
          id="experience"
          className="scroll-mt-20 border-t border-white/10 py-14 sm:py-20"
        >
          <FadeIn>
            <div className="flex items-center gap-2.5">
              <Briefcase className="h-5 w-5 text-sky-400" />
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
                Experience &amp; Teaching
              </p>
            </div>
            <h2 className="font-heading mt-1.5 text-2xl font-bold text-white sm:text-3xl">
              Where I Work &amp; Teach
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-5">
            {EXPERIENCES.map((exp, idx) => (
              <FadeIn key={`${exp.company}-${exp.role}`} delay={idx * 0.06}>
                <div className="rounded-3xl border border-white/10 bg-[#111827]/70 p-6 transition-colors hover:border-white/20 sm:p-7">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-sky-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-slate-400 sm:text-right">
                      <p>{exp.period}</p>
                      <p className="mt-0.5 text-slate-500">{exp.location}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {exp.summary}
                  </p>

                  <ul className="mt-3.5 space-y-1.5">
                    {exp.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400 sm:text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-[#090D16] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* TECH STACK & EDUCATION SECTION */}
        <section
          id="skills"
          className="scroll-mt-20 border-t border-white/10 py-14 sm:py-20"
        >
          <FadeIn>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
              Capabilities &amp; Background
            </p>
            <h2 className="font-heading mt-1.5 text-2xl font-bold text-white sm:text-3xl">
              Tech Stack &amp; Expertise
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {SKILL_GROUPS.map((group, idx) => {
              const Icon = idx === 0 ? Cpu : idx === 1 ? Code2 : ShieldCheck;
              return (
                <FadeIn key={group.title} delay={idx * 0.06}>
                  <div className="h-full rounded-3xl border border-white/10 bg-[#111827]/70 p-6 transition-colors hover:border-sky-400/25">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 text-sky-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-white">
                        {group.title}
                      </h3>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-xl border border-white/10 bg-[#090D16]/85 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-sky-400/40 hover:text-sky-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Education & Certifications */}
          <FadeIn delay={0.1}>
            <div className="mt-6 grid gap-5 lg:grid-cols-12">
              <div className="rounded-3xl border border-white/10 bg-[#111827]/70 p-6 lg:col-span-8">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-sky-400" />
                  <h3 className="font-heading text-base font-bold text-white">
                    Education
                  </h3>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {EDUCATION.map((edu) => (
                    <div
                      key={edu.degree}
                      className="rounded-2xl border border-white/10 bg-[#090D16]/70 p-4"
                    >
                      <span className="font-mono text-xs font-semibold text-sky-300">
                        {edu.year}
                      </span>
                      <p className="mt-1 text-sm font-bold text-white">
                        {edu.degree}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{edu.school}</p>
                      <p className="mt-2 font-mono text-xs text-emerald-300">
                        {edu.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#111827]/70 p-6 lg:col-span-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-sky-400" />
                  <h3 className="font-heading text-base font-bold text-white">
                    Certifications &amp; Languages
                  </h3>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-xl border border-white/10 bg-[#090D16]/70 p-3">
                    <p className="font-semibold text-white">
                      Machine Learning Certification
                    </p>
                    <p className="font-mono text-xs text-slate-400">2023</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#090D16]/70 p-3">
                    <p className="font-semibold text-white">
                      Full Stack Development Certification
                    </p>
                    <p className="font-mono text-xs text-slate-400">2025</p>
                  </div>
                  <p className="pt-1 text-xs text-slate-400">
                    Languages:{" "}
                    <span className="text-slate-200">English, Hindi, Urdu</span>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CONTACT SECTION (PRIVACY-FIRST — NO EMAIL OR PHONE DISPLAYED) */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-white/10 py-14 sm:py-20"
        >
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
                  Contact
                </p>
                <h2 className="font-heading mt-1.5 text-2xl font-bold text-white sm:text-3xl">
                  Let&apos;s Build Something Useful
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Whether you&apos;re hiring for an AI Engineer / Full-Stack
                  role, need a custom web platform for your business or school,
                  or want to collaborate on an LLM product — drop a message
                  here.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111827]/60 p-4">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                    <div>
                      <p className="text-xs font-bold text-white">
                        Direct Inbox Delivery
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        Messages go straight to my personal inbox so I can reply
                        to your email directly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111827]/60 p-4">
                    <Layers className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                    <div>
                      <p className="text-xs font-bold text-white">
                        Based in {PROFILE.location}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        Available for remote engineering roles and select
                        freelance builds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#070A11]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>
            © 2026 {PROFILE.name}. Built with Next.js &amp; TypeScript.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
