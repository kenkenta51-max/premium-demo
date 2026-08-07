import Link from 'next/link';
import Photo from '@/components/media/photo';
import { services } from '@/lib/services-data';
import { SECTION_PY_STANDARD } from '@/lib/section-spacing';

const Services = () => {
  return (
    <section id="services" className={SECTION_PY_STANDARD}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-body text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            事業内容
          </h2>
          <Link
            href="/services"
            className="text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            事業内容一覧を見る →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug}>
              <Photo
                src={service.image}
                alt={service.title}
                ratio="aspect-[4/3]"
              />
              <h3 className="mt-5 font-body text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-3 inline-flex text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                詳しく見る →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
