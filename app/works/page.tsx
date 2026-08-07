import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/media/photo';
import { works } from '@/lib/works-data';
import { SECTION_PY_STANDARD } from '@/lib/section-spacing';

export const metadata: Metadata = {
  title: '実績・導入事例',
  description:
    '製造業、金融業、小売業における株式会社Lumièreの支援事例をご紹介します。',
};

export default function WorksPage() {
  return (
    <section className={SECTION_PY_STANDARD}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm font-medium text-accent">実績・導入事例</p>
        <h1 className="max-w-2xl font-body text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          業種を問わず、実行できる成果を。
        </h1>

        <div className="mt-16 flex flex-col gap-16">
          {works.map((work, index) => (
            <div
              key={work.slug}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Photo
                src={work.image}
                alt={work.companyLabel}
                ratio="aspect-[3/2]"
              />
              <div>
                <p className="text-sm font-medium text-accent">
                  {work.industry}
                </p>
                <h2 className="mt-2 font-body text-2xl font-bold text-foreground">
                  {work.companyLabel}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {work.summary}
                </p>
                <Link
                  href={`/works/${work.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  事例を見る →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
