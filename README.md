# 구로ABA아동발달연구소 홈페이지

구로ABA아동발달연구소의 공식 홈페이지 프로젝트입니다.  
Next.js(App Router) + TypeScript + Tailwind CSS 기반으로 제작되었으며, 보호자가 처음 방문했을 때 필요한 정보를 쉽게 찾을 수 있도록 구성했습니다.

## 기술 스택
- Next.js
- React
- TypeScript
- Tailwind CSS
- Docker (multi-stage build)

## 주요 페이지
- `/` 메인
- `/about` 연구소 소개
- `/programs` 치료 프로그램
- `/voucher` 발달재활서비스 바우처
- `/team` 치료진 소개
- `/guide` 이용 안내
- `/contact` 문의하기 / 오시는 길

## 프로젝트 구조
```text
app/
  layout.tsx
  page.tsx
  about/page.tsx
  programs/page.tsx
  voucher/page.tsx
  team/page.tsx
  guide/page.tsx
  contact/page.tsx
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  SectionTitle.tsx
  FeatureCard.tsx
  ServiceCard.tsx
  ProcessSteps.tsx
  FAQAccordion.tsx
  ContactForm.tsx
  MapPlaceholder.tsx
data/
  site.ts
```

## 로컬 실행 방법
```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 프로덕션 빌드
```bash
npm run build
npm run start
```

## Docker 실행 방법

### 1) Docker Compose
```bash
docker compose up --build
```

### 2) Docker 명령 직접 실행
```bash
docker build -t guroaba-site .
docker run -p 3000:3000 guroaba-site
```

실행 후 `http://localhost:3000`에서 확인할 수 있습니다.

## 환경/설정 메모
- `next.config.ts`는 Docker 경량 배포를 위해 `output: 'standalone'`을 사용합니다.
- 문의 폼(`ContactForm`)은 서버 전송 대신 `alert`/`console.log`로 임시 처리되어 있습니다.
- 지도는 실제 API 대신 `MapPlaceholder` 컴포넌트로 분리되어 있어 추후 네이버지도/카카오맵으로 교체 가능합니다.

## 콘텐츠 수정 포인트
- 연락처, 주소, 상단 메뉴: `data/site.ts`
- 치료사 이름/자격/경력: `app/team/page.tsx`
- 각 페이지 문구: `app/*/page.tsx`

## 배포 전 체크리스트
- [ ] 실제 전화번호/주소 반영
- [ ] 치료진 실명/자격/경력 반영
- [ ] 문의 폼 서버 연동(API) 적용
- [ ] 지도 API 연동
- [ ] SEO 메타데이터 문구 최종 검수

