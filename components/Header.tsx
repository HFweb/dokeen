'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-dk-white/95 backdrop-blur-sm border-b border-dk-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setOpen(false)}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 bg-dk-black text-dk-white text-[11px] font-heading font-bold rounded select-none">
              DK
            </span>
            <span className="font-heading font-bold text-xl text-dk-black tracking-tight">
              DoKeen
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-dk-black'
                    : 'text-dk-gray-500 hover:text-dk-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/boutique"
              className="inline-flex items-center px-5 py-2 bg-dk-black text-dk-white text-sm font-medium rounded-full hover:bg-dk-gray-900 transition-colors"
            >
              Découvrir la boutique
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-dk-black"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <div className="flex flex-col gap-[5px] w-5">
              <span
                className={`block h-[1.5px] bg-dk-black origin-center transition-all duration-200 ${
                  open ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] bg-dk-black transition-all duration-200 ${
                  open ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] bg-dk-black origin-center transition-all duration-200 ${
                  open ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-dk-gray-200 bg-dk-white overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 sm:px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'text-dk-black'
                  : 'text-dk-gray-500'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-dk-gray-200">
            <Link
              href="/boutique"
              className="inline-flex items-center px-5 py-2.5 bg-dk-black text-dk-white text-sm font-medium rounded-full"
              onClick={() => setOpen(false)}
            >
              Découvrir la boutique
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
