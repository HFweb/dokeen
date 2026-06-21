import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site DoKeen.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-10">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
          Légal
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black mb-4">
          Mentions légales
        </h1>
        <div className="inline-flex items-center px-3 py-1.5 bg-dk-cream border border-dk-gray-200 rounded-full text-xs text-dk-gray-500">
          Contenu provisoire — à valider par un professionnel avant publication
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Éditeur du site
          </h2>
          <div className="flex flex-col gap-1.5 text-dk-gray-500 text-sm">
            <p><strong className="text-dk-black">Nom de la société :</strong> [À compléter]</p>
            <p><strong className="text-dk-black">Forme juridique :</strong> [À compléter]</p>
            <p><strong className="text-dk-black">Capital social :</strong> [À compléter]</p>
            <p><strong className="text-dk-black">Siège social :</strong> [À compléter]</p>
            <p><strong className="text-dk-black">SIRET :</strong> [À compléter]</p>
            <p><strong className="text-dk-black">N° TVA intracommunautaire :</strong> [À compléter]</p>
            <p><strong className="text-dk-black">Email :</strong> contact@dokeen.com</p>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Directeur de la publication
          </h2>
          <p className="text-dk-gray-500 text-sm">
            [Nom du directeur de la publication — À compléter]
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Hébergeur
          </h2>
          <div className="flex flex-col gap-1.5 text-dk-gray-500 text-sm">
            <p><strong className="text-dk-black">Société :</strong> Vercel Inc.</p>
            <p><strong className="text-dk-black">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
            <p><strong className="text-dk-black">Site :</strong> vercel.com</p>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Propriété intellectuelle
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            L&apos;ensemble des éléments composant ce site (textes, images, graphismes, logo, icônes,
            sons, logiciels, etc.) est la propriété exclusive de DoKeen ou de ses partenaires.
            Toute reproduction, représentation, modification, publication ou adaptation de tout
            ou partie des éléments du site est interdite sans autorisation préalable écrite de DoKeen.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Responsabilité
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            DoKeen s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées
            sur ce site. Cependant, DoKeen ne peut garantir l&apos;exactitude, la précision ou
            l&apos;exhaustivité des informations mises à disposition sur ce site.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-dk-black mb-3">
            Protection des données
          </h2>
          <p className="text-dk-gray-500 leading-relaxed text-sm">
            Pour toute information relative au traitement de vos données personnelles, veuillez
            consulter notre{' '}
            <a href="/politique-de-confidentialite" className="text-dk-black underline">
              politique de confidentialité
            </a>
            .
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
