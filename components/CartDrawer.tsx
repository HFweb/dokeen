'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';

export default function CartDrawer() {
  const { items, removeItem, count, total, isCartOpen, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Panier"
        className={`fixed right-0 top-0 h-full w-full max-w-[420px] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-dk-gray-200">
          <h2 className="font-heading font-bold text-lg text-dk-black">
            Panier{count > 0 && <span className="ml-2 text-dk-gray-500 font-normal text-base">({count})</span>}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Fermer le panier"
            className="p-2 -mr-2 text-dk-gray-500 hover:text-dk-black transition-colors rounded-full hover:bg-dk-cream"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-12">
              <div className="w-16 h-16 rounded-full bg-dk-cream flex items-center justify-center">
                <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-dk-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-bold text-dk-black mb-1">Ton panier est vide</p>
                <p className="text-dk-gray-500 text-sm">Ajoute des produits pour commencer</p>
              </div>
              <Link
                href="/boutique"
                onClick={closeCart}
                className="px-6 py-3 bg-dk-black text-white text-sm font-semibold rounded-full hover:bg-dk-gray-900 transition-colors"
              >
                Voir la boutique
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-dk-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  {/* Image */}
                  <Link
                    href={`/boutique/${item.slug}`}
                    onClick={closeCart}
                    className="w-[72px] h-[72px] rounded-xl bg-dk-cream flex-shrink-0 relative overflow-hidden block"
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                        sizes="72px"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-dk-gray-500 font-heading font-bold text-xs">DK</span>
                    )}
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/boutique/${item.slug}`}
                      onClick={closeCart}
                      className="font-heading font-semibold text-sm text-dk-black hover:text-dk-gray-900 transition-colors line-clamp-2 block"
                    >
                      {item.name}
                    </Link>
                    {item.size !== 'Taille unique' && (
                      <p className="text-xs text-dk-gray-500 mt-0.5">Pointure : {item.size}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-dk-black">{formatPrice(item.price)}</span>
                        {item.quantity > 1 && (
                          <span className="text-xs text-dk-gray-500">× {item.quantity}</span>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Supprimer ${item.name}`}
                        className="text-dk-gray-500 hover:text-red-500 transition-colors p-1"
                      >
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-dk-gray-200 flex flex-col gap-4 bg-white">
            {/* Livraison gratuite */}
            <div className="flex items-center gap-2 text-xs text-dk-gray-500 bg-dk-cream rounded-lg px-3 py-2.5">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              Livraison suivie incluse
            </div>

            <div className="flex items-center justify-between">
              <span className="font-heading font-semibold text-dk-black">Sous-total</span>
              <span className="font-heading font-bold text-xl text-dk-black">{formatPrice(total)}</span>
            </div>

            <button
              type="button"
              className="w-full py-4 bg-dk-black text-white font-semibold text-sm rounded-full hover:bg-dk-gray-900 transition-colors"
            >
              Commander
            </button>

            <button
              type="button"
              onClick={closeCart}
              className="w-full py-3 text-sm text-dk-gray-500 hover:text-dk-black transition-colors"
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </div>
    </>
  );
}
