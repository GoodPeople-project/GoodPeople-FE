import { style } from '@vanilla-extract/css';

export const Container = style({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '36px 0px',
  gap: '10px',
});

export const Large = style({
  fontSize: '36px',
  fontWeight: 700,
  lineHeight: '40px',
  color: '#1F2937',
});

export const Small = style({
  fontSize: '16px',
  fontWeight: 350,
  lineHeight: '24px',
  color: '#4B5563',
});
