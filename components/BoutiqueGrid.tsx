'use client';

import { useState } from 'react';
import type { Product, CategoryType } from '@/data/products';
import ProductCard from './ProductCard';

const FILTERS: { label: string; value: CategoryType | 'Tous' }[] = [
  { label: 'Tous', value: 'Tous' },
  { label: 'Sneakers', value: 'Sneakers' },
  { label: 'Accessoires', value: 'Accessoires' },
];

interface BoutiqueGridProps {
  products: Product[];
}

export default function BoutiqueGrid({ products }: BoutiqueGridProps) {
  const [active, setActive] = useState<CategoryType | 'Tous'>('Tous');

  const filtered =
    active === 'Tous' ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Filter bar */}
      <div className="flex items-center gap-3 mb-12 flex-wrap">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => setActive(value)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              active === value
                ? 'bg-dk-black text-dk-white border-dk-black'
                : 'bg-transparent text-dk-gray-500 border-dk-gray-200 hover:border-dk-gray-500 hover:text-dk-black'
            }`}
          >
            {label}
          </button>
        ))}
        <span className="ml-auto text-dk-gray-500 text-sm hidden sm:block">
          {filtered.length} produit{filtered.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-dk-gray-500">Aucun produit dans cette catégorie.</p>
        </div>
      )}
    </>
  );
}
