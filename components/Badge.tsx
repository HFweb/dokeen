import type { BadgeType } from '@/data/products';

interface BadgeProps {
  label: BadgeType;
  size?: 'sm' | 'md';
}

const styles: Record<BadgeType, string> = {
  'Drop tendance':
    'bg-dk-black text-dk-white border border-dk-black',
  Essential:
    'bg-dk-cream text-dk-gray-900 border border-dk-gray-200',
  New:
    'bg-dk-black text-dk-white border border-dk-black',
  'Sold Out':
    'bg-dk-gray-200 text-dk-gray-500 border border-dk-gray-200',
};

export default function Badge({ label, size = 'sm' }: BadgeProps) {
  const sizeClass = size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium tracking-wide uppercase ${sizeClass} ${styles[label]}`}
    >
      {label}
    </span>
  );
}
