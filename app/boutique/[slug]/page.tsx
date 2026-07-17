import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getRelatedProducts, formatPrice, products } from '@/data/products';
import Badge from '@/components/Badge';
import ProductCard from '@/components/ProductCard';
import ImageGallery from '@/components/ImageGallery';
import ProductActions from '@/components/ProductActions';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Produit introuvable' };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-dk-gray-500 mb-10">
        <Link href="/" className="hover:text-dk-black transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/boutique" className="hover:text-dk-black transition-colors">Boutique</Link>
        <span>/</span>
        <span className="text-dk-black">{product.name}</span>
      </nav>

      {/* Product layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28">
        {/* Gallery */}
        <div className="relative">
          <div className="absolute top-4 left-4 z-10">
            <Badge label={product.badge} />
          </div>
          <ImageGallery
            images={product.images}
            productName={product.name}
            fallbackColor={product.color}
          />
        </div>

        {/* Product info */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-2">
              {product.category}
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-dk-black">
              {product.name}
            </h1>
          </div>

          <p className="font-heading font-bold text-3xl text-dk-black">
            {formatPrice(product.price)}
          </p>

          <p className="text-dk-gray-500 text-base leading-relaxed border-t border-dk-gray-200 pt-6">
            {product.shortDescription}
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-3">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-dk-gray-900">
                <span className="w-4 h-4 rounded-full bg-dk-black text-dk-white flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold">
                  ✓
                </span>
                {feat}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="pt-4 border-t border-dk-gray-200">
            <ProductActions product={product} />
          </div>

          {/* Delivery / returns */}
          <div className="bg-dk-cream rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span className="text-dk-gray-500 text-xs mt-0.5">📦</span>
              <div>
                <p className="text-sm font-semibold text-dk-black">Livraison</p>
                <p className="text-xs text-dk-gray-500 mt-0.5">
                  Livraison suivie. Délais selon disponibilité.{' '}
                  <Link href="/livraison" className="underline hover:text-dk-black transition-colors">
                    En savoir plus
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-dk-gray-500 text-xs mt-0.5">↩</span>
              <div>
                <p className="text-sm font-semibold text-dk-black">Retours</p>
                <p className="text-xs text-dk-gray-500 mt-0.5">
                  Selon nos conditions.{' '}
                  <Link href="/retours" className="underline hover:text-dk-black transition-colors">
                    Consulter la politique
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Social share */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs text-dk-gray-500">Partager :</span>
            <a
              href="https://www.instagram.com/dokeenshop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dk-gray-500 hover:text-dk-black transition-colors"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@dokeenshop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dk-gray-500 hover:text-dk-black transition-colors"
              aria-label="TikTok"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.02-.08z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Long description */}
      <div className="max-w-2xl mb-20 md:mb-28">
        <h2 className="font-heading font-bold text-2xl text-dk-black mb-5">
          À propos de ce produit
        </h2>
        <p className="text-dk-gray-500 leading-relaxed text-base">{product.longDescription}</p>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div>
          <h2 className="font-heading font-bold text-2xl text-dk-black mb-8">
            Vous aimerez aussi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
