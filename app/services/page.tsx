import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/media/photo';
import { services } from '@/lib/services-data';
import { SECTION_PY_STANDARD } from '@/lib/section-spacing';

export const metadata: Metadata = {
  title: '事業内容',
  description:
    '経営戦略コンサルティング、組織開発支援、業務プロセス改善、M&Aアドバイザリーの4つのサービスをご紹介します。',
};

export default function ServicesPage() {
  return (
    <section className={SECTION_PY_STANDARD}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm font-medium text-accent">事業内容</p>
        <h1 className="max-w-2xl font-body text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          4つの専門領域で、経営を支援します。
        </h1>

        <div className="mt-16 flex flex-col gap-16">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Photo
                src={service.image}
                alt={service.title}
                ratio="aspect-[4/3]"
              />
              <div>
                <h2 className="font-body text-2xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  詳しく見る →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
