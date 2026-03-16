import { LoginWidget } from '@widgets/LoginWidget';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.layout}>
      <LoginWidget />
    </div>
  );
};
