import Link from 'next/link';
export default function ServiceCard({title,desc,href}:{title:string;desc:string;href:string}){return <article className="card"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-slate-600">{desc}</p><Link href={href} className="mt-4 inline-block text-primary">자세히 보기 →</Link></article>}
