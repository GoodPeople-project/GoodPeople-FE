import { keyframes, style } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  borderRadius: '8px',
});

export const spinner = style({
  width: '50px',
  height: '50px',
  display: 'inline-block',
  position: 'relative',
  marginBottom: '16px',
});

export const spinnerInner = style({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  border: '4px solid transparent',
  borderTopColor: '#3366FF', // 브랜드 색상으로 변경 가능
  animation: `${spin} 1s linear infinite`,
  ':before': {
    content: '',
    position: 'absolute',
    top: '5px',
    left: '5px',
    right: '5px',
    bottom: '5px',
    borderRadius: '50%',
    border: '4px solid transparent',
    borderTopColor: '#3366FF',
    animation: `${spin} 0.8s linear infinite reverse`,
  },
});
