import Link from 'next/link';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import Badge from './Badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/boutique/${product.slug}`}
      className="group flex flex-col"
    >
      {/* Image placeholder */}
      <div
        className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4"
        style={{ backgroundColor: product.color }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
          <span className="text-white/10 font-heading font-bold text-7xl select-none">
            DK
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge label={product.badge} />
        </div>
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
        <p className="text-dk-black font-medium text-sm mt-0.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
