import { style } from '@vanilla-extract/css';

export const container = style({
  width: '1440px',
  height: 'auto',
  background: '#F9FAFB',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 0px',
  gap: '32px',
  marginTop: '40px',
});

export const title = style({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '24px',
});

export const itemWrapper = style({
  width: '928px',
  height: '224px',
  gap: '16px',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0 32px',
});

export const menuItem = style({
  width: '188px',
  height: '72px',
  padding: '16px',
  borderRadius: '8px',
  background: '#fff',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '14px',
  cursor: 'pointer',
  gap: '12px',
});

export const img = style({
  width: '36px',
  height: '40px',
});
