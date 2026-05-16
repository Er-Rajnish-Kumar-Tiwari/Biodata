export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-sm text-muted-foreground">
          © 2026 <span className="gradient-text font-semibold">Rajnish Kumar Tiwari</span>. All Rights Reserved.
        </div>
        <div className="text-xs font-mono text-muted-foreground/70">
          Crafted with React · TypeScript · Tailwind
        </div>
      </div>
    </footer>
  );
}
