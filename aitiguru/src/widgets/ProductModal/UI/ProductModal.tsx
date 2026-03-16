import { useProductStore } from '@entities/product';
import styles from './ProductModal.module.scss';
import { AddProductForm } from '@features/AddProductForm';
import { createPortal } from 'react-dom';

import Close from '../assets/Close.svg?react';

export const ProductModal = () => {
  const { isModalOpen, toggleModal } = useProductStore();
  console.log(isModalOpen);
  if (!isModalOpen) return null;

  return (
    <>
      {createPortal(
        <>
          <div className={styles.overlay} onClick={toggleModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <Close className={styles.close} onClick={toggleModal} />
              <h2 className={styles.title}>Добавление товара</h2>

              <AddProductForm />
            </div>
          </div>
        </>,
        document.body,
      )}
    </>
  );
};
