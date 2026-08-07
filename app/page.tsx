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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-body text-3xl font-bold tracking-tight text-foreground">
            長年の実績と、誠実な伴走。
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            株式会社Lumièreは、企業経営における意思決定を専門性と誠実さで支えるBtoBコンサルティングファームです。
            派手な提案ではなく、確かな実績に基づく助言を通じて、お客様の事業を長期的に支援します。
          </p>
        </div>
      </ScrollExpandMedia>

      <CompanyOverview />
      <Services />
      <CaseStudies />
      <ContactCta />
    </>
  );
}
