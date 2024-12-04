import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MainLayout } from '@/components/layout/main-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Koat Painters | Professional Painting Services in Toronto & GTA',
  description: 'Professional painting services in Toronto and the Greater Toronto Area. Interior, exterior, residential and commercial painting services.',
  keywords: 'painting services, Toronto painters, GTA painters, interior painting, exterior painting, house painters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
} 