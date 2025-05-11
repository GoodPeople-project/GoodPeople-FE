import { style, createVar } from '@vanilla-extract/css';

export const completeColor = createVar();

export const container = style({
  width: '830px',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const circle = style({
  display: 'flex',
  width: '32px',
  height: ' 32px',
  padding: '2px',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '9999px',
  border: `2px solid ${completeColor}`,
  background: completeColor,

  color: '#fff',
  fontSize: '16px',
  fontWeight: 350,
});

export const bar = style({
  width: ' 32px',
  height: ' 4px',
  background: completeColor,
});
