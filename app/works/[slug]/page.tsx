import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '@/components/media/photo';
import { getWorkBySlug, works } from '@/lib/works-data';
import { SECTION_PY_STANDARD, SECTION_PY_STRONG } from '@/lib/section-spacing';

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: work.companyLabel,
    description: work.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <>
      <section className={SECTION_PY_STANDARD}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Link
              href="/works"
              className="mb-4 inline-flex text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              ← 実績一覧
            </Link>
            <p className="text-sm font-medium text-accent">{work.industry}</p>
            <h1 className="mt-2 font-body text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {work.companyLabel}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {work.summary}
            </p>
          </div>

          <Photo
            src={work.image}
            alt={work.companyLabel}
            ratio="aspect-[3/2]"
            priority
          />
        </div>
      </section>

      <section className={`${SECTION_PY_STANDARD} bg-surface`}>
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-body text-2xl font-bold text-foreground">
            課題
          </h2>
          <p className="text-base leading-relaxed text-foreground">
            {work.challenge}
          </p>
        </div>
      </section>

      <section className={SECTION_PY_STANDARD}>
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-body text-2xl font-bold text-foreground">
            施策
          </h2>
          <ul className="flex flex-col gap-4">
            {work.approach.map((item) => (
              <li
                key={item}
                className="border-t border-border pt-4 text-base leading-relaxed text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${SECTION_PY_STANDARD} bg-surface`}>
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-body text-2xl font-bold text-foreground">
            成果
          </h2>
          <p className="font-body text-lg font-bold leading-relaxed text-accent">
            {work.result}
          </p>
        </div>
      </section>

      <section className={SECTION_PY_STRONG}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-6 font-body text-2xl font-bold text-foreground">
            同様のお悩みはございませんか
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            貴社の状況に合わせて、具体的な進め方をご提案します。
          </p>
          <Link
            href="/#contact"
            className="inline-flex rounded-button bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-secondary"
          >
            お問い合わせする
          </Link>
        </div>
      </section>
    </>
  );
}
