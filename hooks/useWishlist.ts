'use client';

import { useState, useEffect } from 'react';

const KEY = 'dk_wishlist';

export function useWishlist(productId: string) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const list: string[] = JSON.parse(localStorage.getItem(KEY) || '[]');
    setSaved(list.includes(productId));
  }, [productId]);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const list: string[] = JSON.parse(localStorage.getItem(KEY) || '[]');
    const next = list.includes(productId)
      ? list.filter((id) => id !== productId)
      : [...list, productId];
    localStorage.setItem(KEY, JSON.stringify(next));
    setSaved(!saved);
  };

  return { saved, toggle };
}
