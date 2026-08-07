import type { Metadata } from 'next';
import CategoryTabs from '@/components/numbers/category-tabs';
import { SECTION_PY_STANDARD } from '@/lib/section-spacing';

export const metadata: Metadata = {
  title: '数字で見るLumière',
  description:
    '株式会社Lumièreを、会社・事業・お客様の3つの切り口で数字からご紹介します。',
};

export default function NumbersPage() {
  return (
    <section className={SECTION_PY_STANDARD}>
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 text-sm font-medium text-accent">Lumièreを知る</p>
        <h1 className="font-body text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          数字で見るLumière
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          会社のこと、事業のこと、お客様のこと。3つの切り口で、株式会社Lumièreの実績をご紹介します。
        </p>

        <div className="mt-16">
          <CategoryTabs />
        </div>
      </div>
    </section>
  );
}
