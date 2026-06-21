import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page introuvable',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center py-20">
      <span className="font-heading font-bold text-[80px] sm:text-[120px] text-dk-gray-200 leading-none select-none">
        404
      </span>
      <h1 className="font-heading font-bold text-2xl sm:text-3xl text-dk-black mt-2 mb-4">
        Page introuvable
      </h1>
      <p className="text-dk-gray-500 text-base mb-8 max-w-md leading-relaxed">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
        Retournez à l&apos;accueil ou explorez la boutique.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-dk-black text-dk-white text-sm font-semibold rounded-full hover:bg-dk-gray-900 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/boutique"
          className="inline-flex items-center justify-center px-6 py-3 border border-dk-gray-200 text-dk-black text-sm font-semibold rounded-full hover:border-dk-gray-500 transition-colors"
        >
          Voir la boutique
        </Link>
      </div>
    </div>
  );
}
