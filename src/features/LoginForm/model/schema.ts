import { z } from 'zod';

export const loginSchema = z.object({
  login: z.string().min(3, 'Логин должен быть минимум 3 символа'),
  password: z.string().min(6, 'Пароль должен быть минимум 6 символов'),
  rememberMe: z.boolean(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
