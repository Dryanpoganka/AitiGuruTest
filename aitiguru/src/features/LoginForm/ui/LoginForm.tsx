import { Button } from '@shared/UI/Button/Button';
import { Checkbox } from '@shared/UI/Checkbox/Checkbox';
import { Input } from '@shared/UI/Input/Input';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputsWrapper}>
        <Input label="Логин" placeholder="Логин" />
        <Input label="Пароль" placeholder="Пароль" />
      </div>

      <Checkbox
        label={'Запомнить данные'}
        checked={false}
        onChange={function (checked: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Button className={styles.button}>Войти</Button>
    </form>
  );
};
