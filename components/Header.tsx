'use client';
import Link from 'next/link';
import { useState } from 'react';
import { navItems, siteName } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-primary">{siteName}</Link>
        <nav className="hidden gap-5 md:flex">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm hover:text-primary">{item.label}</Link>)}
        </nav>
        <button aria-label="메뉴 열기" className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && <nav className="border-t bg-white md:hidden"><div className="container-base py-2">{navItems.map((item) => <Link key={item.href} href={item.href} className="block py-2" onClick={() => setOpen(false)}>{item.label}</Link>)}</div></nav>}
    </header>
  );
}
