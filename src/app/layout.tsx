import type { Metadata } from 'next';
import '@/styles/globals.css';
import { poppins } from '@/utils/fonts';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: 'Saatvik Sharma',
  description: "Saatvik's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
