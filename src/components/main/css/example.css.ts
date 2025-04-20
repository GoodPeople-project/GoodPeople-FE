import { style } from '@vanilla-extract/css';

export const container = style({
  width: '1408px',
  height: '176px',
  padding: '64px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#F0F5F7',
});

export const large = style({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  marginBottom: '24px',
});

export const small = style({
  fontSize: '16px',
  fontWeight: 350,
  lineHeight: '24px',
  color: '#4B5563',
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

  marginTop: '32px',
});
