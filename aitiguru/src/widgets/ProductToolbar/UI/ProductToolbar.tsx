import { ProductRefresh } from '@features/ProductRefresh';
import styles from './ProductToolbar.module.scss';
import { AddProduct } from '@features/AddProduct';
import { useProducts } from '@entities/product/api/productApi';
import { useProductStore } from '@entities/product/model/store';

export const ProductToolbar = () => {
  const { currentPage } = useProductStore();
  const { isFetching, refetch } = useProducts(currentPage);

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
