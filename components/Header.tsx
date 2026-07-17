'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-dk-white/95 backdrop-blur-sm border-b border-dk-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
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

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart icon */}
            <button
              type="button"
              className="relative p-2 text-dk-gray-500 hover:text-dk-black transition-colors"
              aria-label={`Panier — ${count} article${count > 1 ? 's' : ''}`}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-dk-black text-dk-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>

            <Link
              href="/boutique"
              className="inline-flex items-center px-5 py-2 bg-dk-black text-dk-white text-sm font-medium rounded-full hover:bg-dk-gray-900 transition-colors"
            >
              Boutique
            </Link>
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-2">
            {/* Cart mobile */}
            <button
              type="button"
              className="relative p-2 text-dk-gray-500"
              aria-label="Panier"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-dk-black text-dk-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="p-2 -mr-2 text-dk-black"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
            >
              <div className="flex flex-col gap-[5px] w-5">
                <span className={`block h-[1.5px] bg-dk-black origin-center transition-all duration-200 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block h-[1.5px] bg-dk-black transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-[1.5px] bg-dk-black origin-center transition-all duration-200 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </div>
            </button>
          </div>
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
                pathname === link.href ? 'text-dk-black' : 'text-dk-gray-500'
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
              Voir la boutique
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
