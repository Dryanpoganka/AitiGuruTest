// src/entities/product/ui/ProductRow/ProductRow.tsx
import { type FC, type ReactNode } from 'react';
import { Checkbox } from '@shared/UI/Checkbox/Checkbox';
import { type Product } from '../model/types';
import styles from './ProductRow.module.scss';

interface IProductRowProps {
  product: Product;
  action: ReactNode;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const ProductRow: FC<IProductRowProps> = ({
  product,
  action,
  isSelected,
  onSelect,
}) => {
  return (
    <tr className={styles.row}>
      <td>
        <Checkbox
          label=""
          checked={isSelected}
          onChange={() => onSelect(product.id)}
        />
      </td>
      <td>
        <div className={styles.leftWrapper}>
          <div className={styles.imgProductWrapper}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.imgProduct}
            />
          </div>
          <div className={styles.productInfoWrapper}>
            <span className={styles.productName}>{product.title}</span>
            <span className={styles.productType}>{product.category}</span>
          </div>
        </div>
      </td>
      <td className={styles.productVendor}>{product.brand || 'N/A'}</td>
      <td className={styles.productArticle}>{product.sku}</td>
      <td className={styles.productRating}>
        <span className={product.rating < 3 ? styles.badReview : ''}>
          {product.rating}
        </span>
        /5
      </td>
      <td className={styles.productPrice}>
        {Math.floor(product.price).toLocaleString()}
        <span>,{(product.price % 1).toFixed(2).slice(2)}</span>
      </td>
      <td>{action}</td>
    </tr>
  );
};
