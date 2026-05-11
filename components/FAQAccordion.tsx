'use client';
import { useState } from 'react';
export default function FAQAccordion({items}:{items:{q:string;a:string}[]}){const [open,setOpen]=useState<number|null>(0);return <div className="space-y-3">{items.map((it,i)=><div key={it.q} className="card p-0"><button className="flex w-full items-center justify-between p-5 text-left font-medium" onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>{it.q}</span><span>{open===i?'−':'+'}</span></button>{open===i&&<p className="border-t px-5 py-4 text-slate-600">{it.a}</p>}</div>)}</div>}
