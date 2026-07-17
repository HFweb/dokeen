import type { Metadata } from 'next';
import { products } from '@/data/products';
import BoutiqueGrid from '@/components/BoutiqueGrid';

export const metadata: Metadata = {
  title: 'Boutique',
  description:
    'Explorez la sélection DoKeen : sneakers tendance, bonnets et accessoires premium street.',
};

export default function BoutiquePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="mb-14 max-w-xl">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
          Tous les produits
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black mb-4">
          La boutique
        </h1>
        <p className="text-dk-gray-500 text-base leading-relaxed">
          Une sélection resserrée, choisie pour son potentiel tendance, sa qualité et son style.
          Rien de superflu. Que du bon.
        </p>
      </div>

      <BoutiqueGrid products={products} />
    </div>
  );
}
