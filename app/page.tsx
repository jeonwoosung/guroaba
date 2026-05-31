import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import ProcessSteps from '@/components/ProcessSteps';

const features=[['🧠','BCBA 기반 ABA 중재','국제행동분석전문가 기반의 체계적 접근'],['🤝','다학제 치료 협력','영역 간 협력으로 일관된 지원'],['📋','개별화된 치료계획','아동 특성에 맞춘 맞춤 설계'],['🏠','보호자 상담 및 가정 연계','가정 내 실천까지 연결']];
const services=['ABA치료 / 행동재활','언어치료','감각통합치료','놀이치료 / 인지행동 놀이치료','통합치료 프로그램'];
export default function Home(){return <main><Hero imageSrc="/images/pages/home.png" imageAlt="상담과 치료가 진행되는 따뜻한 발달센터 공간" title="아이의 발달을 함께 이해하고, 필요한 지원을 연결합니다." description="구로ABA아동발달연구소는 ABA치료, 언어치료, 감각통합치료, 놀이치료를 통해 아이의 발달 특성에 맞춘 개별화된 지원을 제공합니다." primaryLabel="상담 문의하기" primaryHref="/contact" secondaryLabel="치료 프로그램 보기" secondaryHref="/programs"/><section className="section"><div className="container-base"><SectionTitle title="구로ABA의 강점"/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{features.map(([icon,title,desc])=><FeatureCard key={title} icon={icon} title={title} desc={desc}/>)}</div></div></section><section className="section bg-secondary/50"><div className="container-base"><SectionTitle title="치료 프로그램"/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s} title={s} desc="아동 발달 특성을 반영한 전문 프로그램" href="/programs"/>)}</div></div></section><section className="section"><div className="container-base"><SectionTitle title="치료 진행 절차"/><ProcessSteps steps={['문의','초기 상담','평가 및 관찰','치료 방향 제안','치료 시작','정기 피드백']}/></div></section></main>}
