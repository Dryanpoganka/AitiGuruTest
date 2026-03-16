import { ProductRow } from '@entities/product';
import { useProducts } from '@entities/product';
import { useProductStore } from '@entities/product';
import { AddToCart } from '@features/AddToCart';
import { ProductAction } from '@features/ProductAction';
import { Pagination } from '@shared/UI/Pagination/Pagination';
import styles from './ProductTable.module.scss';
import { Checkbox } from '@shared/UI/Checkbox/Checkbox';

export const ProductTable = () => {
  const {
    currentPage,
    setCurrentPage,
    sortBy,
    order,
    selectedIds,
    searchTerm,
    toggleSelect,
    setSorting,
  } = useProductStore();
  const { data, isLoading, isFetching, progress } = useProducts(
    currentPage,
    sortBy,
    order,
    searchTerm,
  );
  console.log(isLoading);
  return (
    <div className={styles.container}>
      {/* Прогресс-бар при подгрузке (isFetching поймает и первый запуск, и пагинацию) */}
      {(isLoading || isFetching) && (
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>
              <Checkbox label="" checked={false} onChange={() => {}} />
            </th>
            <th
              className={`${styles.tabNameHeader} ${styles.tableHeaderColumn}`}
            >
              Наименование
            </th>
            <th className={styles.tableHeaderColumn}>Вендор</th>
            <th className={styles.tableHeaderColumn}>Артикул</th>
            {/* Делаем заголовки кликабельными */}
            <th
              onClick={() => setSorting('rating')}
              className={styles.tableHeaderColumn}
            >
              Оценка
            </th>
            <th
              onClick={() => setSorting('price')}
              className={styles.tableHeaderColumn}
            >
              Цена, ₽
            </th>
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
