import type { Metadata } from 'next';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

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

      {/* Filter bar (visual only) */}
      <div className="flex items-center gap-3 mb-12 flex-wrap">
        {['Tous', 'Sneakers', 'Accessoires'].map((cat) => (
          <button
            key={cat}
            type="button"
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              cat === 'Tous'
                ? 'bg-dk-black text-dk-white border-dk-black'
                : 'bg-transparent text-dk-gray-500 border-dk-gray-200 hover:border-dk-gray-500 hover:text-dk-black'
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-dk-gray-500 text-sm hidden sm:block">
          {products.length} produit{products.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
