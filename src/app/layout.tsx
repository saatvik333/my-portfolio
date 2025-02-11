import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { getTheme } from '@/utils/cookies';

export const metadata: Metadata = {
  title: 'Saatvik Sharma',
  description: "Saatvik's Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getTheme();
  return (
    <html lang="en" className={theme}>
      <body>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
