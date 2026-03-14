import { Checkbox } from '@shared/UI/Checkbox/Checkbox';
import styles from './ProductTable.module.scss';
import { ProductRow } from '@entities/product';
import { ProductAction } from '@features/ProductAction';
import { AddToCart } from '@features/AddToCart';
import { Pagination } from '@shared/UI/Pagination/Pagination';

export const ProductTable = () => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <Checkbox label="" checked onChange={() => {}} />
            <th
              className={`${styles.tableHeaderColumn} ${styles.tabNameHeader}`}
            >
              Наименование
            </th>
            <th className={styles.tableHeaderColumn}>Вендор</th>
            <th className={styles.tableHeaderColumn}>Артикул</th>
            <th className={styles.tableHeaderColumn}>Оценка</th>
            <th className={styles.tableHeaderColumn}>Цена, ₽</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ProductRow
            action={
              <div className={styles.controlWrapper}>
                <AddToCart />
                <ProductAction />
              </div>
            }
          />
          <ProductRow
            action={
              <div className={styles.controlWrapper}>
                <AddToCart />
                <ProductAction />
              </div>
            }
          />
          <ProductRow
            action={
              <div className={styles.controlWrapper}>
                <AddToCart />
                <ProductAction />
              </div>
            }
          />
          <ProductRow
            action={
              <div className={styles.controlWrapper}>
                <AddToCart />
                <ProductAction />
              </div>
            }
          />
          <ProductRow
            action={
              <div className={styles.controlWrapper}>
                <AddToCart />
                <ProductAction />
              </div>
            }
          />
        </tbody>
      </table>

      <footer className={styles.footer}>
        <p className={styles.counter}>
          Показано <span>1-20</span> из <span>120</span>
        </p>
        <Pagination currentPage={1} totalPages={100} onPageChange={() => {}} />
      </footer>
    </>
  );
};
