import create from 'zustand';

const useSidebarStore = create((set) => ({
  expandedItem: null,
  setExpandedItem: (item) => set({ expandedItem: item }),
}));

export default useSidebarStore;