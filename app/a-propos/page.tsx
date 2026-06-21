import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'DoKeen est un concept-store digital dédié aux tendances street premium. Découvrez notre histoire et notre vision.',
};

export default function AProposPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dk-gray-500 block mb-3">
          Notre histoire
        </span>
        <h1 className="font-heading font-bold text-5xl sm:text-6xl text-dk-black leading-tight mb-6">
          DoKeen, c&apos;est quoi ?
        </h1>
        <p className="text-dk-gray-500 text-lg leading-relaxed">
          Un concept-store digital de tendances street premium. Pas un magasin comme les autres.
          Une sélection. Une vision. Un point de vue.
        </p>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-heading font-bold text-2xl text-dk-black mb-4">
              La curation avant tout
            </h2>
            <p className="text-dk-gray-500 leading-relaxed text-base">
              DoKeen ne vend pas tout. On sélectionne. Chaque produit dans notre boutique a été
              choisi selon des critères stricts : est-ce que c&apos;est tendance ? Est-ce que c&apos;est
              rare ? Est-ce que c&apos;est de qualité ? Si la réponse n&apos;est pas oui à ces trois
              questions, on ne le prend pas.
            </p>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl text-dk-black mb-4">
              La rareté comme valeur
            </h2>
            <p className="text-dk-gray-500 leading-relaxed text-base">
              On vit dans un monde où tout est disponible partout, tout le temps. DoKeen fait
              l&apos;inverse. On cherche ce qui est difficile à trouver. Ce qui demande du flair.
              Des pièces avec du potentiel, pas du volume.
            </p>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl text-dk-black mb-4">
              La culture streetwear
            </h2>
            <p className="text-dk-gray-500 leading-relaxed text-base">
              Le streetwear n&apos;est pas juste de la mode. C&apos;est une culture. DoKeen ancre
              sa sélection dans cette réalité : les drops, les collaborations, les silhouettes qui
              définissent une époque. On connaît l&apos;histoire, on construit le futur.
            </p>
          </div>
        </div>

        {/* Visual block */}
        <div className="flex flex-col gap-6">
          <div className="bg-dk-black rounded-2xl p-10 flex flex-col gap-6 text-dk-white">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-dk-white text-dk-black text-sm font-heading font-bold rounded">
                DK
              </span>
              <span className="font-heading font-bold text-xl">DoKeen</span>
            </div>
            <blockquote className="font-heading text-2xl font-bold leading-tight text-dk-white/90">
              &ldquo;Le shop des tendances rares.&rdquo;
            </blockquote>
            <p className="text-dk-gray-500 text-sm leading-relaxed">
              On ne suit pas les tendances — on les anticipe. On ne vend pas des produits —
              on propose une sélection. La nuance est fondamentale.
            </p>
          </div>
          <div className="bg-dk-cream rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="font-heading font-bold text-lg text-dk-black">
              Notre engagement
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                'Sélection rigoureuse à la main',
                'Qualité premium uniquement',
                'Tendances vérifiées avant mise en ligne',
                'Transparence totale sur les produits',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-dk-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-dk-black mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-dk-gray-200 pt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-heading font-bold text-2xl text-dk-black mb-2">
            Prêt à explorer ?
          </h2>
          <p className="text-dk-gray-500 text-sm">
            Découvrez notre sélection actuelle.
          </p>
        </div>
        <Link
          href="/boutique"
          className="inline-flex items-center px-7 py-3.5 bg-dk-black text-dk-white text-sm font-semibold rounded-full hover:bg-dk-gray-900 transition-colors whitespace-nowrap"
        >
          Voir la boutique
        </Link>
      </div>
    </div>
  );
}
