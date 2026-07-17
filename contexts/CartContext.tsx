'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { CartItem } from '@/lib/cart';
import { getCart, saveCart } from '@/lib/cart';

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (compositeId: string) => void;
  count: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  count: 0,
  total: 0,
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((compositeId: string) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.id !== compositeId);
      saveCart(next);
      return next;
    });
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, count, total, isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
