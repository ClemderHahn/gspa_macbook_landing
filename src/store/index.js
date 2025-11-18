import { create } from 'zustand';

const useMacbookStore = create((set) => ({
    color: '#b0b0b0',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: '#b0b0b0', scale: 0.08 }),
}))

export default useMacbookStore;