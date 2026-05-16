import profile from "@/assets/profile.jpg";
import { Download } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="01 — About" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 reveal">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl opacity-60" />
              <div className="relative overflow-hidden rounded-3xl glass-strong p-2 gradient-border">
                <img src={profile} alt="Rajnish" className="rounded-2xl w-full h-[28rem] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] gradient-border">
                <div className="text-[11px] font-mono text-accent ">EXPERIENCE</div>
                <div className="text-2xl font-bold gradient-text">1.6+ Years</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Hi, I'm <span className="text-foreground font-semibold">Rajnish Kumar Tiwari</span>, a passionate and creative{" "}
              <span className="text-primary font-semibold">Full Stack Web and App Developer</span> and{" "}
              <span className="text-primary font-semibold">Software and AI/ML Developer</span> from India. I specialize in building responsive, scalable, and secure web and mobile applications using modern technologies.
            </p>
            <p>
              With hands-on experience in <span className="text-accent font-semibold">Software & AI/ML Development</span>, React Native, Tailwind CSS, and RESTful APIs, I love solving real-world problems and crafting intuitive user interfaces.
            </p>
            <p>
              I'm currently pursuing my <span className="text-accent font-semibold">B.Tech in Computer Science</span> and continuously enhancing my skills by building real-world projects and learning new tools & frameworks.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { k: "40+", v: "Projects" },
                { k: "1.6+ Years", v: "Experiences" },
                { k: "35+", v: "Skills" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-4 text-center gradient-border">
                  <div className="text-2xl font-bold gradient-text">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <a href="CV.pdf" className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold mt-2">
              <Download className="size-4" /> Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
