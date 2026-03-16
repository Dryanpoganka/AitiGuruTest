import { ProductRefresh } from '@features/ProductRefresh';
import styles from './ProductToolbar.module.scss';
import { AddProduct } from '@features/AddProduct';
import { useProducts, useProductStore } from '@entities/product';

export const ProductToolbar = () => {
  const { currentPage, sortBy, order, searchTerm } = useProductStore();
  const { isFetching, refetch } = useProducts(
    currentPage,
    sortBy,
    order,
    searchTerm,
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Все позиции</h2>

      <div className={styles.controlPanel}>
        <ProductRefresh onRefresh={refetch} isLoading={isFetching} />
        <AddProduct />
      </div>
    </div>
  );
};
