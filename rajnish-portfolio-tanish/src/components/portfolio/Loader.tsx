import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity">
      <div className="flex flex-col items-center gap-4">
        <div className="loader-ring" />
        <div className="font-display text-sm tracking-[0.4em] uppercase gradient-text">Rajnish</div>
      </div>
    </div>
  );
}
