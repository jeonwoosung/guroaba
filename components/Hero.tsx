import Link from 'next/link';

type Props={title:string;description:string;primaryLabel?:string;primaryHref?:string;secondaryLabel?:string;secondaryHref?:string};
export default function Hero({title,description,primaryLabel,primaryHref,secondaryLabel,secondaryHref}:Props){
return <section className="bg-gradient-to-b from-secondary to-slate-50 py-16 md:py-24"><div className="container-base"><h1 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg text-slate-700">{description}</p><div className="mt-8 flex flex-wrap gap-3">{primaryLabel&&primaryHref&&<Link className="rounded-xl bg-primary px-5 py-3 font-medium text-white" href={primaryHref}>{primaryLabel}</Link>}{secondaryLabel&&secondaryHref&&<Link className="rounded-xl border border-primary px-5 py-3 text-primary" href={secondaryHref}>{secondaryLabel}</Link>}</div></div></section>}
