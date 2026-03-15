import { ProductRow } from '@entities/product';
import { useProducts } from '@entities/product/api/productApi';
import { useProductStore } from '@entities/product/model/store';
import { AddToCart } from '@features/AddToCart';
import { ProductAction } from '@features/ProductAction';
import { Pagination } from '@shared/UI/Pagination/Pagination';
import styles from './ProductTable.module.scss';

export const ProductTable = () => {
  const { currentPage, setCurrentPage, selectedIds, toggleSelect } =
    useProductStore();
  const { data, isLoading, isFetching } = useProducts(currentPage);
  console.log(isLoading);
  return (
    <div className={styles.container}>
      {/* Прогресс-бар при подгрузке (isFetching поймает и первый запуск, и пагинацию) */}
      {(isLoading || isFetching) && <div className={styles.progressBar} />}

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>
              <input type="checkbox" />
            </th>
            <th className={styles.tabNameHeader}>Наименование</th>
            <th>Вендор</th>
            <th>Артикул</th>
            <th>Оценка</th>
            <th>Цена, ₽</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data?.products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                isSelected={selectedIds.includes(product.id)}
                onSelect={toggleSelect}
                action={
                  <div className={styles.controlWrapper}>
                    <AddToCart productId={product.id} />
                    <ProductAction productId={product.id} />
                  </div>
                }
              />
            ))}
        </tbody>
      </table>

      <footer className={styles.footer}>
        <p className={styles.counter}>
          Показано{' '}
          <span>
            {data?.skip || 0 + 1}-
            {Math.min(data?.total || 0, (data?.skip || 0) + 20)}
          </span>{' '}
          из <span>{data?.total || 0}</span>
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil((data?.total || 0) / 20)}
          onPageChange={setCurrentPage}
        />
      </footer>
    </div>
  );
};
