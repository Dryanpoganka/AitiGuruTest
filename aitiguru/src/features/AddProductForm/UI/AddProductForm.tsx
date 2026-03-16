import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Button } from '@shared/UI/Button/Button';
import { Input } from '@shared/UI/Input/Input';
import { addProductSchema, type AddProductFormData } from '../model/schema';
import styles from './AddProductForm.module.scss';
import { ImageUploader } from '@shared/UI/ImageUploader/ImageUploader';

export const AddProductForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<AddProductFormData>({
    resolver: zodResolver(addProductSchema) as any,
    defaultValues: {
      title: '',
      brand: '',
      sku: '',
      price: 0,
      category: '',
      thumbnail: null,
    },
  });
  const onSubmit = (data: AddProductFormData) => {
    console.log('Данные формы:', data);

    toast.success('Товар успешно добавлен!', {
      duration: 3000,
      position: 'top-right',
    });

    reset();
    onSuccess?.();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Наименование"
        {...register('title')}
        error={errors.title?.message}
      />
      <Input
        label="Вендор"
        {...register('brand')}
        error={errors.brand?.message}
      />
      <Input label="Артикул" {...register('sku')} error={errors.sku?.message} />
      <Input
        label="Цена"
        type="number"
        {...register('price')}
        error={errors.price?.message}
      />
      <Input
        label="Категория"
        {...register('category')}
        error={errors.category?.message}
      />

      <Controller
        name="thumbnail"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <ImageUploader
            value={value}
            onChange={onChange}
            error={error?.message}
          />
        )}
      />

      <Button type="submit">Сохранить</Button>
    </form>
  );
};
