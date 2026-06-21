# DoKeen — Le shop des tendances rares

Site e-commerce V1 — street premium, minimaliste, rapide, prêt pour Vercel.

## Stack

- **Next.js 16** (App Router, Server Components, generateStaticParams)
- **TypeScript**
- **Tailwind CSS v4**
- **next/font** (Space Grotesk + Inter)
- Données produits locales (`data/products.ts`)

## Arborescence

```
dokeen-site/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, Header, Footer)
│   ├── page.tsx                      # Accueil
│   ├── globals.css                   # Tailwind v4 + design tokens
│   ├── not-found.tsx                 # 404 global
│   ├── boutique/
│   │   ├── page.tsx                  # Boutique (grille produits)
│   │   └── [slug]/
│   │       └── page.tsx              # Page produit dynamique
│   ├── a-propos/page.tsx
│   ├── contact/page.tsx
│   ├── livraison/page.tsx
│   ├── retours/page.tsx
│   ├── faq/page.tsx
│   ├── cgv/page.tsx
│   ├── politique-de-confidentialite/page.tsx
│   └── mentions-legales/page.tsx
├── components/
│   ├── Header.tsx                    # Header responsive (client)
│   ├── Footer.tsx                    # Footer complet
│   ├── ProductCard.tsx               # Card produit réutilisable
│   ├── Badge.tsx                     # Badge (Drop tendance / Essential)
│   └── ContactForm.tsx               # Formulaire contact (client)
├── data/
│   └── products.ts                   # Catalogue produits + helpers
└── public/
    └── ...
```

## Design tokens (Tailwind v4)

| Token         | Valeur    | Classe Tailwind                    |
|---------------|-----------|------------------------------------|
| `dk-black`    | `#0A0A0A` | `bg-dk-black`, `text-dk-black`     |
| `dk-white`    | `#FFFFFF` | `bg-dk-white`                      |
| `dk-cream`    | `#F7F7F2` | `bg-dk-cream`                      |
| `dk-gray-900` | `#3A3A3A` | `text-dk-gray-900`                 |
| `dk-gray-500` | `#8A8A8A` | `text-dk-gray-500`                 |
| `dk-gray-200` | `#E5E5E5` | `border-dk-gray-200`               |
| `font-heading`| Space Grotesk | `font-heading`                 |
| `font-body`   | Inter     | `font-body`                        |

## Lancer en local

```bash
npm install
npm run dev
# → http://localhost:3000

# Vérifier le build production
npm run build && npm start
```

## Déployer sur Vercel

**Option recommandée — Vercel Dashboard :**

1. Pusher le code sur GitHub
2. Aller sur vercel.com/new
3. Importer le repo
4. Framework détecté automatiquement : **Next.js**
5. Cliquer **Deploy**

Aucune variable d'environnement requise pour la V1.

**Option CLI :**

```bash
npm i -g vercel
vercel
```

## Ajouter un produit

Éditer `data/products.ts` et ajouter un objet dans le tableau `products` :

```ts
{
  id: '4',
  slug: 'mon-nouveau-produit',       // URL : /boutique/mon-nouveau-produit
  name: 'Mon nouveau produit',
  price: 99.90,
  category: 'Sneakers',              // 'Sneakers' | 'Accessoires' | 'Vêtements'
  badge: 'New',                      // 'Drop tendance' | 'Essential' | 'New' | 'Sold Out'
  color: '#1A1A2E',                  // Couleur du placeholder image
  shortDescription: '...',
  longDescription: '...',
  features: ['Feature 1', 'Feature 2'],
}
```

## Pages

| Route                           | Page                        |
|---------------------------------|-----------------------------|
| `/`                             | Accueil                     |
| `/boutique`                     | Boutique                    |
| `/boutique/[slug]`              | Page produit dynamique      |
| `/a-propos`                     | À propos                    |
| `/contact`                      | Contact                     |
| `/livraison`                    | Livraison                   |
| `/retours`                      | Retours & remboursements    |
| `/faq`                          | FAQ                         |
| `/cgv`                          | CGV                         |
| `/politique-de-confidentialite` | Politique de confidentialité|
| `/mentions-legales`             | Mentions légales            |

## Limitations V1 (intentionnelles)

- Panier visuel uniquement (pas de fonctionnalité)
- Pas de paiement Stripe
- Pas d'authentification ni de base de données
- Formulaire contact non fonctionnel
- Newsletter non fonctionnelle
- Images produits : placeholders CSS (à remplacer par photos réelles)
- Pages légales : contenu placeholder à valider par un professionnel

---

DoKeen © 2026 — Le shop des tendances rares
