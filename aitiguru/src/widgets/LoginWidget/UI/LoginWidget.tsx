import { LoginForm } from '@features/LoginForm';

import Logo from '../assets/Logo.svg?react';

import styles from './LoginWidget.module.scss';

export const LoginWidget = () => {
  return (
    <div className={styles.twoWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <h1 className={styles.title}>Добро пожаловать!</h1>
        <h2 className={styles.subTitle}>Пожалуйста, авторизируйтесь</h2>

        <LoginForm />
        <div className={styles.orWrapper}>
          <div className={styles.orLine} />
          <span className={styles.or}>или</span>
          <div className={styles.orLine} />
        </div>

        <a href="/sign-up" className={styles.link}>
          Нет Аккаунта? <span>Создать</span>
        </a>
      </div>
    </div>
  );
};
