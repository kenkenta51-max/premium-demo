import type { Metadata } from "next";
import { EB_Garamond, Lato, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import "./globals.css";

// Heading typeface — EB Garamond (Latin authority serif) + Noto Serif JP (Japanese counterpart)
const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Body typeface — Lato (Latin) + Noto Sans JP (Japanese counterpart)
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社Lumière | 経営コンサルティング",
    template: "%s | 株式会社Lumière",
  },
  description:
    "株式会社Lumièreは、経営戦略・組織開発・業務プロセス改善・M&Aアドバイザリーを手がけるBtoBコンサルティングファームです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${ebGaramond.variable} ${notoSerifJP.variable} ${lato.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
