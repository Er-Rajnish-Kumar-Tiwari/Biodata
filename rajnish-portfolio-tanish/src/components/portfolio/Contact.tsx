import { Github, Linkedin, Mail, Send } from "lucide-react";
import { socials } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong gradient-border p-8 sm:p-12">
          <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-accent">
                Let's talk
              </div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold gradient-text">Have a project in mind?</h2>
              <p className="mt-3 text-muted-foreground">
                I'm available for freelance, internships, and full-time opportunities. Drop a message and let's build something great.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={socials.email} className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
                  <Mail className="size-4" /> Email Me
                </a>
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {[
                  { icon: Github, href: socials.github, label: "GitHub" },
                  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: socials.email, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-xl glass transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_30px_-8px_var(--cyan-glow)]">
                    <Icon className="size-4 text-muted-foreground group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </div>

            <form
              className="reveal glass rounded-2xl p-6 gradient-border space-y-4"
              onSubmit={(e) => { e.preventDefault(); window.location.href = socials.email; }}
            >
              <div>
                <label className="text-xs font-mono text-muted-foreground">Your name</label>
                <input className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground">Email</label>
                <input type="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground">Message</label>
                <textarea rows={4} className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition resize-none" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="btn-glow w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
                Send Message <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
