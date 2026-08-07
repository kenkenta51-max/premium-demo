const stats = [
  { value: '創業15年', label: '一貫した支援体制' },
  { value: '支援実績120社以上', label: '業種を問わない実績' },
  { value: '継続率95%', label: '長期的な信頼関係' },
];

const CompanyOverview = () => {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
          代表メッセージ
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
          変化の激しい時代においても、経営の意思決定に必要なのは派手な施策ではなく、確かな実績に裏付けられた誠実な助言だと考えています。
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          株式会社Lumièreは創業以来、企業の経営層に寄り添い、専門性と長期的な視点で事業の成長を支援してまいりました。
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center">
              <span className="font-heading text-2xl font-bold text-accent md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
