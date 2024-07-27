import  create  from "zustand";

const useSaleStore = create((set)=> ({
      isSaleForm:false,
      setIsSaleForm: (value) => set({isSaleForm:value})


}))

export default useSaleStore