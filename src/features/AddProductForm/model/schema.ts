import { z } from 'zod';

export const addProductSchema = z.object({
  title: z.string().min(1, 'Введите название'),
  brand: z.string().min(1, 'Введите вендора'),
  sku: z.string().min(1, 'Введите артикул'),
  price: z.coerce.number().positive('Цена должна быть > 0'),
  category: z.string().min(1, 'Выберите категорию'),
  thumbnail: z
    .any()
    .refine(
      (file) => file instanceof File || typeof file === 'string',
      'Добавьте изображение',
    )
    .refine(
      (file) => (file instanceof File ? file.size <= 5000000 : true),
      'Макс. размер 5МБ',
    ),
});

export type AddProductFormData = z.infer<typeof addProductSchema>;
