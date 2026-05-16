import { AppWindow, Code2, Cpu, Rocket } from "lucide-react";
import { services } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

const icons = [AppWindow, Code2, Cpu, Rocket];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="02 — Services" title="My Services" description="What I can do for you" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <div
                key={s.title}
                className="reveal group relative rounded-3xl glass p-6 gradient-border transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_var(--purple-glow)]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 opacity-0 group-hover:opacity-100 group-hover:from-primary/10 group-hover:to-accent/10 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/20 text-accent shadow-[0_0_30px_-10px_var(--cyan-glow)]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="mt-3 text-xs font-mono text-muted-foreground/70">0{i + 1}.SERVICE</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
