import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { loginRequest } from '../api/login';
import { ROUTES } from '@shared/Config/routes';
import { useUserStore } from '@entities/user';

export const useLogin = () => {
  const setAuth = useUserStore((state) => state.setAuth);
  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data, variables) => {
      const options = variables.rememberMe ? { expires: 1 } : {};

      Cookies.set('accessToken', data.accessToken, options);
      Cookies.set('refreshToken', data.refreshToken, options);

      setAuth({
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        image: data.image,
      });

      window.location.href = ROUTES.PRODUCT;
    },
    onError: (error: any) => {
      console.error('Ошибка:', error.response?.data?.message);
    },
  });
};
