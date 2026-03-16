import { Button } from '@shared/UI/Button/Button';

import Plus from '../assets/Plus.svg?react';
import { useProductStore } from '@entities/product';

export const AddProduct = () => {
  const toggleModal = useProductStore((state) => state.toggleModal);
  return (
    <Button styleType="standart" type="button" onClick={toggleModal}>
      <Plus /> <span>Добавить</span>
    </Button>
  );
};
