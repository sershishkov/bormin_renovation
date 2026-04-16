import type { Metadata } from 'next';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';

import './globals.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: `Construction et réparation `,
  description: ` Rénovation d'appartements : Toiture, fenêtres en PVC, pentes, canalisations, carrelage, peinture, plâtrage, installation de toute complexité`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main id='main' className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
