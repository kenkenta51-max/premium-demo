import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '@/components/media/photo';
import { getServiceBySlug, services } from '@/lib/services-data';
import { SECTION_PY_STANDARD, SECTION_PY_STRONG } from '@/lib/section-spacing';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className={SECTION_PY_STANDARD}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Link
              href="/services"
              className="mb-4 inline-flex text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              ← 事業内容一覧
            </Link>
            <h1 className="font-body text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {service.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {service.overview}
            </p>
          </div>

          <Photo
            src={service.image}
            alt={service.title}
            ratio="aspect-[4/3]"
            priority
          />
        </div>
      </section>

      <section className={`${SECTION_PY_STANDARD} bg-surface`}>
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 font-body text-2xl font-bold text-foreground">
            提供内容
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.offerings.map((offering) => (
              <li
                key={offering}
                className="border-t border-border pt-4 text-base text-foreground"
              >
                {offering}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={SECTION_PY_STANDARD}>
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 font-body text-2xl font-bold text-foreground">
            進め方
          </h2>
          <ol className="flex flex-col gap-6">
            {service.process.map((step) => (
              <li key={step.step} className="flex gap-6">
                <span className="font-body text-xl font-bold text-accent">
                  {step.step}
                </span>
                <span className="text-base leading-relaxed text-foreground">
                  {step.description}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${SECTION_PY_STANDARD} bg-surface`}>
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 font-body text-2xl font-bold text-foreground">
            こんな企業様へ
          </h2>
          <ul className="flex flex-col gap-4">
            {service.targetProfile.map((profile) => (
              <li
                key={profile}
                className="text-base leading-relaxed text-foreground"
              >
                ・{profile}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={SECTION_PY_STRONG}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-6 font-body text-2xl font-bold text-foreground">
            {service.title}についてのご相談
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            貴社の状況に合わせた進め方をご提案します。まずはお気軽にお問い合わせください。
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
