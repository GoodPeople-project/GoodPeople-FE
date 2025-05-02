import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  marginLeft: '130px',
});

export const Item = style({
  width: 'auto',
  height: '20px',
  padding: '8px 16px',
  fontSize: 14,
  fontWeight: 350,
  lineHeight: '20px',
  color: '#374151',
  cursor: 'pointer',
});
