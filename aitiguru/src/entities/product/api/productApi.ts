// src/entities/product/api/productApi.ts
import { baseAxios } from '@shared/api/base';
import { useQuery } from '@tanstack/react-query';
import { type ProductsResponse } from '../model/types';

export const useProducts = (page: number) => {
  const limit = 20;
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: ['products', page],
    queryFn: async () => {
      const { data } = await baseAxios.get<ProductsResponse>(
        `/products?limit=${limit}&skip=${skip}`,
      );
      return data;
    },
  });
};
