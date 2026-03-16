import styles from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div>
      <div className={styles.PageLoader}>
        <div className={styles.spinner}>
          <div className={styles.ring} />
        </div>
        <p className={styles.text}>Загрузка страницы...</p>
      </div>
    </div>
  );
};
