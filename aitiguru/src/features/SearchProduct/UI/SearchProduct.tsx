import { Input } from '@shared/UI/Input/Input';

import Search from '../assets/search.svg?react';

import styles from './SearchProduct.module.scss';

export const SearchProduct = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        leftIcon={<Search />}
        placeholder="Найти"
        className={styles.input}
        styleType="filled"
      />
    </div>
  );
};
