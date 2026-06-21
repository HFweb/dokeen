import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livraison',
  description: 'Informations sur la livraison DoKeen : délais, suivi et tarifs.',
};

export default function LivraisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-10">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
          Informations
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black mb-4">
          Livraison
        </h1>
        <div className="inline-flex items-center px-3 py-1.5 bg-dk-cream border border-dk-gray-200 rounded-full text-xs text-dk-gray-500">
          Contenu provisoire — à valider par un professionnel avant publication
        </div>
      </div>

      <div className="prose prose-sm max-w-none flex flex-col gap-8">
        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Zones de livraison
          </h2>
          <p className="text-dk-gray-500 leading-relaxed">
            DoKeen livre actuellement en France métropolitaine. Toute commande passée sur ce site
            sera expédiée vers une adresse française (hors DOM-TOM pour la V1).
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Délais de livraison
          </h2>
          <p className="text-dk-gray-500 leading-relaxed mb-3">
            Les délais de livraison sont donnés à titre indicatif et peuvent varier selon la
            disponibilité des produits et les transporteurs partenaires.
          </p>
          <ul className="flex flex-col gap-2 text-dk-gray-500 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              Traitement de la commande : 1 à 2 jours ouvrés
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              Livraison standard : 3 à 5 jours ouvrés
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              Livraison express : 1 à 2 jours ouvrés (selon disponibilité)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Frais de livraison
          </h2>
          <p className="text-dk-gray-500 leading-relaxed">
            Les frais de livraison seront communiqués au moment de la commande. Ils varient
            selon le poids total du colis et l&apos;option de livraison choisie. Des seuils de
            livraison gratuite pourront être mis en place selon les promotions en cours.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Suivi de commande
          </h2>
          <p className="text-dk-gray-500 leading-relaxed">
            Un email de confirmation avec un numéro de suivi vous sera envoyé dès l&apos;expédition
            de votre colis. Vous pourrez suivre votre commande en temps réel via le transporteur
            partenaire.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Problème de livraison
          </h2>
          <p className="text-dk-gray-500 leading-relaxed">
            En cas de problème avec votre livraison (colis perdu, endommagé, adresse incorrecte),
            contactez notre service client à contact@dokeen.com dans les 48h suivant la date de
            livraison prévue.
          </p>
        </section>

        <div className="bg-dk-cream rounded-xl p-5 text-xs text-dk-gray-500 leading-relaxed border border-dk-gray-200">
          <strong className="text-dk-black">Note :</strong> Ce contenu est fourni à titre
          provisoire et doit être validé par un professionnel avant publication.
        </div>
      </div>
    </div>
  );
}
