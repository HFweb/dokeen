import Link from 'next/link';

const shopLinks = [
  { href: '/boutique', label: 'Tous les produits' },
  { href: '/boutique', label: 'Sneakers' },
  { href: '/boutique', label: 'Accessoires' },
];

const infoLinks = [
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

const legalLinks = [
  { href: '/livraison', label: 'Livraison' },
  { href: '/retours', label: 'Retours & remboursements' },
  { href: '/cgv', label: 'CGV' },
  { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
  { href: '/mentions-legales', label: 'Mentions légales' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dokeenshop',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@dokeenshop',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.02-.08z" />
      </svg>
    ),
  },
  {
    label: 'Snapchat',
    href: 'https://snapchat.com/t/uY7UivnR',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.083.045.206.09.36.09.3-.016.659-.12 1.061-.301.141-.06.298-.091.45-.091.352 0 .7.152.948.413.231.266.321.607.236.946-.147.592-.714 1.011-1.846 1.462-.1.037-.23.097-.375.166-.063.034-.135.068-.213.101.015.058.03.117.049.178.092.308.194.641.083.974-.063.189-.205.371-.356.482-.315.22-.622.224-.938.228h-.15c-.21 0-.524.07-.865.19-.316.105-.644.279-.97.426-.305.128-.624.234-.946.319-.15.034-.303.059-.458.073-.16.013-.32.016-.48.013-.375-.007-.744-.08-1.08-.213a3.987 3.987 0 00-.4-.133c-.375-.093-.838-.093-1.217 0a3.987 3.987 0 00-.4.133c-.336.133-.705.206-1.08.213-.16.003-.32 0-.48-.013-.155-.014-.308-.039-.458-.073-.322-.085-.641-.191-.946-.319-.326-.147-.654-.321-.97-.426-.341-.12-.655-.19-.865-.19h-.15c-.316-.004-.623-.008-.938-.228-.151-.111-.293-.293-.356-.482-.111-.333-.009-.666.083-.974.019-.061.034-.12.049-.178a3.59 3.59 0 01-.213-.101c-.145-.069-.275-.129-.375-.166C.554 11.393-.014 10.974-.16 10.382c-.085-.34.005-.68.236-.946.248-.261.596-.413.948-.413.152 0 .309.031.45.091.402.181.761.285 1.061.301.154 0 .277-.045.36-.09-.008-.165-.018-.33-.03-.51l-.003-.06C2.757 7.933 2.631 5.907 3.16 4.714 4.743 1.169 8.1.793 9.09.793z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-dk-black text-dk-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-dk-white text-dk-black text-[11px] font-heading font-bold rounded select-none">
                DK
              </span>
              <span className="font-heading font-bold text-xl text-dk-white tracking-tight">
                DoKeen
              </span>
            </div>
            <p className="text-dk-gray-500 text-sm leading-relaxed max-w-48">
              Le shop des tendances rares. Sélection street premium.
            </p>
            <p className="text-dk-gray-500 text-xs">contact@dokeen.com</p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-dk-gray-500 hover:text-dk-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500">
              Boutique
            </h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-dk-gray-200 hover:text-dk-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500">
              Informations
            </h4>
            <ul className="flex flex-col gap-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dk-gray-200 hover:text-dk-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500">
              Légal
            </h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dk-gray-200 hover:text-dk-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dk-gray-500 text-xs">
            © {new Date().getFullYear()} DoKeen. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dk-gray-500 hover:text-dk-white text-xs transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
