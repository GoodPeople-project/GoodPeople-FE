import { style } from '@vanilla-extract/css';

export const container = style({
  width: '1408px',
  height: 'auto',
  padding: '80px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'stretch',
});

export const sloganWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '960px',
  height: '96px',
});

export const slogan = style({
  display: 'flex',
  fontSize: '48px',
  fontWeight: 700,
  lineHeight: '48px',
});

export const hightlight = style({
  color: '#6A9AB0',
});

export const explain = style({
  color: '#7e848c',
  fontSize: '18px',
  fontWeight: 350,
  lineHeight: '28px',
  marginTop: '24px',
});

export const buttonWrapper = style({
  display: 'flex',
  width: '960px',
  justifyContent: 'center',
  gap: '16px',
  marginTop: '60px',
  marginBottom: '80px',
});

export const analyzeButton = style({
  display: 'flex',
  height: '48px',
  padding: '24px 32px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9999px',
  background: '#6A9AB0',

  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  color: '#fff',
  cursor: 'pointer',
});

export const communityButton = style({
  display: 'flex',
  height: '50px',
  padding: '25px 33px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9999px',
  background: '#fff',

  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  color: '#374151',
  cursor: 'pointer',

  border: '1px solid #D1D5DB',
});
