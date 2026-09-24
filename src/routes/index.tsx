import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import developerCore from "@/assets/developer-core.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tushar Mishra — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Tushar Mishra, a software engineer building real-time systems and AI-powered products.",
      },
      { property: "og:title", content: "Tushar Mishra — Software Engineer" },
      {
        property: "og:description",
        content: "Real-time systems, intelligent applications, and dependable software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    index: "01",
    name: "Gambit",
    description:
      "A functional real-time chess platform with persistent WebSocket connections and a carefully designed multiplayer architecture.",
    stack: ["WebSockets", "React", "Node.js"],
    href: "https://github.com/tusharmishra57/gambit",
  },
  {
    index: "02",
    name: "Utility AI",
    description:
      "An electricity utility platform for consumption insights, bills, simulated payments, and grounded AI assistance over billing data.",
    stack: ["RAG", "AI", "Full stack"],
    href: "https://github.com/tusharmishra57/UtilityAI",
  },
  {
    index: "03",
    name: "TooBrain",
    description:
      "A personal knowledge platform that turns PDFs, text, web pages, YouTube transcripts, and notes into isolated, queryable Brains.",
    stack: ["PostgreSQL", "Redis", "BullMQ", "RAG"],
    href: "https://github.com/tusharmishra57/TooBrain",
  },
  {
    index: "04",
    name: "Chat-RT",
    description:
      "A real-time chat application where people create rooms and communicate instantly through event-driven connections.",
    stack: ["WebSockets", "Rooms", "Real time"],
    href: "https://github.com/tusharmishra57/Chat-RT",
  },
  {
    index: "05",
    name: "Legal Bail Prediction",
    description:
      "An AI system predicting bail outcomes for Indian cases through classical ML, zero-shot prompting, and retrieval-augmented generation.",
    stack: ["Legal-BERT", "LoRA", "FAISS", "RAG"],
    href: "https://github.com/tusharmishra57/Legal-Bail-Prediction-System",
  },
  {
    index: "06",
    name: "VOX",
    description:
      "A production-grade real-time AI voice assistant built around WebSockets, job queues, Redis Pub/Sub, and MongoDB.",
    stack: ["WebSockets", "Redis", "MongoDB", "AI"],
    href: "https://github.com/tusharmishra57/Real-Time-Voice-Chat",
  },
];

const skillGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "C++", "Python"] },
  { title: "Engineering", items: ["React", "Node.js", "Express", "REST APIs", "WebSockets"] },
  { title: "Data & systems", items: ["PostgreSQL", "pgvector", "MongoDB", "Redis", "BullMQ", "Prisma"] },
  { title: "AI / ML", items: ["RAG", "FAISS", "Legal-BERT", "LoRA (PEFT)"] },
];

function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-2.5 font-display text-lg font-bold" aria-label="Tushar Mishra, home">
            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground shadow-glow transition-transform group-hover:rotate-6">
              <Terminal className="size-4" aria-hidden="true" />
            </span>
            <span>Tushar<span className="text-primary">.</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
          <a
            className="button-secondary px-3.5 py-2 text-sm"
            href="/TusharMishra_CV_forPortfolio.pdf"
            download="TusharMishra_CV_forPortfolio.pdf"
          >
            Résumé <Download className="size-3.5" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section id="top" className="hero-grid relative flex min-h-[94vh] items-center pt-16">
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-4 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div className="relative z-10 max-w-3xl animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 text-xs font-semibold text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to engineering opportunities
            </div>
            <p className="mb-3 font-mono text-sm font-medium text-primary sm:text-base">Hello, I&apos;m Tushar Mishra.</p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-normal sm:text-7xl lg:text-[5.6rem]">
              I build systems that feel <span className="text-gradient">instant.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Software engineer focused on real-time architecture and AI-powered products—from persistent multiplayer systems to grounded knowledge platforms.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a className="button-primary" href="#work">Explore my work <ArrowDown className="size-4" aria-hidden="true" /></a>
              <a className="button-secondary" href="mailto:tusharmishra.developer@gmail.com">Let&apos;s talk <Mail className="size-4" aria-hidden="true" /></a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
              <a className="social-link" href="https://github.com/tusharmishra57" target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
              <a className="social-link" href="https://www.linkedin.com/in/tusharmishra-developer" target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[610px] items-center justify-center lg:min-h-[590px]" aria-hidden="true">
            <div className="code-card code-card-one"><span className="text-primary">const</span> ideas = <span className="text-accent">await</span> build();</div>
            <div className="code-card code-card-two">ws.on(<span className="text-accent">&quot;connection&quot;</span>)</div>
            <img src={developerCore} alt="" width={1200} height={1200} className="relative z-10 w-[92%] animate-float drop-shadow-[0_30px_65px_var(--image-shadow)]" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 h-px w-[90%] max-w-7xl -translate-x-1/2 bg-gradient-line" />
      </section>

      <section id="work" className="section-shell">
        <SectionHeading eyebrow="Selected work" title="Built for the real world." subtitle="Six projects exploring real-time communication, reliable backends, and practical artificial intelligence." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="project-card group bg-card p-7 sm:p-8">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">/{project.index}</span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-9 font-display text-2xl font-bold">{project.name}</h3>
              <p className="mt-3 min-h-24 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => <span key={item} className="tech-tag">{item}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="section-band">
        <div className="section-shell">
          <SectionHeading eyebrow="Experience" title="Learning by shipping." />
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <article className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness className="size-5" /></div>
              <p className="font-mono text-xs font-semibold text-primary">MAY—JUL 2025</p>
              <h3 className="mt-3 font-display text-2xl font-bold">Backend Engineering Intern</h3>
              <p className="mt-1 text-sm font-medium text-foreground/80">Center for Advanced Data and Computational Science</p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">Built a Node.js and WebSocket backend for concurrent sessions, synchronized emotion data and generated artwork across chat rooms, and managed low-latency connection lifecycles.</p>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon"><BookOpen className="size-5" /></div>
              <p className="font-mono text-xs font-semibold text-accent">2026</p>
              <h3 className="mt-3 font-display text-2xl font-bold">Published Research</h3>
              <p className="mt-1 text-sm font-medium text-foreground/80">COLIEE 2026 · Legal Case Retrieval Task</p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">Contributed research to legal information retrieval while building an explainable, multi-model bail prediction system for Indian legal cases.</p>
            </article>
          </div>
          <div className="mt-12 flex items-start gap-4 border-t border-border pt-8">
            <div className="timeline-icon shrink-0"><GraduationCap className="size-5" /></div>
            <div><p className="font-display text-lg font-bold">BTech in Computer Science Engineering</p><p className="mt-1 text-sm text-muted-foreground">2023—2027 · CGPA 6.79</p></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <SectionHeading eyebrow="Toolkit" title="From interface to infrastructure." subtitle="A pragmatic stack for building complete, intelligent, and responsive products." />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-5 flex items-center gap-2 text-sm font-bold"><Sparkles className="size-4 text-primary" />{group.title}</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {group.items.map((skill) => <li key={skill} className="border-b border-border/70 pb-3">{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-border bg-card">
        <div className="contact-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <p className="font-mono text-xs font-semibold uppercase text-primary">Have an interesting problem?</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold sm:text-6xl">Let&apos;s build what&apos;s next.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">I&apos;m interested in engineering opportunities where ambitious ideas meet thoughtful systems.</p>
          <a className="button-primary mt-9" href="mailto:tusharmishra.developer@gmail.com">tusharmishra.developer@gmail.com <ArrowUpRight className="size-4" /></a>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-7 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>Designed and built by Tushar Mishra.</p>
          <div className="flex gap-5"><a className="social-link" href="https://github.com/tusharmishra57" target="_blank" rel="noreferrer">GitHub</a><a className="social-link" href="https://www.linkedin.com/in/tusharmishra-developer" target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="max-w-3xl"><p className="font-mono text-xs font-semibold uppercase text-primary">{eyebrow}</p><h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">{title}</h2>{subtitle && <p className="mt-5 text-lg leading-8 text-muted-foreground">{subtitle}</p>}</div>;
}