// Very subtle, page-scoped ambient decoration: a faint dot grid plus one
// soft radial glow. Intentionally low-contrast so it reads as depth, not
// decoration — sits behind whatever a section paints on top of it (opaque
// sections like bg-surface / the numbers band simply cover it).
const AmbientBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `radial-gradient(var(--component-page-decoration-line) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute -top-64 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-[0.08] blur-3xl"
        style={{
          background: `radial-gradient(circle, var(--component-page-decoration-glow), transparent 70%)`,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
