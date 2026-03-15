import Refresh from '../assets/Refresh.svg?react';
import styles from './ProductRefresh.module.scss';

interface ProductRefreshProps {
  onRefresh: () => void;
  isLoading?: boolean;
}

export const ProductRefresh = ({
  onRefresh,
  isLoading,
}: ProductRefreshProps) => {
  return (
    <button
      className={`${styles.button} ${isLoading ? styles.spinning : ''}`}
      onClick={onRefresh}
      disabled={isLoading}
    >
      <Refresh />
    </button>
  );
};
