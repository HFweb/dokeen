import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartNotification from '@/components/CartNotification';
import { CartProvider } from '@/contexts/CartContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'DoKeen — Le shop des tendances rares',
    template: '%s | DoKeen',
  },
  description:
    'Découvrez une sélection de sneakers, vêtements et accessoires choisis pour leur style, leur rareté et leur potentiel tendance.',
  keywords: ['sneakers', 'streetwear', 'tendance', 'mode', 'premium', 'DoKeen'],
  openGraph: {
    title: 'DoKeen — Le shop des tendances rares',
    description:
      'Découvrez une sélection de sneakers, vêtements et accessoires choisis pour leur style, leur rareté et leur potentiel tendance.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'DoKeen',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartNotification />
        </CartProvider>
      </body>
    </html>
  );
}
