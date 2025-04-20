import { style } from '@vanilla-extract/css';

export const container = style({
  width: '1408px',
  height: '114px',
  padding: '64px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Wrapper = style({
  maxWidth: '1024px',
  height: '114px',
  gap: '24px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
});

export const item = style({
  width: '172px',
  height: '64px',
  padding: '25px',

  borderRadius: '8px',
  border: '1px solid #F3F4F6',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const large = style({
  color: '#6A9AB0',
  fontSize: '30px',
  fontWeight: 700,
  lineHeight: '36px',
});

export const small = style({
  color: '#6B7280',
  fontSize: '14px',
  fontWeight: 350,
  lineHeight: '20px',
});
