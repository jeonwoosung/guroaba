# 구로ABA아동발달연구소 홈페이지

Next.js + TypeScript + Tailwind CSS 기반의 반응형 홈페이지입니다.

## 실행 방법
```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 페이지 구성
- /
- /about
- /programs
- /voucher
- /team
- /guide
- /contact

## 수정 포인트
연락처/주소/채널명/메뉴는 `data/site.ts`에서 한 번에 수정할 수 있습니다.
치료사 실명/자격/경력은 `app/team/page.tsx`에서 수정 가능합니다.
