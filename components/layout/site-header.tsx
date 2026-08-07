'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const services = [
  { label: '経営戦略コンサルティング', href: '#services' },
  { label: '組織開発支援', href: '#services' },
  { label: '業務プロセス改善', href: '#services' },
  { label: 'M&Aアドバイザリー', href: '#services' },
];

const navLinks = [
  { label: '会社概要', href: '#about' },
  { label: '実績', href: '#case-studies' },
  { label: 'お問い合わせ', href: '#contact' },
];

const Logo = () => (
  <a href="#top" className="flex items-center gap-2">
    <Image
      src="/lumiere-logo.png"
      alt="株式会社Lumière ロゴ"
      width={32}
      height={32}
      className="h-8 w-8"
      priority
    />
    <span className="font-heading text-xl tracking-wide text-foreground">
      Lumière
    </span>
  </a>
);

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm text-foreground transition-colors hover:text-muted-foreground"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        事業内容
        <ChevronDown
          strokeWidth={1.5}
          className={`size-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-0 top-full mt-3 w-64 rounded-card border border-border bg-surface py-2 shadow-lg"
          >
            {services.map((service) => (
              <li key={service.label} role="none">
                <a
                  role="menuitem"
                  href={service.href}
                  className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-background hover:text-primary"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? 'border-border' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="flex items-center gap-8">
          <a
            href={navLinks[0].href}
            className="text-sm text-foreground transition-colors hover:text-muted-foreground"
          >
            {navLinks[0].label}
          </a>
          <ServicesDropdown />
          <a
            href={navLinks[1].href}
            className="text-sm text-foreground transition-colors hover:text-muted-foreground"
          >
            {navLinks[1].label}
          </a>
          <a
            href={navLinks[2].href}
            className="text-sm text-primary transition-colors hover:text-foreground"
          >
            {navLinks[2].label}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
