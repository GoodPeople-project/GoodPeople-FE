import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  width: '896px',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1px 1px 25px 1px',
  gap: '16px',
  background: '#ffffff',
  marginTop: '32px',
  position: 'relative',

  borderRadius: '8px',
  border: '1px solid #E2E8F0',
  boxShadow: ' 0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
});

export const title = style({
  display: 'flex',
  width: '850px',
  height: '28px',

  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '24px 24px 13px 24px',
  background: '#F9FAFB',

  borderRadius: '8px',
  borderBottom: '1px solid #E2E8F0',

  fontSize: '18px',
  fontWeight: 500,
});

export const content = style({
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
  filter: 'blur(4px)',
});

export const payButton = style({
  backgroundColor: '#6A9AB0',
  color: '#ffffff',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  selectors: {
    '&:hover': {
      backgroundColor: '#5B889C', // hover 시 살짝 어둡게
    },
    '&:active': {
      backgroundColor: '#4E7688', // 클릭 시 더 어둡게
    },
  },

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
