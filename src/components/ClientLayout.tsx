'use client';

import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import PageTransition from './PageTransition';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<LoadingSpinner />}>
          <PageTransition key={pathname}>
            <main className="max-w-3xl mx-auto px-4 pt-20">{children}</main>
          </PageTransition>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}
