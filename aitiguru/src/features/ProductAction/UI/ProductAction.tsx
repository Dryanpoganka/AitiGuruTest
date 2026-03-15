import type { FC } from 'react';
import Menu from '../assets/menu.svg?react';

interface IProductActionProps {
  productId: number;
}

export const ProductAction: FC<IProductActionProps> = () => {
  return (
    <>
      <Menu />
    </>
  );
};
