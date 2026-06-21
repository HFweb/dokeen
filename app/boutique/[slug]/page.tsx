import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getRelatedProducts, formatPrice, products } from '@/data/products';
import Badge from '@/components/Badge';
import ProductCard from '@/components/ProductCard';

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

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-dk-gray-500 mb-10">
        <Link href="/" className="hover:text-dk-black transition-colors">
          Accueil
        </Link>
        <span>/</span>
        <Link href="/boutique" className="hover:text-dk-black transition-colors">
          Boutique
        </Link>
        <span>/</span>
        <span className="text-dk-black">{product.name}</span>
      </nav>

      {/* Product layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28">
        {/* Product image */}
        <div
          className="relative aspect-square rounded-2xl overflow-hidden"
          style={{ backgroundColor: product.color }}
        >
          <div className="absolute inset-0 flex items-center justify-center select-none">
            <span className="font-heading font-bold text-[160px] text-white/[0.05] leading-none">
              DK
            </span>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-5 left-5">
            <Badge label={product.badge} />
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-2">
                {product.category}
              </span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl text-dk-black">
                {product.name}
              </h1>
            </div>
            <Badge label={product.badge} size="md" />
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
          <div className="flex flex-col gap-3 pt-4 border-t border-dk-gray-200">
            <button
              type="button"
              className="w-full py-4 bg-dk-black text-dk-white font-semibold text-sm rounded-full hover:bg-dk-gray-900 transition-colors"
            >
              Ajouter au panier
            </button>
            <button
              type="button"
              className="w-full py-4 border border-dk-gray-200 text-dk-black font-semibold text-sm rounded-full hover:border-dk-gray-500 transition-colors"
            >
              Me prévenir du prochain drop
            </button>
          </div>

          {/* Delivery info */}
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
        </div>
      </div>

      {/* Long description */}
      <div className="max-w-2xl mb-20 md:mb-28">
        <h2 className="font-heading font-bold text-2xl text-dk-black mb-5">
          À propos de ce produit
        </h2>
        <p className="text-dk-gray-500 leading-relaxed text-base">
          {product.longDescription}
        </p>
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
