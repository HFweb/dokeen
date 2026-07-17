'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/data/products';

export default function ProductActions({ product }: { product: Product }) {
  const isSingleSize = product.sizes.length <= 1;
  const [selectedSize, setSelectedSize] = useState<string | null>(
    isSingleSize ? (product.sizes[0] ?? 'Taille unique') : null
  );
  const [showError, setShowError] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    if (!selectedSize) {
      setShowError(true);
      setTimeout(() => setShowError(false), 2500);
      return;
    }
    addItem({
      id: `${product.id}-${selectedSize}`,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0] ?? '',
      size: selectedSize,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Size selector — only shown when multiple sizes exist */}
      {!isSingleSize && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-dk-black tracking-wide">
              Pointure
            </span>
            {showError ? (
              <span className="text-xs font-medium text-red-500 animate-pulse">
                Sélectionne une pointure
              </span>
            ) : selectedSize ? (
              <span className="text-xs text-dk-gray-500">EU {selectedSize}</span>
            ) : (
              <span className="text-xs text-dk-gray-500">Choisir une pointure</span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => {
                  setSelectedSize(size);
                  setShowError(false);
                }}
                className={`w-12 h-12 rounded-xl text-sm font-medium border-2 transition-all duration-150 ${
                  selectedSize === size
                    ? 'bg-dk-black text-white border-dk-black'
                    : showError
                    ? 'bg-white text-dk-black border-red-300 hover:border-red-400'
                    : 'bg-white text-dk-black border-dk-gray-200 hover:border-dk-gray-500'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CTA buttons */}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className={`w-full py-4 font-semibold text-sm rounded-full transition-all duration-200 ${
            added
              ? 'bg-green-600 text-white'
              : showError
              ? 'bg-red-500 text-white'
              : 'bg-dk-black text-white hover:bg-dk-gray-900'
          }`}
        >
          {added
            ? '✓ Ajouté au panier'
            : showError
            ? 'Sélectionne une pointure d\'abord'
            : 'Ajouter au panier'}
        </button>

        <button
          type="button"
          className="w-full py-4 border-2 border-dk-gray-200 text-dk-black font-semibold text-sm rounded-full hover:border-dk-gray-500 transition-colors"
        >
          Me prévenir du prochain drop
        </button>
      </div>
    </div>
  );
}
