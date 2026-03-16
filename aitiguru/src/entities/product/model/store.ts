import { create } from 'zustand';

export type SortOrder = 'asc' | 'desc';

interface ProductTableState {
  currentPage: number;
  selectedIds: number[];
  sortBy: string | null;
  order: SortOrder;
  searchTerm: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
  toggleSelect: (id: number) => void;
  setSorting: (field: string) => void;
}
export const useProductStore = create<ProductTableState>((set) => ({
  currentPage: 1,
  selectedIds: [],
  sortBy: null,
  order: 'asc',
  searchTerm: '',
  isModalOpen: false,
  setCurrentPage: (page) => set({ currentPage: page }),
  toggleSelect: (id) =>
    set((state) => ({
      selectedIds: state.selectedIds.includes(id)
        ? state.selectedIds.filter((i) => i !== id)
        : [...state.selectedIds, id],
    })),

  setSorting: (field) =>
    set((state) => {
      if (state.sortBy === field) {
        return { order: state.order === 'asc' ? 'desc' : 'asc' };
      }
      return { sortBy: field, order: 'asc' };
    }),
  setSearchTerm: (term) =>
    set({
      searchTerm: term,
      currentPage: 1,
    }),
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
