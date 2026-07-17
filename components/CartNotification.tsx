'use client';

import { useCart } from '@/contexts/CartContext';

export default function CartNotification() {
  const { notification } = useCart();

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        notification
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 bg-dk-black text-dk-white px-5 py-3.5 rounded-full shadow-2xl border border-white/10 whitespace-nowrap">
        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold shrink-0">
          ✓
        </span>
        <span className="text-sm font-medium">
          {notification} — ajouté au panier
        </span>
      </div>
    </div>
  );
}
