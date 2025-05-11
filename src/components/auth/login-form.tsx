'use client';

import { useForm } from 'react-hook-form';
import * as style from './css/login-form.css';
import { Login } from '@/service/auth';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth';
import { LoginResponse } from '@/types/auth';

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>();
  const { token, setToken } = useAuthStore();

  const mutation = useMutation({
    mutationFn: (data: LoginFormData) => Login(data.email, data.password),
    onSuccess: (data: LoginResponse) => {
      setToken(data.result.access_token, data.result.expires_in);
      console.log(token);
      setTimeout(() => {
        router.push('/');
      }, 500);
    },
    onError: (error: Error) => {
      alert('로그인에 실패하였습니다. 다시 시도해주세요.');
      console.error('로그인 실패:', error);
    },
  });

  const handleLogin = async (data: LoginFormData) => {
    mutation.mutate(data);
  };

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

  const handleSocialLogin = async (provider: string) => {
    try {
      router.push(`${API_BASE_URL}/oauth2/authorization/${provider}`);
    } catch (error) {
      alert('로그인에 실패하였습니다. 다시 시도해주세요.');
      console.error('로그인 실패', error);
    }
  };

  if (mutation.isPending) {
    return (
      <div className={style.overlay}>
        <div className={style.spinner}>
          <div className={style.spinnerInner}></div>
        </div>
      </div>
    );
  }

  return (
    <form className={style.container} onSubmit={handleSubmit(handleLogin)}>
      <div className={style.wrapper}>
        <div className={style.large}>로그인</div>
        <div className={style.small}>계정에 로그인하여 굿피플 서비스를 이용하세요</div>
        <div className={style.inputWrapper}>
          <div className={style.labelWrapper}>
            <label className={style.label}>이메일</label>
            {errors.email && <p className={style.error}>{errors.email.message}</p>}
          </div>
          <input
            className={style.input}
            placeholder="your@email.com"
            {...register('email', {
              required: { value: true, message: '이메일을 입력해주세요' },
              pattern: {
                value: /^\S+@\S+$/i,
                message: '이메일 형식이 올바르지 않습니다',
              },
            })}
          />
        </div>
        <div className={style.inputWrapper}>
          <div className={style.labelWrapper}>
            <label className={style.label}>비밀번호</label>
            {errors.password && <p className={style.error}>{errors.password.message}</p>}
          </div>
          <input
            className={style.input}
            type="password"
            placeholder="password"
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              minLength: {
                value: 8,
                message: '비밀번호는 최소 8자 이상이어야 합니다',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                message: '대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다',
              },
            })}
          />
        </div>
        <button className={style.loginButton.default}>로그인</button>
        <div className={style.divder}>
          <div className={style.line}></div>
          <span className={style.small}>또는</span>
          <div className={style.line}></div>
        </div>
        <button
          type="button"
          className={style.loginButton.google}
          onClick={() => handleSocialLogin('google')}
        >
          <img src="/icons/google.svg" className={style.icons} />
          Google 계정으로 로그인
        </button>
        <button
          type="button"
          className={style.loginButton.kakao}
          onClick={() => handleSocialLogin('kakao')}
        >
          <img src="/icons/kakao.svg" className={style.icons} />
          카카오 계정으로 로그인
        </button>
        <button
          type="button"
          className={style.loginButton.naver}
          onClick={() => handleSocialLogin('naver')}
        >
          <img src="/icons/naver.svg" />
          네이버 계정으로 로그인
        </button>
        <div className={style.textWrapper}>
          <div className={style.small}>계정이 없으신가요? </div>
          <div className={style.highlight}>회원가입</div>
        </div>
      </div>
    </form>
  );
}
