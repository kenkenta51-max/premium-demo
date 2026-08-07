const cases = [
  {
    industry: '製造業 A社',
    challenge: '意思決定が特定の役員に依存し、経営判断のスピードが低下していた。',
    result: '会議体と権限規程を再設計し、意思決定にかかる期間を平均で半分に短縮。',
  },
  {
    industry: '金融業 B社',
    challenge: '部門間の連携が乏しく、全社横断のプロジェクトが進みにくい状況だった。',
    result: '組織再編と評価制度の見直しにより、部門横断プロジェクトの立ち上げに成功。',
  },
  {
    industry: '小売業 C社',
    challenge: '店舗運営の主要業務に多くの手作業が残り、非効率が常態化していた。',
    result: '業務プロセスを再設計し、主要業務のリードタイムを30%削減。',
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="bg-surface py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          実績・導入事例
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.industry}
              className="rounded-card border border-border bg-background p-8"
            >
              <p className="mb-6 font-heading text-lg font-semibold text-foreground">
                {item.industry}
              </p>
              <p className="mb-1 text-xs font-medium tracking-wide text-accent">
                課題
              </p>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {item.challenge}
              </p>
              <p className="mb-1 text-xs font-medium tracking-wide text-accent">
                成果
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
