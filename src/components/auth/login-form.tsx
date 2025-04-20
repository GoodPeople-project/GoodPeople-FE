'use client';

import { useForm } from 'react-hook-form';
import * as style from './css/login-form.css';

export function LoginForm() {
  const {
    handleSubmit, // form onSubmit에 들어가는 함수
    register, // onChange 등의 이벤트 객체 생성
    watch, // register를 통해 받은 모든 값 확인
    formState: { errors }, // errors: register의 에러 메세지 자동 출력
  } = useForm();

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.large}>로그인</div>
        <div className={style.small}>계정에 로그인하여 굿피플 서비스를 이용하세요</div>
        <div className={style.inputWrapper}>
          <label className={style.lable}>이메일</label>
          <input className={style.input} placeholder="your@email.com" />
        </div>
        <div className={style.inputWrapper}>
          <label className={style.lable}>비밀번호</label>
          <input className={style.input} type="password" placeholder="password" />
        </div>
        <button className={style.loginButton.default}>로그인</button>
        <div className={style.divder}>
          <div className={style.line}></div>
          <span className={style.small}>또는</span>
          <div className={style.line}></div>
        </div>
        <button className={style.loginButton.google}>Google 계정으로 로그인</button>
        <button className={style.loginButton.kakao}>카카오 계정으로 로그인</button>
        <button className={style.loginButton.naver}>네이버 계정으로 로그인</button>
        <div className={style.textWrapper}>
          <div className={style.small}>계정이 없으신가요? </div>
          <div className={style.highlight}>회원가입</div>
        </div>
      </div>
    </div>
  );
}
