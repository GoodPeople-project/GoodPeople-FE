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
