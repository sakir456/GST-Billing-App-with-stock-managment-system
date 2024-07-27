import  create  from "zustand";

const useSaleStore = create((set)=> ({
      isSaleForm:false,
      setIsSaleForm: (value) => set({isSaleForm:value}),

      items: [{ id: 1, itemName: "", qty:0, price:0, discountPercent: "", discountAmount:0, TaxInPercent: "", TaxInAmount:0, Amount:0 }],

      setItems: (items) => set({ items }),
        


}))

export default useSaleStore