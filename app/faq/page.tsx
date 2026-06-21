import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Toutes les réponses à vos questions sur DoKeen.',
};

const faqs = [
  {
    category: 'Commandes',
    items: [
      {
        q: 'Comment passer une commande ?',
        a: 'Naviguez dans notre boutique, sélectionnez le produit souhaité, choisissez votre taille/option et cliquez sur "Ajouter au panier". Suivez ensuite les étapes de commande pour finaliser votre achat.',
      },
      {
        q: 'Puis-je modifier ou annuler ma commande ?',
        a: 'Les modifications ou annulations sont possibles si la commande n\'a pas encore été expédiée. Contactez-nous rapidement à contact@dokeen.com avec votre numéro de commande.',
      },
      {
        q: 'Comment suivre ma commande ?',
        a: 'Un email de confirmation avec un lien de suivi vous sera envoyé dès l\'expédition de votre colis.',
      },
    ],
  },
  {
    category: 'Livraison',
    items: [
      {
        q: 'Quels sont les délais de livraison ?',
        a: 'En France métropolitaine, comptez 3 à 5 jours ouvrés pour une livraison standard. Consultez notre page Livraison pour plus de détails.',
      },
      {
        q: 'La livraison est-elle gratuite ?',
        a: 'Les conditions de livraison gratuite seront communiquées lors du passage de commande. Des seuils de gratuité pourront être appliqués selon les promotions en cours.',
      },
    ],
  },
  {
    category: 'Retours',
    items: [
      {
        q: 'Quel est le délai pour effectuer un retour ?',
        a: 'Vous disposez de 14 jours à compter de la réception de votre commande pour initier un retour. Le produit doit être dans son état d\'origine.',
      },
      {
        q: 'Comment initier un retour ?',
        a: 'Contactez notre service client à contact@dokeen.com avec votre numéro de commande et la raison du retour. Nous vous guiderons dans la procédure.',
      },
    ],
  },
  {
    category: 'Produits',
    items: [
      {
        q: 'Comment les produits sont-ils sélectionnés ?',
        a: 'Chaque produit DoKeen est choisi à la main selon nos critères : potentiel tendance, qualité de fabrication, style et rareté. Rien n\'est ajouté par hasard.',
      },
      {
        q: 'Puis-je être prévenu du retour d\'un produit en rupture ?',
        a: 'Oui ! Sur la fiche produit, cliquez sur "Me prévenir du prochain drop" et laissez votre email. Nous vous contacterons dès le réassort disponible.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-12">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
          Aide
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black mb-4">
          Questions fréquentes
        </h1>
        <p className="text-dk-gray-500 text-base leading-relaxed">
          Vous avez une question ? La réponse est probablement ici.
          Sinon, écrivez-nous à{' '}
          <Link href="/contact" className="text-dk-black underline hover:no-underline">
            contact@dokeen.com
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-dk-gray-500 mb-4">
              {section.category}
            </h2>
            <div className="flex flex-col divide-y divide-dk-gray-200 border-y border-dk-gray-200">
              {section.items.map((item, i) => (
                <div key={i} className="py-5">
                  <p className="font-heading font-semibold text-dk-black mb-2">
                    {item.q}
                  </p>
                  <p className="text-dk-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-dk-cream rounded-2xl p-8 text-center">
        <h2 className="font-heading font-bold text-xl text-dk-black mb-2">
          Vous n&apos;avez pas trouvé votre réponse ?
        </h2>
        <p className="text-dk-gray-500 text-sm mb-5">
          Notre équipe répond sous 48h du lundi au vendredi.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-dk-black text-dk-white text-sm font-semibold rounded-full hover:bg-dk-gray-900 transition-colors"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
