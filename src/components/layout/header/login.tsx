'use client';

import Link from 'next/link';
import * as style from './css/login.css';
import { useAuthStore } from '@/store/auth';
import { useIsLoggedIn } from '@/hooks/isLoggedIn';
import { useEffect, useState } from 'react';

export function Login() {
  const [mounted, setMounted] = useState(false);
  const { clearAuth } = useAuthStore();
  const isLogIn = useIsLoggedIn();

  useEffect(() => {
    setMounted(true); // 컴포넌트가 클라이언트에서 마운트 되었을 때 상태 업데이트
  }, []);

  // 서버 사이드에서 렌더링 시 상태가 다를 수 있으므로 클라이언트에서만 렌더링
  if (!mounted) return null;
  return (
    <div className={style.container}>
      {isLogIn ? (
        <>
          <Link href={'/'} className={style.loginBtn} onClick={() => clearAuth()}>
            로그아웃
          </Link>
          <Link href={'/mypage'} className={style.SignupBtn}>
            마이 페이지
          </Link>
        </>
      ) : (
        <>
          <Link href={'/login'} className={style.loginBtn}>
            로그인
          </Link>
          <Link href={'/signup'} className={style.SignupBtn}>
            회원가입
          </Link>
        </>
      )}
    </div>
  );
}
