import create from "zustand";

const useGeneralStore = create((set)=> ({
     invoicePrintPage : false,
     setInvoicePrintPage:(value)=> set({invoicePrintPage:value})


 





}))

export default useGeneralStore