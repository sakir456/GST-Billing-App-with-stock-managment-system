import create from "zustand";

const useItemStore = create((set) => ({
  isAddingItem: false,
  setIsAddingItem: (value) => set({ isAddingItem: value }),

  isProducts: "products",
  setIsProducts: (button) => set({ isProducts: button }),

  isProductForm: "products",
  setIsProductForm: (button) => set({ isProductForm: button }),

  isUpdateForm: false,
  setIsUpdateForm: (value) => set({ isUpdateForm: value }),

  itemData: {
    itemName: "",
    hsnCode: "",
    category: "",
    salePrice: "",
    purchasePrice: "",
    taxRate: "none",
    openingQuantity: "",
    stockPrice: "",
    salePriceTax: "none",
    purchasePriceTax: "none",
    quantityUnit: "none",
  },
  setItemData: (data) => set((state) => ({ itemData: { ...state.itemData, ...data } })),
  resetItemData: () => set({
    itemData: {
      itemName: "",
      hsnCode: "",
      category: "",
      salePrice: "",
      purchasePrice: "",
      taxRate: "none",
      openingQuantity: "",
      stockPrice: "",
      salePriceTax: "none",
      purchasePriceTax: "none",
      quantityUnit: "none",
    },
  }),
  itemInfo:null,
  setItemInfo:(data)=> set({itemInfo:data}),
 
}));

export default useItemStore;
