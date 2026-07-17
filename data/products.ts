export type BadgeType = 'Drop tendance' | 'Essential' | 'New' | 'Sold Out';
export type CategoryType = 'Sneakers' | 'Accessoires' | 'Vêtements';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: CategoryType;
  badge: BadgeType;
  shortDescription: string;
  longDescription: string;
  features: string[];
  color: string;
  images: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'sneakers-tendance',
    name: 'Air Max 1000 — Triple Black',
    price: 149.9,
    category: 'Sneakers',
    badge: 'Drop tendance',
    color: '#1A1A2E',
    images: [
      '/images/sneakers-1.jpg',
      '/images/sneakers-2.jpg',
      '/images/sneakers-3.jpg',
      '/images/sneakers-poster.jpg',
    ],
    shortDescription:
      'La sneaker du moment. Sélectionnée pour son style affûté, sa silhouette rare et son potentiel tendance.',
    longDescription:
      'Chaque saison, DoKeen choisit la sneaker qui définit la tendance. Ce modèle incarne parfaitement l\'équilibre entre le streetwear urbain et le premium discret. Construite pour durer, conçue pour se démarquer. Coloris exclusif, matières soignées, semelle signature. Un incontournable pour ceux qui savent.',
    features: [
      'Tige mesh premium respirante',
      'Semelle Air Max visible — amorti optimal',
      'Coloris Triple Black exclusif',
      'Tailles disponibles : 36 → 47',
    ],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47'],
  },
  {
    id: '2',
    slug: 'bonnet-dokeen-selection',
    name: 'Bonnet DoKeen sélection',
    price: 29.9,
    category: 'Accessoires',
    badge: 'Essential',
    color: '#0A0A0A',
    images: [],
    shortDescription:
      'Le bonnet essentiel de la saison. Simple, propre, premium. L\'accessoire incontournable du daily.',
    longDescription:
      'DoKeen a sélectionné ce bonnet pour sa qualité de tricot, sa coupe universelle et son style sobre qui s\'adapte à toutes les tenues. Matière douce et résistante, bande élastique confortable, coloris intemporel. L\'accessoire que tu mettras tous les jours.',
    features: [
      'Matière : 80% acrylique, 20% laine',
      'Coupe universelle',
      'Coloris : Noir profond',
      'Label DK brodé discret',
    ],
    sizes: ['Taille unique'],
  },
  {
    id: '3',
    slug: 'chaussettes-premium-street',
    name: 'Chaussettes premium street',
    price: 14.9,
    category: 'Accessoires',
    badge: 'Essential',
    color: '#2A2A2A',
    images: [],
    shortDescription:
      'Les chaussettes qui font la différence. Qualité premium, style street, confort au quotidien.',
    longDescription:
      'Les détails font tout. DoKeen a sélectionné ces chaussettes pour leur qualité de tissage exceptionnelle, leur maintien parfait et leur esthétique street premium. Côtes renforcées, pointe et talon renforcés, motif signature discret. Pack de 2 paires.',
    features: [
      'Matière : 75% coton peigné, 25% élasthanne',
      'Taille unique (35-46)',
      'Pack de 2 paires',
      'Motif DoKeen signature',
    ],
    sizes: ['Taille unique'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 2): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export function formatPrice(price: number): string {
  return price.toFixed(2).replace('.', ',') + ' €';
}
