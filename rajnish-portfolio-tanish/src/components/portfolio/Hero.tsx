import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Send } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { roles, socials } from "@/lib/portfolio-data";

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="ml-0.5 inline-block w-[2px] h-[1em] -mb-1 bg-accent animate-blink align-middle" />
    </span>
  );
}

const techIcons = ["React", "Node", "TS", "Mongo", "Python", "AI/ML", "Java", "Tailwind"];

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "CV.pdf";
  link.download = "Rajnish_Kumar_Tiwari_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="relative z-10 reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block gradient-text">Rajnish Kumar</span>
            <span className="block gradient-text">Tiwari</span>
          </h1>

          <div className="mt-5 text-xl sm:text-2xl text-muted-foreground">
            I'm a <Typewriter />
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground/90 leading-relaxed">
            Full Stack & AI/ML Developer with 1.6+ year of experience building production-level web and
            mobile applications using the MERN stack,React Native and AI/ML. Delivered
            kevlardefense.com and darknettracker.com. Strong in REST API design, responsive UI, and
            database management, with a passion for learning and building efficient, user-centric
            solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              View My Work <ArrowDown className="size-4" />
            </a>
            <a
              onClick={handleDownload}
              className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold cursor-pointer"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Github, href: socials.github, label: "GitHub" },
              { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: socials.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_30px_-8px_var(--cyan-glow)]"
              >
                <Icon className="size-4.5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Right - portrait */}
        <div className="relative reveal">
          <div className="relative mx-auto aspect-square w-[78%] max-w-md">
            {/* Glow rings */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-transparent blur-3xl animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute -inset-3 rounded-full border border-accent/20" />

            {/* Floating tech badges */}
            {techIcons.map((t, idx) => {
              const angle = (idx / techIcons.length) * Math.PI * 2;
              const radius = 52; // percentage
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              return (
                <div
                  key={t}
                  className="absolute -translate-x-1/2 -translate-y-1/2 glass rounded-xl px-2.5 py-1 text-[11px] font-mono text-accent shadow-[0_0_20px_-8px_var(--cyan-glow)] animate-float-slow"
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${idx * 0.4}s` }}
                >
                  {t}
                </div>
              );
            })}

            {/* Portrait */}
            <div className="absolute inset-6 overflow-hidden rounded-full ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              <img
                src={profile}
                alt="Rajnish Kumar Tiwari"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 hover:text-foreground transition"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
