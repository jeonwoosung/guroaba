import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '구로ABA아동발달연구소',
  description: 'ABA, 언어, 감각통합, 놀이치료를 제공하는 구로ABA아동발달연구소'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Link href="/contact" className="fixed bottom-5 right-5 rounded-full bg-accent px-5 py-3 text-white shadow-lg">상담 문의</Link>
        <Footer />
      </body>
    </html>
  );
}
