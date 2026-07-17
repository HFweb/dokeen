import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'DoKeen — Le shop des tendances rares',
  description:
    'Découvrez une sélection de sneakers, vêtements et accessoires choisis pour leur style, leur rareté et leur potentiel tendance.',
};

const pillars = [
  {
    label: 'Curation',
    description:
      "Chaque produit est sélectionné à la main selon des critères stricts de style, de qualité et de potentiel tendance.",
  },
  {
    label: 'Rareté',
    description:
      "DoKeen ne vend pas ce qu'on trouve partout. On cherche ce qui est rare, ce qui va faire parler.",
  },
  {
    label: 'Street premium',
    description:
      "L'équilibre parfait entre l'énergie du streetwear et l'exigence du premium. Sans compromis.",
  },
  {
    label: 'Culture',
    description:
      "On connaît la culture. Les drops, les collab, les trends. On les anticipe avant tout le monde.",
  },
];

const reassurance = [
  {
    label: 'Paiement sécurisé',
    description: 'Transactions protégées et chiffrées',
  },
  {
    label: 'Livraison suivie',
    description: 'Suivi en temps réel de votre commande',
  },
  {
    label: 'Retours',
    description: 'Selon nos conditions de retour en vigueur',
  },
  {
    label: 'Service client',
    description: 'Réponse sous 48h à contact@dokeen.com',
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const latestDrop = products[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-dk-black text-dk-white relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background watermark */}
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
          <span className="font-heading text-[50vw] md:text-[35vw] font-bold text-white/[0.02] leading-none">
            DK
          </span>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div>
                <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-dk-gray-500 mb-5">
                  Le shop des tendances rares
                </span>
                <h1 className="font-heading font-bold text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                  Des paires
                  <br />
                  <span className="text-white/40">qui font</span>
                  <br />
                  la différence.
                </h1>
              </div>
              <p className="text-dk-gray-500 text-base leading-relaxed max-w-sm">
                Découvrez une sélection de sneakers, vêtements et accessoires choisis
                pour leur style, leur rareté et leur potentiel tendance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/boutique"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-dk-white text-dk-black text-sm font-semibold rounded-full hover:bg-dk-cream transition-colors"
                >
                  Découvrir la boutique
                </Link>
                <Link
                  href={`/boutique/${latestDrop.slug}`}
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-dk-white text-sm font-semibold rounded-full hover:border-white/50 transition-colors"
                >
                  Voir le dernier drop
                </Link>
              </div>
              {/* Social mini */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs text-dk-gray-500 uppercase tracking-widest">Suivez-nous</span>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/dokeenshop" target="_blank" rel="noopener noreferrer" className="text-dk-gray-500 hover:text-white transition-colors" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@dokeenshop" target="_blank" rel="noopener noreferrer" className="text-dk-gray-500 hover:text-white transition-colors" aria-label="TikTok">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
                  </a>
                  <a href="https://snapchat.com/t/uY7UivnR" target="_blank" rel="noopener noreferrer" className="text-dk-gray-500 hover:text-white transition-colors" aria-label="Snapchat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.621 0 11.985-5.365 11.985-11.987C24.002 5.367 18.638.001 12.017.001z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none aspect-square">
                {latestDrop.images.length > 0 ? (
                  <Image
                    src={latestDrop.images[0]}
                    alt={latestDrop.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 1024px) 80vw, 45vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading font-bold text-[120px] text-white/[0.05] leading-none select-none">DK</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-2">
              Sélection DoKeen
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dk-black">
              Produits en avant
            </h2>
          </div>
          <Link
            href="/boutique"
            className="hidden sm:inline-flex items-center text-sm font-medium text-dk-gray-500 hover:text-dk-black transition-colors gap-1.5"
          >
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 sm:hidden text-center">
          <Link
            href="/boutique"
            className="inline-flex items-center text-sm font-medium text-dk-gray-500 hover:text-dk-black transition-colors"
          >
            Voir tous les produits →
          </Link>
        </div>
      </section>

      {/* Pourquoi DoKeen */}
      <section className="bg-dk-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-2">
              Notre philosophie
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dk-black">
              Pourquoi DoKeen ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-dk-black flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-dk-white text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-dk-black">
                  {pillar.label}
                </h3>
                <p className="text-dk-gray-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dernier drop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className="relative aspect-square rounded-2xl overflow-hidden"
            style={{ backgroundColor: latestDrop.images.length > 0 ? '#F7F7F2' : latestDrop.color }}
          >
            {latestDrop.images.length > 0 ? (
              <Image
                src={latestDrop.images[0]}
                alt={latestDrop.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center select-none">
                  <span className="font-heading font-bold text-[160px] text-white/[0.05] leading-none">DK</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              </>
            )}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-dk-black/80 text-white border border-white/10 backdrop-blur-sm">
                Dernier drop
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500">
              À ne pas manquer
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black leading-tight">
              {latestDrop.name}
            </h2>
            <p className="text-dk-gray-500 text-base leading-relaxed">
              {latestDrop.longDescription}
            </p>
            <div className="flex items-center gap-5 pt-2">
              <Link
                href={`/boutique/${latestDrop.slug}`}
                className="inline-flex items-center px-6 py-3 bg-dk-black text-dk-white text-sm font-semibold rounded-full hover:bg-dk-gray-900 transition-colors"
              >
                Voir le produit
              </Link>
              <span className="font-heading font-bold text-2xl text-dk-black">
                {latestDrop.price.toFixed(2).replace('.', ',')} €
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="border-y border-dk-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {reassurance.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dk-black flex items-center justify-center shrink-0">
                  <span className="text-dk-white text-xs font-heading font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="font-heading font-semibold text-sm text-dk-black">
                  {item.label}
                </p>
                <p className="text-dk-gray-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-dk-black text-dk-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-4">
            Ne manque rien
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dk-white mb-4">
            Les drops en avant-première
          </h2>
          <p className="text-dk-gray-500 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Inscris-toi pour recevoir nos drops, sélections et actualités en avant-première.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ton@email.com"
              readOnly
              className="flex-1 px-5 py-3 bg-white/5 border border-white/10 text-dk-white placeholder:text-dk-gray-500 rounded-full text-sm focus:outline-none cursor-default"
            />
            <button
              type="button"
              className="px-6 py-3 bg-dk-white text-dk-black text-sm font-semibold rounded-full hover:bg-dk-cream transition-colors whitespace-nowrap"
            >
              Je m&apos;inscris
            </button>
          </div>
          <p className="text-dk-gray-500 text-[11px] mt-5 opacity-60">
            Newsletter visuelle — non fonctionnelle pour la V1
          </p>
        </div>
      </section>
    </>
  );
}
