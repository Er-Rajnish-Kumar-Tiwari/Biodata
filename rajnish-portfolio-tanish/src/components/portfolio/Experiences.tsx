import { Briefcase, Check } from "lucide-react";
import { experiences } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Experiences() {
  return (
    <section id="experiences" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="05 — Experience" title="Experiences" description="Where I have worked and built things" />

        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((e, i) => (
            <div key={e.title + i} className="reveal relative rounded-3xl glass-strong gradient-border p-6 sm:p-8 hover:shadow-[0_30px_70px_-30px_var(--purple-glow)] transition-all">
              <div className="flex flex-wrap items-start gap-4 justify-between">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent shadow-[0_0_30px_-10px_var(--cyan-glow)] shrink-0">
                    <Briefcase className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">{e.title}</h3>
                    <p className="text-sm text-accent mt-1">{e.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-mono text-muted-foreground">
                    {e.duration}
                  </div>
                  <div className="text-xs text-muted-foreground/70 mt-1">Role: {e.role}</div>
                </div>
              </div>

              <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 mt-0.5 text-accent shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
