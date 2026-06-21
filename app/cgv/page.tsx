import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions Générales de Vente de DoKeen.',
};

export default function CGVPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-10">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
          Légal
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black mb-4">
          Conditions Générales de Vente
        </h1>
        <div className="inline-flex items-center px-3 py-1.5 bg-dk-cream border border-dk-gray-200 rounded-full text-xs text-dk-gray-500">
          Contenu provisoire — à valider par un professionnel avant publication
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Article 1 — Champ d&apos;application
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Les présentes Conditions Générales de Vente (ci-après &quot;CGV&quot;) régissent les relations
            contractuelles entre DoKeen et tout client effectuant un achat sur le site
            dokeen.com. Tout achat implique l&apos;acceptation pleine et entière des présentes CGV.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Article 2 — Produits
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Les produits proposés à la vente sont ceux figurant sur le site au moment de la
            commande. DoKeen se réserve le droit de modifier à tout moment son catalogue.
            Les photographies et visuels des produits sont à titre indicatif et ne sont pas
            contractuels.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Article 3 — Prix
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Les prix indiqués sur le site sont en euros TTC. DoKeen se réserve le droit de
            modifier ses prix à tout moment. Les frais de livraison sont indiqués lors du
            passage de commande et sont à la charge du client sauf mention contraire.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Article 4 — Commande
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Toute commande implique l&apos;acceptation des présentes CGV. La commande sera validée
            après confirmation du paiement. Un email de confirmation sera envoyé à l&apos;adresse
            email fournie lors de la commande.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Article 5 — Paiement
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Le paiement s&apos;effectue en ligne par les moyens proposés lors du passage de commande.
            Toutes les transactions sont sécurisées. DoKeen ne stocke aucune information de
            paiement.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Article 6 — Livraison
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Les conditions de livraison sont détaillées dans notre{' '}
            <a href="/livraison" className="text-dk-black underline">
              page Livraison
            </a>
            . DoKeen ne peut être tenu responsable des retards imputables au transporteur.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Article 7 — Droit de rétractation
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Conformément à l&apos;article L.221-18 du Code de la consommation, vous disposez d&apos;un
            délai de 14 jours à compter de la réception pour exercer votre droit de rétractation.
            Les conditions sont détaillées dans notre{' '}
            <a href="/retours" className="text-dk-black underline">
              politique de retours
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Article 8 — Droit applicable
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Les présentes CGV sont soumises au droit français. Tout litige relatif à
            l&apos;exécution ou à l&apos;interprétation des présentes sera soumis aux juridictions compétentes
            françaises.
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
