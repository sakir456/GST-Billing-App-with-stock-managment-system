import create from "zustand";

const useItemStore = create((set)=> ({
    isAddingItem: false,
    setIsAddingItem: (value) => set({isAddingItem:value}),

    isProducts:"products",
    setIsProducts: (button) =>set({isProducts:button}),

    isProductForm: "products",
    setIsProductForm: (button) =>set({isProductForm:button})
}))

export default useItemStore;

