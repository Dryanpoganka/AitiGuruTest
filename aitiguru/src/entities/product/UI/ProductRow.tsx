import { Checkbox } from '@shared/UI/Checkbox/Checkbox';

import styles from './ProductRow.module.scss';
import type { FC, ReactNode } from 'react';

interface IProductRowProps {
  action: ReactNode;
}

export const ProductRow: FC<IProductRowProps> = ({ action }) => {
  return (
    <tr className={styles.row}>
      <td>
        <Checkbox
          label={''}
          checked={false}
          onChange={function (checked: boolean): void {
            throw new Error('Function not implemented.');
          }}
        />
      </td>
      <td>
        <div className={styles.leftWrapper}>
          <div className={styles.imgProductWrapper}>
            {/* <img /> */}
            <div className={styles.imgProductPlaceholder} />
          </div>
          <div className={styles.productInfoWrapper}>
            <span className={styles.productName}>USB Флэшкарта 16GB</span>
            <span className={styles.productType}>Аксессуары</span>
          </div>
        </div>
      </td>

      <td className={styles.productVendor}>Samsung</td>
      <td className={styles.productArticle}>RCH45Q1A</td>

      <td className={styles.productRating}>4.3/5</td>

      <td className={styles.productPrice}>
        48 652
        <span>,00</span>
      </td>

      <td>{action}</td>
    </tr>
  );
};
