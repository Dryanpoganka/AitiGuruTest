import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@shared/UI/Button/Button';
import { Checkbox } from '@shared/UI/Checkbox/Checkbox';
import { Input } from '@shared/UI/Input/Input';

import { loginSchema, type LoginSchema } from '../model/schema';
import { useLogin } from '../model/useLogin';

import Close from '../assets/Close.svg?react';
import Eyes from '../assets/Eyes.svg?react';
import Lock from '../assets/Lock.svg?react';
import User from '../assets/User.svg?react';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { mutate: login, isPending, error } = useLogin();
  console.log(error);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { login: '', password: '', rememberMe: false },
  });

  const onSubmit = (data: LoginSchema) => {
    login(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputsWrapper}>
        <Controller
          name="login"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Логин"
              disabled={isPending}
              error={errors.login?.message}
              leftIcon={<User />}
              rightIcon={<Close />}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Пароль"
              disabled={isPending}
              error={errors.password?.message}
              leftIcon={<Lock />}
              rightIcon={<Eyes />}
            />
          )}
        />
      </div>
      {error && (
        <div className={styles.serverError}>{'Неверный логин или пароль'}</div>
      )}
      <Controller
        name="rememberMe"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Checkbox
            label="Запомнить данные"
            checked={value}
            onChange={onChange}
            disabled={isPending}
          />
        )}
      />

      <Button type="submit" className={styles.button} disabled={isPending}>
        {isPending ? 'Вход...' : 'Войти'}
      </Button>
    </form>
  );
};
