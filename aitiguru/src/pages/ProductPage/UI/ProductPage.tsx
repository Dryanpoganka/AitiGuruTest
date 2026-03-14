import { CatalogHeader } from '@widgets/CatalogHeader';
import styles from './ProductPage.module.scss';
import { ProductToolbar } from '@widgets/ProductToolbar';
import { ProductTable } from '@widgets/ProductTable';
export const ProductPage = () => {
  return (
    <div className={styles.layout}>
      <CatalogHeader />

      <div className={styles.content}>
        <ProductToolbar />
        <ProductTable />
      </div>
    </div>
  );
};
