'use client';

import { useForm } from 'react-hook-form';
import * as style from './css/login-form.css';
import { Login } from '@/service/auth';

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const {
    handleSubmit, // form onSubmit에 들어가는 함수
    register, // onChange 등의 이벤트 객체 생성
    watch, // register를 통해 받은 모든 값 확인
    formState: { errors, isSubmitting }, // errors: register의 에러 메세지 자동 출력
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await Login(data.email, data.password);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
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
        <button type="button" className={style.loginButton.google}>
          Google 계정으로 로그인
        </button>
        <button type="button" className={style.loginButton.kakao}>
          카카오 계정으로 로그인
        </button>
        <button type="button" className={style.loginButton.naver}>
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
