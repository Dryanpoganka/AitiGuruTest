import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { baseAxios } from '@shared/api/base';
import { type ProductsResponse } from '../model/types';
import type { SortOrder } from '../model/store';

export const useProducts = (
  page: number,
  sortBy: string | null,
  order: SortOrder,
  searchTerm: string,
) => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const limit = 20;
  const skip = (page - 1) * limit;

  const query = useQuery({
    queryKey: ['products', page, sortBy, order, searchTerm],
    queryFn: async () => {
      const path = searchTerm ? '/products/search' : '/products';
      const params: Record<string, any> = { limit, skip };
      if (searchTerm) params.q = searchTerm;
      if (sortBy) {
        params.sortBy = sortBy;
        params.order = order;
      }

      const { data } = await baseAxios.get<ProductsResponse>(path, { params });
      return data;
    },
  });

  useEffect(() => {
    if (query.isFetching) {
      setProgress(10);
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : 90));
      }, 150);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (query.isSuccess || query.isError) {
        setProgress(100);
        setTimeout(() => setProgress(0), 500);
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [query.isFetching, query.isSuccess, query.isError]);

  return { ...query, progress };
};
