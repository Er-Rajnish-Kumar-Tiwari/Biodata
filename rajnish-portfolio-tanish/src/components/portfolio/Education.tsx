import { GraduationCap } from "lucide-react";
import { educations } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="educations" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="03 — Education" title="Educations" description="Academic foundation" />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent" />
          <div className="space-y-8">
            {educations.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <div key={e.degree + i} className="reveal relative sm:grid sm:grid-cols-2 gap-8 pl-12 sm:pl-0">
                  <span className="absolute left-4 sm:left-1/2 top-5 -translate-x-1/2 z-10">
                    <span className="block h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_var(--purple-glow)]" />
                  </span>
                  <div className={`${left ? "sm:col-start-1 sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"}`}>
                    <div className="glass-strong gradient-border rounded-2xl p-5 transition hover:-translate-y-0.5">
                      <div className="flex items-center gap-2 sm:justify-end-0 text-accent">
                        <GraduationCap className="size-4" />
                        <span className="text-xs font-mono">{e.year}</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{e.degree}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{e.institution}</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs text-primary border border-primary/30">
                        {e.status}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
