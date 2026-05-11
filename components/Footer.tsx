import { contactInfo, siteName } from '@/data/site';

export default function Footer() {
  return <footer className="mt-16 bg-slate-900 py-10 text-slate-100"><div className="container-base text-sm"><p className="font-semibold">{siteName}</p><p className="mt-2">전화 {contactInfo.phone} · {contactInfo.hours}</p><p className="mt-1">주소 {contactInfo.address}</p></div></footer>;
}
