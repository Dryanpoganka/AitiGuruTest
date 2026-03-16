import { baseAxios } from '@shared/api/base';
import { type LoginSchema } from '../model/schema';

export const loginRequest = async (data: LoginSchema) => {
  const response = await baseAxios.post('/auth/login', {
    username: data.login,
    password: data.password,
    expiresInMins: data.rememberMe ? 1440 : 60,
  });
  return response.data;
};
