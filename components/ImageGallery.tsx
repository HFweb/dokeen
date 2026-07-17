'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
  fallbackColor: string;
}

export default function ImageGallery({ images, productName, fallbackColor }: ImageGalleryProps) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div
        className="relative aspect-square rounded-2xl overflow-hidden"
        style={{ backgroundColor: fallbackColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <span className="font-heading font-bold text-[160px] text-white/[0.05] leading-none">DK</span>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-dk-cream">
        <Image
          src={images[active]}
          alt={`${productName} — vue ${active + 1}`}
          fill
          className="object-contain p-6 transition-opacity duration-300"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={active === 0}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden bg-dk-cream border-2 transition-all duration-200 flex-shrink-0 ${
                active === i ? 'border-dk-black' : 'border-transparent hover:border-dk-gray-200'
              }`}
              aria-label={`Vue ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${productName} miniature ${i + 1}`}
                fill
                className="object-contain p-1.5"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
