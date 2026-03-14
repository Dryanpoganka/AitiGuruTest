import { Button } from '@shared/UI/Button/Button';
import { Checkbox } from '@shared/UI/Checkbox/Checkbox';
import { Input } from '@shared/UI/Input/Input';

import Close from '../assets/Close.svg?react';
import Eyes from '../assets/Eyes.svg?react';
import Lock from '../assets/Lock.svg?react';
import User from '../assets/User.svg?react';

import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginSchema } from '../model/schema';

import styles from './LoginForm.module.scss';
import { Controller, useForm } from 'react-hook-form';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { login: '', password: '', rememberMe: false },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
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
              error={errors.password?.message}
              leftIcon={<Lock />}
              rightIcon={<Eyes />}
            />
          )}
        />
      </div>

      <Controller
        name="rememberMe"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Checkbox
            label="Запомнить данные"
            checked={value}
            onChange={onChange}
          />
        )}
      />
      <Button type="submit" className={styles.button}>
        Войти
      </Button>
    </form>
  );
};
