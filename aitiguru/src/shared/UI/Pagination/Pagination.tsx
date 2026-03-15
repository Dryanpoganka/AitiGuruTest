import type { FC } from 'react';

import ArrowLeft from '../icons/ArrowLeft.svg?react';

import styles from './Pagination.module.scss';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  onPageChange,
  totalPages,
}) => {
  const getVisiblePages = (): number[] => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);

    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <>
      <div className={styles.pagination}>
        <button className={styles.arrowWrapper}>
          <ArrowLeft />
        </button>
        <div className={styles.pages}>
          {visiblePages.map((page) => (
            <button
              key={page}
              className={`${styles.pageButton} ${currentPage === page ? styles.pageButtonActive : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button className={styles.arrowWrapperRight}>
          <ArrowLeft />
        </button>
      </div>
    </>
  );
};
