'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import Badge from './Badge';
import { useWishlist } from '@/hooks/useWishlist';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasImage = product.images.length > 0;
  const { saved, toggle } = useWishlist(product.id);

  return (
    <Link href={`/boutique/${product.slug}`} className="group flex flex-col">
      {/* Image */}
      <div
        className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4"
        style={{ backgroundColor: hasImage ? '#F7F7F2' : product.color }}
      >
        {hasImage ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center select-none">
            <span className="text-white/10 font-heading font-bold text-7xl">DK</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <Badge label={product.badge} />
        </div>

        {/* Wishlist heart */}
        <button
          onClick={toggle}
          aria-label={saved ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            saved
              ? 'bg-dk-black text-white'
              : 'bg-white/80 text-dk-gray-500 hover:bg-white hover:text-dk-black'
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={saved ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dk-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] text-dk-gray-500 uppercase tracking-widest font-medium">
          {product.category}
        </span>
        <h3 className="font-heading font-semibold text-dk-black text-base group-hover:text-dk-gray-900 transition-colors">
          {product.name}
        </h3>
        <p className="text-dk-black font-medium text-sm mt-0.5">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
