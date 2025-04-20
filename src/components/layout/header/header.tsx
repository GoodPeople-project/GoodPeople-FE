import Link from 'next/link';
import * as style from './css/header.css';
import { Login } from './login';
import { Menu } from './menu';

export function Header() {
  return (
    <div className={style.container}>
      <div className={style.Wrapper}>
        <Link className={style.logo} href="/">
          굿피플
        </Link>
        <Menu />
        <Login />
      </div>
    </div>
  );
}
