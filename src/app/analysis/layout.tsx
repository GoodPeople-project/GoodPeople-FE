import { ReactNode } from 'react';
import * as style from '../_css/analysis-container.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={style.container}>{children}</div>;
}
