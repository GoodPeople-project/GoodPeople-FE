// styles.css.ts
import { style } from '@vanilla-extract/css';

const baseItemStyle = {
  width: '944px',
  height: '128px',
  display: 'flex',
  padding: '40px',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderRadius: '12px',
};

export const carouselItem1 = style({
  ...baseItemStyle,
  background: 'linear-gradient(90deg, #6A9AB0 0%, #4B5563 100%)',
});

export const carouselItem2 = style({
  ...baseItemStyle,
  background: 'linear-gradient(90deg, #92B4C8, #53778D)',
});

export const carouselItem3 = style({
  ...baseItemStyle,
  background: 'linear-gradient(to right, #B2C9D4, #6A8DA3)',
});

export const swiper = style({
  borderRadius: '12px', // Swiper에도 border-radius 적용
  height: '100%',
});

export const large = style({
  color: '#fff',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
});

export const small = style({
  color: 'rgba(255, 255, 255, 0.90)',
  fontSize: '16px',
  fontWeight: 350,
  lineHeight: '24px',
});
