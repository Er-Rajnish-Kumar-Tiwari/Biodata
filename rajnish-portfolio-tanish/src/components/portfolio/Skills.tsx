import { skills } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="04 — Skills" title="My Skills" description="Tools & technologies I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="reveal group relative rounded-2xl glass gradient-border p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-10px_var(--cyan-glow)]"
              style={{ transitionDelay: `${(i % 6) * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground">{s.name}</span>
                <span className="font-mono text-xs text-accent">{s.level}%</span>
              </div>
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_15px_var(--cyan-glow)]"
                  style={{ width: `${s.level}%` }}
                />
                <div className="absolute inset-0 shine opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
