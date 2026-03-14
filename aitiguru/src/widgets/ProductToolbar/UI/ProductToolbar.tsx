import { ProductRefresh } from '@features/ProductRefresh';
import styles from './ProductToolbar.module.scss';
import { AddProduct } from '@features/AddProduct';

export const ProductToolbar = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Все позиции</h2>

      <div className={styles.controlPanel}>
        <ProductRefresh />
        <AddProduct />
      </div>
    </div>
  );
};
