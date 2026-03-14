import { SearchProduct } from '@features/SearchProduct';

import styles from './CatalogHeader.module.scss';

export const CatalogHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Товары</h1>
      <SearchProduct />
    </header>
  );
};
