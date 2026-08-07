import Link from 'next/link';

const stats = [
  { eyebrow: '創業', number: '15', plus: false, unit: '年', caption: '一貫した支援体制' },
  {
    eyebrow: '支援実績',
    number: '120',
    plus: true,
    unit: '社以上',
    caption: '業種を問わない実績',
  },
  {
    eyebrow: '継続率',
    number: '95',
    plus: false,
    unit: '%',
    caption: '長期的な信頼関係',
  },
];

const NumbersHighlight = () => {
  return (
    <section className="relative overflow-hidden bg-inverse-background py-20 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, var(--component-page-decoration-glow), transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-xs font-bold tracking-[0.2em] text-inverse-accent">
          LUMIÈRE IN NUMBERS
        </p>
        <h2 className="mt-3 font-body text-2xl font-bold text-inverse-foreground md:text-3xl">
          数字で見るLumière
        </h2>
        <div className="mt-4 h-px w-12 bg-inverse-accent" />

        <div className="mt-16 grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.eyebrow}
              className="flex flex-col items-start py-10 first:pt-0 last:pb-0 lg:px-12 lg:py-0 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="text-sm text-inverse-muted">
                {stat.eyebrow}
              </span>
              <span className="mt-2 flex flex-nowrap items-end font-body font-bold leading-none text-inverse-foreground">
                <span className="text-[80px] sm:text-[96px] lg:text-[112px]">
                  {stat.number}
                </span>
                {stat.plus && (
                  <span className="mb-2 ml-1 shrink-0 whitespace-nowrap text-3xl text-inverse-accent sm:mb-3 sm:text-4xl">
                    +
                  </span>
                )}
                <span className="mb-2 ml-1 shrink-0 whitespace-nowrap text-xl text-inverse-accent sm:mb-3 sm:text-2xl">
                  {stat.unit}
                </span>
              </span>

              <span className="mt-6 flex items-center gap-3 text-sm text-inverse-muted">
                <span
                  aria-hidden="true"
                  className="h-px w-4 bg-inverse-accent"
                />
                {stat.caption}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/numbers"
            className="inline-flex items-center text-sm font-medium text-inverse-accent transition-colors hover:text-inverse-foreground"
          >
            すべての数字を見る →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NumbersHighlight;
