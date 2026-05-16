import { ExternalLink, Github } from "lucide-react";
import { projects, socials } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="06 — Projects" title="Projects" description="A selection of things I've built" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl glass-strong gradient-border transition-all hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_var(--purple-glow)]"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center rounded-full glass px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-accent">
                  Project · {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 6).map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 border border-primary/25 px-2.5 py-0.5 text-[10px] font-mono text-primary">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 6 && (
                    <span className="text-[10px] font-mono text-muted-foreground/70 py-0.5">+{p.tech.length - 6}</span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={p.url}
                    target="_blank" rel="noreferrer"
                    className="btn-glow inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold"
                  >
                    <ExternalLink className="size-3.5" /> Live Preview
                  </a>
                  <a
                    href={socials.github}
                    target="_blank" rel="noreferrer"
                    className="btn-ghost-glow inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold"
                  >
                    <Github className="size-3.5" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
