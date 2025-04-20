import { style } from '@vanilla-extract/css';

export const container = style({
  width: '1440px',
  height: '193px',
  padding: '33px 0px 32px 0px',
  alignItems: 'center',
  alignSelf: 'stretch',
});

export const Wrapper = style({
  display: 'flex',
  width: '1400px',
  padding: '0px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const logo = style({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '28px',
  color: '#6A9AB0',
  marginBottom: '8px',
});

export const slogan = style({
  color: '#6B7280',
  fontSize: '14px',
  fontWeight: 350,
  lineHeight: '20px',
});

export const copyRight = style({
  display: 'flex',
  width: '1368px',
  height: '16px',
  paddingTop: '25px',
  borderTop: 'solid 1px #F3F4F6',
  marginTop: '32px',

  color: '#9CA3AF',
  fontSize: '12px',
  fontWeight: 350,
  lineHeight: '16px',
});
