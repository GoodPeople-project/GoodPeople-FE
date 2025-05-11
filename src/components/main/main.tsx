'use client';

import { Menu } from './menu';
import { Carousel } from './carousel';
import * as style from './css/main.css';
import { DashBoard } from './dashboard';
import { Example } from './example';
import { useRouter } from 'next/navigation';

export function MainPage() {
  const router = useRouter();
  return (
    <div className={style.container}>
      <div className={style.sloganWrapper}>
        <div className={style.slogan}>직장 내 괴롭힘</div>
        <div className={style.slogan}>
          <div className={style.hightlight}>법적으로 도움 </div>을 드립니다
        </div>
        <div className={style.explain}>
          AI 기반 판례 분석으로 유사한 사례를 찾고 법적 대응 방안을 제시합니다
        </div>
      </div>
      <div className={style.buttonWrapper}>
        <button className={style.analyzeButton} onClick={() => router.push('/analysis')}>
          내 사례 분석하기
        </button>
        <button className={style.communityButton} onClick={() => router.push('/community')}>
          공유 커뮤니티
        </button>
      </div>
      <Carousel />
      <Menu />
      <DashBoard />
      <Example />
    </div>
  );
}
