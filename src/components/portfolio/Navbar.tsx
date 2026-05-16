import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <button onClick={() => go("home")} className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight cursor-pointer">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white text-sm shadow-[0_0_20px_-4px_var(--purple-glow)]">
              R
              <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
            </span>
            <span className="gradient-text">Rajnish</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground cursor-pointer"
                }`}
              >
                {n.label}
                <span
                  className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-primary to-accent transition-transform duration-300 ${
                    active === n.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("contact")}
            className="hidden md:inline-flex btn-glow rounded-full px-5 py-2 text-sm font-semibold cursor-pointer"
          >
            Hire Me
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className={`text-left rounded-lg px-4 py-3 text-sm ${
                    active === n.id ? "bg-white/5 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {n.label}
                </button>
              ))}
              <button onClick={() => go("projects")} className="btn-glow mt-2 rounded-full px-5 py-2.5 text-sm font-semibold">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
