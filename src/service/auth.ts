const URL = process.env.NEXT_PUBLIC_API_URL!;

export async function Login(username: string, password: string) {
  try {
    const response = await fetch(`${URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `로그인 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('로그인 오류:', error);
    throw error;
  }
}

export async function Signup(username: string, password: string, nickname: string) {
  try {
    const response = await fetch(`${URL}/api/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        nickname,
      }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `회원가입 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('회원가입 오류:', error);
    throw error;
  }
}

export async function duplicateNickname(nickname: string) {
  try {
    const response = await fetch(`${URL}/api/user/nickname/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nickname,
      }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `중복된 닉네임입니다: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('중복된 닉네임:', error);
    throw error;
  }
}

export async function duplicateEmail(email: string) {
  try {
    const response = await fetch(`${URL}/api/user/email/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `중복된 닉네임입니다: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('중복된 닉네임:', error);
    throw error;
  }
}

export async function postEmailCode(email: string) {
  try {
    const response = await fetch(`${URL}/api/user/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `이메일 전송 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('이메일 전송 오류:', error);
    throw error;
  }
}

export async function postVerificateCode(email: string, emailAuthCode: string) {
  try {
    const response = await fetch(`${URL}/api/user/email/code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        emailAuthCode,
      }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `코드 인증 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('인증코드 전송 오류:', error);
    throw error;
  }
}
