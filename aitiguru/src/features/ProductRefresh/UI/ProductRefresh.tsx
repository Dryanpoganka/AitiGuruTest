import Refresh from '../assets/Refresh.svg?react';

import styles from './ProductRefresh.module.scss';

export const ProductRefresh = () => {
  return (
    <button className={styles.button}>
      <Refresh />
    </button>
  );
};
