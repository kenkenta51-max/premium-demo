import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import CompanyOverview from '@/components/sections/company-overview';
import Services from '@/components/sections/services';
import CaseStudies from '@/components/sections/case-studies';
import ContactCta from '@/components/sections/contact-cta';

export default function Home() {
  return (
    <>
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/lumiere-hero.mp4"
        posterSrc="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
        bgImageSrc="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920&auto=format&fit=crop"
        title="信頼を、形に。"
        date="株式会社Lumière"
        scrollToExpand="スクロールしてご覧ください"
      >
        <div className="-mx-8 -my-10 bg-background-warm px-6 py-20 sm:px-10 md:-mx-16 md:px-16 lg:-my-20 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 lg:mb-16">
              <p className="font-body text-xs font-bold tracking-[0.2em] text-accent">
                OUR PHILOSOPHY
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                私たちが大切にしていること
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_auto_1fr] lg:items-start lg:gap-0">
              <h2 className="font-body text-[40px] font-bold leading-[1.15] tracking-tight text-primary sm:text-[48px] lg:text-[56px] lg:pr-16">
                長年の実績と、
                <br />
                誠実な伴走。
              </h2>

              <div
                aria-hidden="true"
                className="hidden w-px self-stretch bg-accent/40 lg:block"
              />
              <div
                aria-hidden="true"
                className="h-px w-16 bg-accent/50 lg:hidden"
              />

              <div className="lg:pl-16">
                <p className="font-body text-[22px] font-bold leading-snug text-foreground sm:text-[26px]">
                  確かな根拠と、
                  <br />
                  誠実な対話から。
                </p>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                  私たちは、企業の重要な意思決定に
                  <br />
                  寄り添い、本質的な課題を見極めます。
                </p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  ともに考え、実行まで伴走することで、
                  <br />
                  持続的な成長を支援します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>

      <CompanyOverview />
      <Services />
      <CaseStudies />
      <ContactCta />
    </>
  );
}
