import { useState, useEffect } from 'react';
import { Input } from '@shared/UI/Input/Input';
import Search from '../assets/search.svg?react';
import styles from './SearchProduct.module.scss';

interface SearchProductProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchProduct = ({
  searchTerm,
  onSearchChange,
}: SearchProductProps) => {
  const [localValue, setLocalValue] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(localValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [localValue, onSearchChange]);

  return (
    <div className={styles.wrapper}>
      <Input
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        leftIcon={<Search />}
        placeholder="Найти"
        className={styles.input}
        styleType="filled"
      />
    </div>
  );
};
