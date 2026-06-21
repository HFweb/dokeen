import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez DoKeen pour toute question sur vos commandes ou nos produits.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
            Nous écrire
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dk-black mb-6">
            Contact
          </h1>
          <p className="text-dk-gray-500 text-base leading-relaxed mb-10">
            Une question sur une commande, un produit ou un partenariat ?
            On répond sous 48h, du lundi au vendredi.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500">
                Email
              </span>
              <span className="text-dk-black font-medium">contact@dokeen.com</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500">
                Délai de réponse
              </span>
              <span className="text-dk-black font-medium">Sous 48h ouvrées</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500">
                Disponibilité
              </span>
              <span className="text-dk-black font-medium">Lundi — Vendredi, 9h — 18h</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
