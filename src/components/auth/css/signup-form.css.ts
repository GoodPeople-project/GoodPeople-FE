import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  width: '1408px',
  height: '808px',
  padding: '46px 16px 46px 16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#F9FAFB',
});

export const wrapper = style({
  width: '446px',
  height: '806px',
  padding: '1px',
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
});

export const small = style({
  fontSize: '14px',
  fontWeight: 350,
  lineHeight: '20px',
  color: '#64748B',
  marginTop: '6px',
});

export const inputWrapper = style({
  width: '398px',
  height: '66px',
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '12px',
  marginTop: '18px',
});

export const lable = style({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '14px',
});

export const input = style({
  width: '365px',
  height: '40px',
  display: 'flex',
  borderRadius: '6px',
  border: '1px solid #E5E7EB',
  background: '#fff',
  padding: '10px 16px',
});

const baseStyle = {
  display: 'flex',
  width: '398px',
  height: '40px',
  padding: '8px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  cursor: 'pointer',
  marginTop: '16px',
};

export const loginButton = styleVariants({
  google: {
    ...baseStyle,
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '1px solid #ddd',
  },
  kakao: {
    ...baseStyle,
    backgroundColor: '#FEE500',
    color: '#191600',
  },
  naver: {
    ...baseStyle,
    backgroundColor: '#03C75A',
    color: '#ffffff',
  },
  default: {
    ...baseStyle,
    backgroundColor: '#6A9AB0',
    color: '#fff',
  },
});

export const divder = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '95%',
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
  marginTop: '18px',
  gap: '3px',
});

export const highlight = style({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  color: '#6A9AB0',
  marginTop: '6px',
  cursor: 'pointer',
});
