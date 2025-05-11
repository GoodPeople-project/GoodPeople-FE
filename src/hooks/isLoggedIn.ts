import { useAuthStore } from '@/store/auth';

export const useIsLoggedIn = () => {
  const { token, expire } = useAuthStore();
  return !!token && Date.now() < expire;
};
