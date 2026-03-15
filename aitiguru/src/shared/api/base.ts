import axios from 'axios';
import Cookies from 'js-cookie';

export const baseAxios = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

baseAxios.interceptors.request.use((config) => {
  const token = Cookies.get('accessToken');

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

baseAxios.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = Cookies.get('refreshToken');

        const response = await axios.post(
          'https://dummyjson.com/auth/refresh',
          {
            refreshToken,
            expiresInMins: 1440,
          },
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        const isRememberMe = !!Cookies.get('refreshToken');
        const cookieOptions = isRememberMe ? { expires: 1 } : {};

        Cookies.set('accessToken', accessToken, cookieOptions);
        Cookies.set('refreshToken', newRefreshToken, cookieOptions);

        return baseAxios(originalRequest);
      } catch (e) {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);
