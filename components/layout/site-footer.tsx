const sitemap = [
  { label: '会社概要', href: '#about' },
  { label: '事業内容', href: '#services' },
  { label: '実績', href: '#case-studies' },
  { label: 'お問い合わせ', href: '#contact' },
];

const SiteFooter = () => {
  return (
    <footer className="bg-secondary py-16 text-secondary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-heading text-xl tracking-wide">Lumière</p>
          <p className="mt-3 text-sm text-secondary-foreground/70">
            株式会社Lumière
            <br />
            〒100-0001 東京都千代田区千代田1-1
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
          {sitemap.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-12 text-center text-xs text-secondary-foreground/50">
        &copy; {new Date().getFullYear()} Lumière Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default SiteFooter;
