import { create } from "zustand";

interface SelectedCategoryProps {
  category: string;
  setCategory: (category: string) => void;
}

export const categoryStore = create<SelectedCategoryProps>((set) => ({
  category: "viewFeed",
  setCategory: (state) => set({ category: state }),
}));
