import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '8px',
});

export const loginBtn = style({
  display: 'flex',
  width: 'auto',
  height: '26px',
  padding: '5px 21px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9999px',
  border: 'solid 1px #6A9AB0',
  background: '#fff',

  fontSize: '14px',
  fontWeight: 500,
  color: '#6A9AB0',
  lineHeight: '20px',
  cursor: 'pointer',
});

export const SignupBtn = style({
  display: 'flex',
  width: 'auto',
  height: '26px',
  padding: '5px 21px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9999px',
  border: 'solid 1px #6A9AB0',
  background: '#6A9AB0',

  fontSize: '14px',
  fontWeight: 500,
  color: '#fff',
  cursor: 'pointer',
});
