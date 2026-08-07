import Link from 'next/link';
import Photo from '@/components/media/photo';
import { SECTION_PY_STANDARD } from '@/lib/section-spacing';

const stats = [
  { eyebrow: '創業', number: '15', unit: '年', caption: '一貫した支援体制' },
  {
    eyebrow: '支援実績',
    number: '120',
    unit: '社以上',
    caption: '業種を問わない実績',
  },
  { eyebrow: '継続率', number: '95', unit: '%', caption: '長期的な信頼関係' },
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

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 px-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.eyebrow} className="flex flex-col items-start">
            <span className="text-sm text-muted-foreground">
              {stat.eyebrow}
            </span>
            <span className="mt-1 flex items-end font-body leading-none font-bold text-accent">
              <span className="text-[80px] sm:text-[96px] lg:text-[120px]">
                {stat.number}
              </span>
              <span className="mb-1 ml-1 text-xl sm:text-2xl">
                {stat.unit}
              </span>
            </span>

            <div className="mt-4 w-fit -skew-x-12 bg-primary px-6 py-2">
              <span className="inline-block skew-x-12 whitespace-nowrap text-sm font-medium text-primary-foreground">
                {stat.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <Link
          href="/numbers"
          className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          数字で見るLumièreはこちら →
        </Link>
      </div>
    </section>
  );
};

export default CompanyOverview;
