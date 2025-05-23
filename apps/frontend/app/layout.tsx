import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CFDI Processor',
  description: 'Automatiza el análisis de CFDIs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
