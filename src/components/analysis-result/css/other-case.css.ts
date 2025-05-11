import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  width: '896px',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1px 1px 0px 1px',
  background: '#ffffff',
  marginTop: '32px',

  borderRadius: '8px',
  border: '1px solid #E2E8F0',
  boxShadow: ' 0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
});

export const title = style({
  display: 'flex',
  width: 'auto',
  height: 'auto',
  marginTop: '32px',

  fontSize: '18px',
  fontWeight: 500,
});

export const column = style({
  display: 'flex',
  width: '870px',
  height: '24px',

  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 14px',
  background: '#F9FAFB',

  borderRadius: '8px',
  borderBottom: '1px solid #E2E8F0',

  fontSize: '18px',
  fontWeight: 500,
});

const colBase = {
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  display: 'flex',
  height: '20px',
  color: '#64748B',
};

export const col = styleVariants({
  caseNo: {
    ...colBase,
    width: '310px',
  },
  content: {
    ...colBase,
    width: '400px',
  },
  score: {
    ...colBase,
    width: '105px',
    justifyContent: 'center',
  },
  result: {
    ...colBase,
    width: '60px',
    justifyContent: 'center',
  },
});

export const contentContainer = style({
  display: 'flex',
  width: '844px',
  height: 'auto',

  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px 25px',
  background: '#ffffff',

  borderRadius: '8px',

  fontSize: '16px',
  fontWeight: 500,
  color: '#374151',
});

export const wrapper = style({
  display: 'flex',
  width: '870px',
  height: '73px',

  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 14px',
  background: '#ffffff',

  borderRadius: '8px',
  borderBottom: '1px solid #E2E8F0',

  fontSize: '18px',
  fontWeight: 500,
});

export const caseNo = style({
  width: '310px',
  height: '73px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  fontSize: '16px',
  fontWeight: 500,
  color: '#6A9AB0',
});

export const content = style({
  width: '400px',
  height: '73px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  fontSize: '16px',
  fontWeight: 500,
  color: '#4B5563',
  flexWrap: 'wrap',
});

export const score = style({
  width: '105px',
  height: '73px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '14px',
  fontWeight: 700,
  color: '#020817',
  flexWrap: 'wrap',
});

export const result = style({
  width: '45px',
  height: 'auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '4px 8px',
  borderRadius: '9999px',
  background: '#DCFCE7',

  fontSize: '14px',
  fontWeight: 700,
  color: '#166534',
  flexWrap: 'wrap',
  wordBreak: 'break-word',
  whiteSpace: 'pre',
});
