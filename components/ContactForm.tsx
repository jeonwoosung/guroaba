'use client';
export default function ContactForm(){
const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault();const formData=new FormData(e.currentTarget);console.log(Object.fromEntries(formData.entries()));alert('상담 신청이 접수되었습니다. 빠르게 연락드리겠습니다.');};
const options=['ABA치료','언어치료','감각통합치료','놀이치료','바우처 상담','기타'];
return <form onSubmit={onSubmit} className="card grid gap-4">{[['guardian','보호자 이름'],['phone','연락처'],['age','아동 연령'],['schedule','희망 요일 / 시간']] .map(([n,l])=><label key={n} className="grid gap-1"><span>{l}</span><input required name={n} className="rounded-lg border px-3 py-2"/></label>)}<label className="grid gap-1"><span>희망 치료 영역</span><select required name="service" className="rounded-lg border px-3 py-2">{options.map(o=><option key={o}>{o}</option>)}</select></label><label className="grid gap-1"><span>현재 고민</span><textarea required name="concern" className="min-h-28 rounded-lg border px-3 py-2"/></label><label className="flex items-center gap-2"><input required type="checkbox" name="privacy"/><span>개인정보 수집에 동의합니다.</span></label><button className="rounded-xl bg-primary px-5 py-3 font-medium text-white">상담 신청하기</button></form>
}
