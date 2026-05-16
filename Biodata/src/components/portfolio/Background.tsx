export function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-aurora" aria-hidden />
      <div className="fixed inset-0 -z-10 bg-grid" aria-hidden />
      <div className="fixed -top-32 -left-32 -z-10 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px] animate-float-slow" aria-hidden />
      <div className="fixed top-1/3 -right-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-accent/15 blur-[120px] animate-float-slower" aria-hidden />
    </>
  );
}
