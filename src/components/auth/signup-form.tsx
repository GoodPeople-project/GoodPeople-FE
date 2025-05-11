'use client';

import { useForm } from 'react-hook-form';
import * as style from './css/signup-form.css';
import {
  duplicateEmail,
  duplicateNickname,
  postEmailCode,
  postVerificateCode,
  Signup,
} from '@/service/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SignupFormData {
  email: string;
  password: string;
  nickname: string;
  passwordConfirm: string;
  emailVerificationCode?: string; // 선택적 필드로 추가
}

export function SignupForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues, // watch 대신 getValues 사용
  } = useForm<SignupFormData>({
    mode: 'onChange', // 실시간 유효성 검사를 위해 mode 설정
  });

  const [isNicknameVerified, setIsNicknameVerified] = useState(false);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const router = useRouter();

  // 닉네임 중복 확인
  const handleCheckNicknameDuplicate = async () => {
    const nickname = getValues('nickname');
    if (!nickname) {
      alert('닉네임을 먼저 입력해주세요');
      return;
    }

    try {
      const res = await duplicateNickname(nickname);
      if (res.message === '사용 가능한 닉네임입니다.') {
        setIsEmailVerified(true);
        alert(res.message);
      } else if (res.message === '이미 사용 중인 닉네임입니다.') {
        alert(res.message);
      }
    } catch (error) {
      alert('닉네임 중복 확인 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  // 이메일 중복 확인
  const handleEmailDuplicate = async () => {
    const email = getValues('email');
    if (!email) {
      alert('이메일을 먼저 입력해주세요');
      return;
    }

    try {
      const res = await duplicateEmail(email);
      if (res.message === '사용 가능한 이메일입니다.') {
        setIsEmailDuplicated(true);
        alert(res.message);
      } else if (res.message === '이미 사용 중인 이메일입니다.') {
        alert(res.message);
      }
    } catch (error) {
      alert('이메일 중복 확인 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  // 이메일 인증번호 보내기
  const handlepostEmailCode = async () => {
    const email = getValues('email');
    if (!email) {
      alert('이메일을 먼저 입력해주세요');
      return;
    }
    try {
      const res = await postEmailCode(email);
      alert(res.message);
    } catch (error) {
      alert('이메일 코드 전송 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  // 이메일 인증 요청
  const handleRequestEmailVerification = async () => {
    const email = getValues('email');
    const code = getValues('emailVerificationCode');

    if (!email) {
      alert('이메일을 먼저 입력해주세요');
      return;
    }
    if (!code) {
      alert('이메일 인증 코드를 입력해주세요');
      return;
    }

    try {
      const res = await postVerificateCode(email, code);
      setIsEmailVerified(true);
      alert(res.message);
    } catch (error) {
      alert('이메일 코드 인증 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  // 회원가입 요청
  const handleSignup = async (data: SignupFormData) => {
    try {
      await Signup(data.email, data.password, data.nickname);
      router.push('/');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입을 실패하였습니다.');
    }
  };

  return (
    <form className={style.container} onSubmit={handleSubmit(handleSignup)}>
      <div className={style.wrapper}>
        <div className={style.large}>회원가입</div>
        <div className={style.small}>굿피플의 서비스를 이용하기 위한 계정을 만드세요</div>

        {/* 닉네임 필드 */}
        <div className={style.inputWrapper}>
          <div className={style.labelWrapper}>
            <label className={style.label}>닉네임</label>
            <button
              type="button"
              className={style.certifyBtn}
              onClick={handleCheckNicknameDuplicate}
              disabled={isNicknameVerified}
            >
              중복확인
            </button>
          </div>
          <input
            className={style.input}
            placeholder="hwandu"
            {...register('nickname', {
              required: { value: true, message: '닉네임을 입력해주세요' },
              minLength: { value: 2, message: '닉네임은 최소 2자 이상이어야 합니다' },
              onChange: () => isNicknameVerified && setIsNicknameVerified(false),
            })}
            disabled={isNicknameVerified}
          />
          <div className={style.errorContainer}>
            {errors.nickname && <div className={style.error}>{errors.nickname.message}</div>}
          </div>
        </div>

        {/* 이메일 필드 */}
        <div className={style.inputWrapper}>
          <div className={style.labelWrapper}>
            <label className={style.label}>이메일</label>
            {isEmailDuplicated ? (
              <button
                type="button"
                className={style.certifyBtn}
                onClick={handlepostEmailCode}
                disabled={isEmailVerified}
              >
                인증번호 보내기
              </button>
            ) : (
              <button
                type="button"
                className={style.certifyBtn}
                onClick={handleEmailDuplicate}
                disabled={isEmailVerified}
              >
                이메일 중복확인
              </button>
            )}
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
          <div className={style.errorContainer}>
            {errors.email && <div className={style.error}>{errors.email.message}</div>}
          </div>
        </div>

        {/* 이메일 인증번호 필드 */}
        <div className={style.inputWrapper}>
          <div className={style.labelWrapper}>
            <label className={style.label}>이메일 인증번호</label>
            <button
              type="button"
              className={style.certifyBtn}
              onClick={handleRequestEmailVerification}
            >
              인증하기
            </button>
          </div>
          <input
            className={style.input}
            placeholder="인증번호를 입력해주세요"
            {...register('emailVerificationCode', {
              required: { value: true, message: '인증번호를 입력해주세요' },
            })}
          />
          <div className={style.errorContainer}>
            {errors.emailVerificationCode && (
              <div className={style.error}>{errors.emailVerificationCode.message}</div>
            )}
          </div>
        </div>

        {/* 비밀번호 필드 */}
        <div className={style.inputWrapper}>
          <div className={style.labelWrapper}>
            <label className={style.label}>비밀번호</label>
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
          <div className={style.errorContainer}>
            {errors.password && <div className={style.error}>{errors.password.message}</div>}
          </div>
        </div>

        {/* 비밀번호 확인 필드 */}
        <div className={style.inputWrapper}>
          <div className={style.labelWrapper}>
            <label className={style.label}>비밀번호 확인</label>
          </div>
          <input
            className={style.input}
            type="password"
            placeholder="password"
            {...register('passwordConfirm', {
              required: { value: true, message: '비밀번호 확인을 입력해주세요' },
              validate: value => value === getValues('password') || '비밀번호가 일치하지 않습니다',
            })}
          />
          <div className={style.errorContainer}>
            {errors.passwordConfirm && (
              <div className={style.error}>{errors.passwordConfirm.message}</div>
            )}
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <button className={style.loginButton.default} type="submit">
          회원가입
        </button>

        {/* 구분선 */}
        <div className={style.divider}>
          <div className={style.line}></div>
          <span className={style.small}>또는</span>
          <div className={style.line}></div>
        </div>

        {/* 소셜 로그인 버튼들 */}
        <button type="button" className={style.loginButton.google}>
          <img src="/icons/google.svg" alt="Google" className={style.icons} />
          Google 계정으로 회원가입
        </button>
        <button type="button" className={style.loginButton.kakao}>
          <img src="/icons/kakao.svg" alt="Kakao" className={style.icons} />
          카카오 계정으로 회원가입
        </button>
        <button type="button" className={style.loginButton.naver}>
          <img src="/icons/naver.svg" alt="Naver" className={style.icons} />
          네이버 계정으로 회원가입
        </button>

        {/* 로그인 링크 */}
        <div className={style.textWrapper}>
          <div className={style.small}>이미 계정이 있으신가요?</div>
          <div className={style.highlight}>로그인</div>
        </div>
      </div>
    </form>
  );
}
