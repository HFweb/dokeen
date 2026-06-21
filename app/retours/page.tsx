import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retours & remboursements',
  description: 'Politique de retours et remboursements DoKeen.',
};

export default function RetoursPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-10">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
          Politique
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black mb-4">
          Retours & remboursements
        </h1>
        <div className="inline-flex items-center px-3 py-1.5 bg-dk-cream border border-dk-gray-200 rounded-full text-xs text-dk-gray-500">
          Contenu provisoire — à valider par un professionnel avant publication
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Droit de rétractation
          </h2>
          <p className="text-dk-gray-500 leading-relaxed">
            Conformément à la législation en vigueur, vous disposez d&apos;un délai de 14 jours
            à compter de la réception de votre commande pour exercer votre droit de rétractation,
            sans avoir à justifier de motif.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Conditions de retour
          </h2>
          <p className="text-dk-gray-500 leading-relaxed mb-3">
            Pour être accepté, un retour doit respecter les conditions suivantes :
          </p>
          <ul className="flex flex-col gap-2 text-dk-gray-500 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              Le produit doit être dans son état d&apos;origine, non porté, non lavé
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              Les étiquettes originales doivent être attachées
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              L&apos;emballage d&apos;origine doit être conservé
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              La demande doit être effectuée dans les 14 jours suivant la réception
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Procédure de retour
          </h2>
          <p className="text-dk-gray-500 leading-relaxed">
            Pour effectuer un retour, contactez notre service client à contact@dokeen.com en
            indiquant votre numéro de commande et la raison du retour. Nous vous communiquerons
            les instructions d&apos;expédition sous 48h ouvrées.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Remboursement
          </h2>
          <p className="text-dk-gray-500 leading-relaxed">
            Une fois le retour reçu et validé, le remboursement sera effectué dans un délai de
            14 jours ouvrés sur le moyen de paiement utilisé lors de la commande. Les frais
            de retour peuvent être à la charge du client selon les conditions en vigueur.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Produits non retournables
          </h2>
          <p className="text-dk-gray-500 leading-relaxed">
            Certains produits peuvent être exclus du droit de retour pour des raisons d&apos;hygiène
            ou de nature du produit. Ces exceptions seront clairement signalées sur la fiche
            produit concernée.
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
