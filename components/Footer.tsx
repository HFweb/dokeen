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

export default function Footer() {
  return (
    <footer className="bg-dk-black text-dk-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
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
            <p className="text-dk-gray-500 text-xs mt-2">
              contact@dokeen.com
            </p>
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
        <div className="py-6 border-t border-dk-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dk-gray-500 text-xs">
            © {new Date().getFullYear()} DoKeen. Tous droits réservés.
          </p>
          <p className="text-dk-gray-500 text-xs">
            Le shop des tendances rares
          </p>
        </div>
      </div>
    </footer>
  );
}
