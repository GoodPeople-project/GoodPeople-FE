// styles/global.css.ts
import { globalStyle } from '@vanilla-extract/css';

// 기본 초기화
globalStyle('html', {
  MozTextSizeAdjust: 'none',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
});

globalStyle('body, h1, h2, h3, h4, p, figure, blockquote, dl, dd', { marginBlockEnd: '0' });

globalStyle('button', {
  boxShadow: 'none',
  border: 'none',
  outline: 'none',
});

globalStyle('ul[role="list"], ol[role="list"]', {
  listStyle: 'none',
});

globalStyle('body', {
  minHeight: '100vh',
  lineHeight: '1.5',
});

globalStyle('h1, h2, h3, h4, button, input, label', {
  lineHeight: '1.1',
});

globalStyle('h1, h2, h3, h4', {
  textWrap: 'balance',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'currentColor',
});

globalStyle('img, picture', {
  maxWidth: '100%',
  display: 'block',
});

globalStyle('img', {
  imageRendering: 'crisp-edges',
});

globalStyle('textarea:not([rows])', {
  minHeight: '10em',
});

globalStyle(':target', {
  scrollMarginBlock: '5ex',
});
