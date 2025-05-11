import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  width: '896px',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  marginTop: '32px',
});

export const itemWrapper = style({
  width: '440px',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: 'rgba(106, 154, 176, 0.05)',
  padding: '15px 25px 35px 25px',
  gap: '8px',

  borderRadius: '8px',
  border: '1px solid #6A9AB0',
  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
});

const content = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
};

export const contentWrapper = styleVariants({
  score: {
    ...content,
  },
  keyword: {
    ...content,
    flexWrap: 'wrap',
  },
});

export const score = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '64px',
  height: '64px',
  borderRadius: '9999px',
  background: '#6A9AB0',

  fontSize: '20px',
  fontWeight: 700,
  color: '#ffffff',
});

export const small = style({
  fontSize: '14px',
  fontWeight: 350,
  color: '#4B5563',
});

export const progress = style({
  width: '314px',
  height: '8px',
  background: '#6A9AB0',
});

export const keyword = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 'auto',
  height: '28px',
  borderRadius: '9999px',
  background: '#6A9AB0',

  padding: '4px 12px',

  fontSize: '14px',
  fontWeight: 350,
  color: '#ffffff',
});
