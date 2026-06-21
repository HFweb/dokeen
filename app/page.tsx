import type { Metadata } from 'next';
import Link from 'next/link';
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
      <section className="bg-dk-black text-dk-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end pr-8 md:pr-16">
          <span className="font-heading text-[40vw] md:text-[30vw] font-bold text-white/[0.025] leading-none">
            DK
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 lg:py-52">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 mb-6">
              Le shop des tendances rares
            </span>
            <h1 className="font-heading font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[96px] leading-[0.92] tracking-tight mb-8">
              Do
              <br />
              Keen.
            </h1>
            <p className="text-dk-gray-500 text-base sm:text-lg leading-relaxed max-w-lg mb-10">
              Découvrez une sélection de sneakers, vêtements et accessoires choisis
              pour leur style, leur rareté et leur potentiel tendance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          {/* Image placeholder */}
          <div
            className="relative aspect-square rounded-2xl overflow-hidden"
            style={{ backgroundColor: latestDrop.color }}
          >
            <div className="absolute inset-0 flex items-center justify-center select-none">
              <span className="font-heading font-bold text-[160px] text-white/[0.05] leading-none">
                DK
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20 backdrop-blur-sm">
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
