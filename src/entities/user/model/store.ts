import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
}

interface UserState {
  user: User | null;
  isAuth: boolean;
  _hasHydrated: boolean;
  setAuth: (user: User) => void;
  logout: () => void;
  setHasHydrated: (state: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuth: !!Cookies.get('accessToken'),
      _hasHydrated: false,
      setAuth: (user) => set({ user, isAuth: true }),
      logout: () => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        set({ user: null, isAuth: false });
      },
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
