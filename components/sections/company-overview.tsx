import Link from 'next/link';
import Photo from '@/components/media/photo';
import { SECTION_PY_STANDARD } from '@/lib/section-spacing';

const stats = [
  { value: '創業15年', label: '一貫した支援体制' },
  { value: '支援実績120社以上', label: '業種を問わない実績' },
  { value: '継続率95%', label: '長期的な信頼関係' },
];

const CompanyOverview = () => {
  return (
    <section id="about" className={`${SECTION_PY_STANDARD} bg-surface`}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          <p className="mb-6 text-sm font-medium text-accent">代表メッセージ</p>
          <blockquote className="font-body text-2xl font-bold leading-snug text-foreground md:text-3xl">
            派手な施策ではなく、確かな実績に裏付けられた誠実な助言を。
          </blockquote>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            株式会社Lumièreは創業以来、企業の経営層に寄り添い、専門性と長期的な視点で事業の成長を支援してまいりました。
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            会社概要を詳しく見る →
          </Link>
        </div>

        <Photo
          src="/images/about-team.jpg"
          alt="株式会社Lumièreの経営チーム"
          ratio="aspect-[4/5]"
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-start">
            <span className="font-body text-2xl font-bold text-accent md:text-3xl">
              {stat.value}
            </span>
            <span className="mt-2 text-sm text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyOverview;
