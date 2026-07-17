'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { CartItem } from '@/lib/cart';
import { getCart, saveCart } from '@/lib/cart';

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  count: number;
  notification: string | null;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  count: 0,
  notification: null,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      const next = existing
        ? prev.map((i) => (i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...prev, { ...newItem, quantity: 1 }];
      saveCart(next);
      return next;
    });
    setNotification(newItem.name);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setNotification(null), 3000);
  }, []);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, count, notification }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
