import { SearchProduct } from '@features/SearchProduct';

import styles from './CatalogHeader.module.scss';
import { useProductStore } from '@entities/product';

export const CatalogHeader = () => {
  const { searchTerm, setSearchTerm } = useProductStore();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Товары</h1>
      <SearchProduct searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </header>
  );
};
