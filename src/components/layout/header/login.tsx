import Link from 'next/link';
import * as style from './css/login.css';

export function Login() {
  return (
    <div className={style.container}>
      <Link href={'/login'} className={style.loginBtn}>
        로그인
      </Link>
      <Link href={'/signup'} className={style.SignupBtn}>
        회원가입
      </Link>
    </div>
  );
}
