import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AuthState = {
  token: string;
  expire: number;
  setToken: (token: string, expireInMs?: number) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      token: '',
      expire: 0,

      // token 설정
      setToken: (token, expireInMs = 3600 * 1000) => {
        const expireAt = Date.now() + expireInMs;
        set({ token, expire: expireAt });
      },

      // 로그아웃
      clearAuth: () => set({ token: '', expire: 0 }),
    }),
    {
      name: 'auth-session',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

type UserState = {
  type: string;
  cat: string;
  user: {
    username: string;
    userId: number;
    role: 'ROLE_USER' | 'ROLE_USER_SUBSCRIBED';
    loginType: 'FORM' | 'GOOGLE' | 'KAKAO' | 'NAVER';
  };
  iat: number;
  exp: number;
  setUserInfo: (userInfo: UserState) => void;
  clearUserInfo: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      type: '',
      cat: '',
      user: {
        username: '',
        userId: 0,
        role: 'ROLE_USER',
        loginType: 'FORM',
      },
      iat: 0,
      exp: 0,

      // 사용자 정보 설정
      setUserInfo: (userInfo: UserState) => set({ ...userInfo }),

      // 사용자 정보 초기화
      clearUserInfo: () =>
        set({
          type: '',
          cat: '',
          user: { username: '', userId: 0, role: 'ROLE_USER', loginType: 'FORM' },
          iat: 0,
          exp: 0,
        }),
    }),
    {
      name: 'user-session',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
