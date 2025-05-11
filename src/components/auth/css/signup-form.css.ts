import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  width: '1408px',
  height: 'auto',
  padding: '46px 16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#F9FAFB',
});

export const wrapper = style({
  width: '446px',
  height: 'auto',
  padding: '32px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
  borderRadius: '8px',
  border: '1px solid #E5E7EB',
  boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
});

export const large = style({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  marginBottom: '6px',
});

export const small = style({
  fontSize: '14px',
  fontWeight: 350,
  lineHeight: '20px',
  color: '#64748B',
  marginTop: '6px',
});

export const inputWrapper = style({
  width: '100%',
  maxWidth: '398px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '6px',
  marginTop: '10px',
});

export const labelWrapper = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '6px',
});

export const label = style({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '14px',
});

export const errorContainer = style({
  width: '100%',
  height: '10px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '4px',
});

export const error = style({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '14px',
  color: '#EF4444', // 더 선명한 빨간색으로 변경
  textAlign: 'right',
});

export const input = style({
  width: '95%',
  height: '40px',
  display: 'flex',
  borderRadius: '6px',
  border: '1px solid #E5E7EB',
  background: '#fff',
  padding: '0px 10px',
  fontSize: '14px',
  ':focus': {
    outline: 'none',
    borderColor: '#6A9AB0',
    boxShadow: '0 0 0 1px rgba(106, 154, 176, 0.3)',
  },
  '::placeholder': {
    color: '#9CA3AF',
  },
});

const baseStyle = {
  display: 'flex',
  width: '100%',
  maxWidth: '398px',
  height: '40px',
  padding: '8px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  cursor: 'pointer',
  marginTop: '10px',
  gap: '5px',
  transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
};

export const loginButton = styleVariants({
  google: {
    ...baseStyle,
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '1px solid #ddd',
    ':hover': {
      backgroundColor: '#f8f8f8',
      borderColor: '#c8c8c8',
    },
  },
  kakao: {
    ...baseStyle,
    backgroundColor: '#FEE500',
    color: '#191600',
    ':hover': {
      backgroundColor: '#f4dc00',
    },
  },
  naver: {
    ...baseStyle,
    backgroundColor: '#03C75A',
    color: '#ffffff',
    ':hover': {
      backgroundColor: '#02b350',
    },
  },
  default: {
    ...baseStyle,
    backgroundColor: '#6A9AB0',
    color: '#fff',
    border: 'none',
    ':hover': {
      backgroundColor: '#5a8a9e',
    },
    ':disabled': {
      backgroundColor: '#9DC2D3',
      cursor: 'not-allowed',
    },
  },
});

export const certifyBtn = style({
  display: 'flex',
  padding: '4px 8px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '20px',
  cursor: 'pointer',
  backgroundColor: '#6A9AB0',
  color: '#fff',
  border: 'none',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#5a8a9e',
  },
});

export const divider = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  maxWidth: '398px',
  margin: '24px 0px 8px 0px',
});

export const line = style({
  flex: 1,
  height: '1px',
  backgroundColor: '#E5E7EB',
});

export const textWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '24px',
  gap: '6px',
});

export const highlight = style({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  color: '#6A9AB0',
  cursor: 'pointer',
  transition: 'color 0.2s',
  ':hover': {
    color: '#5a8a9e',
    textDecoration: 'underline',
  },
});

export const icons = style({
  width: '22px',
  height: '22px',
  objectFit: 'contain',
});
