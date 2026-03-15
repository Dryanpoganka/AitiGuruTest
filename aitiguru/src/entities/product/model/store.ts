import { create } from 'zustand';

interface ProductTableState {
  currentPage: number;
  selectedIds: number[];
  setCurrentPage: (page: number) => void;
  toggleSelect: (id: number) => void;
}

export const useProductStore = create<ProductTableState>((set) => ({
  currentPage: 1,
  selectedIds: [],
  setCurrentPage: (page) => set({ currentPage: page }),
  toggleSelect: (id) =>
    set((state) => ({
      selectedIds: state.selectedIds.includes(id)
        ? state.selectedIds.filter((i) => i !== id)
        : [...state.selectedIds, id],
    })),
}));
