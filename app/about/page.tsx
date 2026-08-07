import type { Metadata } from 'next';
import Photo from '@/components/media/photo';
import { SECTION_PY_STANDARD } from '@/lib/section-spacing';

export const metadata: Metadata = {
  title: '会社概要',
  description:
    '株式会社Lumièreの代表メッセージ、沿革、実績数値、企業理念をご紹介します。',
};

const history = [
  { year: '2011', event: '株式会社Lumière設立、経営戦略コンサルティングを開始' },
  { year: '2015', event: '組織開発支援サービスを開始' },
  { year: '2018', event: '業務プロセス改善支援サービスを開始' },
  { year: '2021', event: 'M&Aアドバイザリー部門を新設' },
  { year: '2024', event: '支援実績120社を突破' },
];

const stats = [
  { value: '15年', label: '創業からの実績' },
  { value: '120社以上', label: '累計支援実績' },
  { value: '95%', label: '顧客継続率' },
  { value: '4部門', label: '専門支援領域' },
];

const principles = [
  {
    title: '誠実であること',
    description: '短期的な成果より、長期的な信頼関係を優先します。',
  },
  {
    title: '専門性を磨き続けること',
    description: '経営環境の変化に対応できる知見を常に更新します。',
  },
  {
    title: '現場に寄り添うこと',
    description: '机上の戦略ではなく、実行できる支援にこだわります。',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 代表メッセージ — text-centric with supporting photo */}
      <section className={SECTION_PY_STANDARD}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium text-accent">会社概要</p>
            <h1 className="font-body text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              代表メッセージ
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              変化の激しい時代においても、経営の意思決定に必要なのは派手な施策ではなく、確かな実績に裏付けられた誠実な助言だと考えています。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              株式会社Lumièreは創業以来、企業の経営層に寄り添い、専門性と長期的な視点で事業の成長を支援してまいりました。今後も、現場で実行できる支援にこだわり続けます。
            </p>
          </div>

          <Photo
            src="/images/about-team.jpg"
            alt="株式会社Lumièreの経営チーム"
            ratio="aspect-[4/5]"
          />
        </div>
      </section>

      {/* 沿革 — timeline composition, distinct from the message block above */}
      <section className={`${SECTION_PY_STANDARD} bg-surface`}>
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 font-body text-3xl font-bold tracking-tight text-foreground">
            沿革
          </h2>
          <ol className="flex flex-col gap-8">
            {history.map((item) => (
              <li
                key={item.year}
                className="grid grid-cols-[5rem_1fr] gap-6 border-t border-border pt-6 first:border-t-0 first:pt-0"
              >
                <span className="font-body text-lg font-bold text-accent">
                  {item.year}
                </span>
                <span className="text-base leading-relaxed text-foreground">
                  {item.event}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 実績数値 — numeric composition */}
      <section className={SECTION_PY_STANDARD}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 font-body text-3xl font-bold tracking-tight text-foreground">
            実績数値
          </h2>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-start">
                <span className="font-body text-3xl font-bold text-accent md:text-4xl">
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

      {/* 企業理念 — three-column value statements */}
      <section className={`${SECTION_PY_STANDARD} bg-surface`}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 font-body text-3xl font-bold tracking-tight text-foreground">
            企業理念
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h3 className="font-body text-lg font-bold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
