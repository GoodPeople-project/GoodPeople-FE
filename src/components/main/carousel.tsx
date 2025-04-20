'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import * as style from './css/carousel.css';

export function Carousel() {
  // 설정을 별도 변수로 분리
  const swiperConfig: SwiperOptions = {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: { delay: 6000, disableOnInteraction: false },
    loop: true,
  };

  return (
    <div
      className={'carousel-container'}
      style={{ width: '1024px', height: '250px', overflow: 'hidden', borderRadius: '12px' }}
    >
      <Swiper {...swiperConfig} className={style.swiper}>
        <SwiperSlide>
          <div className={style.carouselItem1}>
            <div className={style.large}>직장 내 괴롭힘, 법적으로 해결하세요</div>
            <div className={style.small}>
              AI 분석을 통해 유사 판례를 찾고 법적 대응 방안을 알아보세요
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.carouselItem2}>
            <div className={style.large}>전문 변호사와 상담하세요</div>
            <div className={style.small}>
              직장 내 괴롭힘 전문 변호사와 1:1 상담을 통해 해결책을 찾아보세요
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.carouselItem3}>
            <div className={style.large}>유사한 사례를 공유해요</div>
            <div className={style.small}>
              비슷한 경험을 가진 사람들과 소통하며 함께 해결책을 모색해보세요
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
