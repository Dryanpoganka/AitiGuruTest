import { Button } from '@shared/UI/Button/Button';

import Plus from '../assets/PlusIcon.svg?react';
import type { FC } from 'react';

interface AddToCartProps {
  productId: number; // Добавляем сюда
}

export const AddToCart: FC<AddToCartProps> = () => {
  return (
    <Button styleType="small">
      <Plus />
    </Button>
  );
};
