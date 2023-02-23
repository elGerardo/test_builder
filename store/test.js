import { create } from "zustand";

export let useTest = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
