import { style } from '@vanilla-extract/css';

export const containter = style({
  width: '896px',
  height: ' auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const title = style({
  fontSize: '30px',
  fontWeight: 700,
  lineHeight: '36px',
  marginTop: '36px',
});

export const small = style({
  fontSize: '16px',
  fontWeight: 350,
  lineHeight: '24px',
  marginTop: '8px',
  color: '#4B5563',
});
