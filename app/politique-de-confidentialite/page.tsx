import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données de DoKeen.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-10">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
          Légal
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black mb-4">
          Politique de confidentialité
        </h1>
        <div className="inline-flex items-center px-3 py-1.5 bg-dk-cream border border-dk-gray-200 rounded-full text-xs text-dk-gray-500">
          Contenu provisoire — à valider par un professionnel avant publication
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            1. Responsable du traitement
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            DoKeen est responsable du traitement de vos données personnelles collectées via
            le site dokeen.com. Pour toute question relative à vos données, vous pouvez nous
            contacter à contact@dokeen.com.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            2. Données collectées
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm mb-3">
            Nous collectons les données suivantes lors de votre utilisation du site :
          </p>
          <ul className="flex flex-col gap-2 text-dk-gray-500 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              Données d&apos;identification : nom, prénom, adresse email
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              Données de livraison : adresse postale, numéro de téléphone
            </li>
            <li className="flex items-start gap-2">
              <span className="text-dk-black mt-0.5">—</span>
              Données de navigation : pages visitées, durée de visite (via cookies)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            3. Finalités du traitement
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Vos données sont collectées pour les finalités suivantes : traitement et suivi des
            commandes, communication relative à votre commande, amélioration de nos services,
            envoi de newsletters (avec votre consentement).
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            4. Base légale
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Le traitement de vos données est fondé sur l&apos;exécution du contrat (traitement des
            commandes) et votre consentement (newsletter, cookies analytiques).
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            5. Durée de conservation
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Vos données sont conservées pendant la durée nécessaire à l&apos;exécution du contrat,
            augmentée des délais légaux de prescription applicables (généralement 5 ans pour
            les données comptables).
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            6. Vos droits
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm mb-3">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="flex flex-col gap-2 text-dk-gray-500 text-sm">
            {[
              'Droit d\'accès à vos données',
              'Droit de rectification',
              'Droit à l\'effacement',
              'Droit à la portabilité',
              'Droit d\'opposition au traitement',
            ].map((right, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-dk-black mt-0.5">—</span>
                {right}
              </li>
            ))}
          </ul>
          <p className="text-dk-gray-500 leading-relaxed text-sm mt-3">
            Pour exercer vos droits, contactez-nous à contact@dokeen.com.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            7. Cookies
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Notre site utilise des cookies techniques nécessaires à son fonctionnement. Des
            cookies analytiques peuvent être utilisés avec votre consentement pour améliorer
            notre service.
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
