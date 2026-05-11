# 구로ABA아동발달연구소 홈페이지

Next.js + TypeScript + Tailwind CSS 기반의 반응형 홈페이지입니다.

## 로컬 실행
```bash
npm install
npm run dev
```
브라우저에서 `http://localhost:3000` 접속.

## Docker 실행
### 1) Docker Compose 사용
```bash
docker compose up --build
```

### 2) Docker 단독 실행
```bash
docker build -t guroaba-site .
docker run -p 3000:3000 guroaba-site
```

실행 후 `http://localhost:3000`에서 확인할 수 있습니다.

## 페이지 구성
- /
- /about
- /programs
- /voucher
- /team
- /guide
- /contact

## 수정 포인트
- 연락처/주소/채널명/메뉴: `data/site.ts`
- 치료사 실명/자격/경력: `app/team/page.tsx`

## 배포 메모
- `next.config.ts`는 Docker standalone 실행에 맞춰 `output: 'standalone'`으로 설정되어 있습니다.
