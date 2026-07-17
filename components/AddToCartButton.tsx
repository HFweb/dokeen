'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/data/products';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0] ?? '',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`w-full py-4 font-semibold text-sm rounded-full transition-all duration-200 ${
        added
          ? 'bg-green-500 text-white'
          : 'bg-dk-black text-dk-white hover:bg-dk-gray-900'
      }`}
    >
      {added ? '✓ Ajouté au panier' : 'Ajouter au panier'}
    </button>
  );
}
