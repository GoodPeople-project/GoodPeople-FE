import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  width: '830px',
  height: 'auto',
  minHeight: '587px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '33px',

  border: '1px solid #E2E8F0',
  background: '#fff',
  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
  borderRadius: '12px',
});

export const formWrapper = style({
  width: 'auto',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const stepText = style({
  width: '100%',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
});

export const stepContainer = style({
  display: 'flex',
  width: '830px',
  height: 'auto',
  minHeight: '450px',
  paddingTop: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
});

export const inputWrapper = style({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '10px',
});

export const label = style({
  width: 'auto',
  height: 'auto',
  display: 'flex',
  fontSize: '14px',
  fontWeight: 500,
});

export const input = style({
  boxSizing: 'border-box',
  width: '100%',
  height: '40px',
  padding: '9px 13px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  borderRadius: ' 6px',
  border: '1px solid #E2E8F0',
  background: '#fff',
  cursor: 'pointer',

  fontSize: '16px',
});

export const footer = style({
  width: '830px',
  height: 'auto',
  borderTop: '1px solid #E2E8F0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: '33px',
});

export const buttonWrapper = style({
  width: '830px',
  height: 'auto',
  paddingTop: '33px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const security = style({
  width: '100%',
  height: 'auto',
  color: '#6B7280',
  fontSize: '12px',
  fontWeight: 350,
  lineHeight: '16px',
  textAlign: 'center',
});

const button = {
  display: 'flex',
  width: '119px',
  height: '40px',
  padding: '8px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '6px',
  color: '#ffffff',
  cursor: 'pointer',
};

export const styledBtn = styleVariants({
  leftBtn: {
    ...button,
    background: '#ffffff',
    color: '#020817',
    border: '1px solid #8b8b8c',
    opacity: '0.5',
  },
  rightBtn: {
    ...button,
    background: '#6A9AB0',
    color: '#ffffff',
  },
});

export const notice = style({
  display: 'flex',
  width: 'auto',
  height: 'auto',
  fontSize: '14px',
  color: '#6B7280',
});

export const contentContainer = style({
  width: '798px',
  height: 'auto',
  padding: '16px',
  border: '1px solid #E2E8F0',
});

export const contentWrapper = style({
  width: 'auto',
  height: 'auto',
  display: 'flex',
  gap: '12px',
  marginTop: '8px',
});

export const dateInput = style({
  boxSizing: 'border-box',
  width: '260px',
  height: '40px',
  padding: '9px 13px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  borderRadius: ' 6px',
  border: '1px solid #E2E8F0',
  background: '#fff',
  cursor: 'pointer',

  fontSize: '16px',
  marginTop: '8px',
});

export const textarea = style({
  width: '800px',
  height: '300px',
  padding: '8px 12px',
  fontSize: '16px',
  borderRadius: '6px',
  border: '1px solid #E2E8F0',
  background: '#fff',
  resize: 'vertical',
  marginTop: '8px',
});

export const error = style({
  margin: 0,
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '14px',
  color: 'red',
  display: 'flex',
  justifyContent: 'flex-end',
  minHeight: '14px',
  width: 'auto',
});
