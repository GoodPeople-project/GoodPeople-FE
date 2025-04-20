import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  width: '1440px',
  padding: '12px 0px 13px 0px',
  flexDirection: 'column',
  alignItems: 'center',

  borderBottom: 'solid 1px #F3F4F6',
  boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
});

export const Wrapper = style({
  display: 'flex',
  width: '1400px',
  maxWidth: '1400px',
  padding: '0px 16px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logo = style({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '28px',
  color: '#6A9AB0',
});
