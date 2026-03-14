import { Button } from '@shared/UI/Button/Button';

import Plus from '../assets/Plus.svg?react';

export const AddProduct = () => {
  return (
    <Button styleType="standart">
      <Plus />
      <span>Добавить</span>
    </Button>
  );
};
