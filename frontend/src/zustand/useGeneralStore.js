import create from "zustand";

const useGeneralStore = create((set)=> ({
     invoicePrintPage : false,
     setInvoicePrintPage:(value)=> set({invoicePrintPage:value}),

     fetchInvoiceId: null,
     setFetchInvoiceId: (id) => set({fetchInvoiceId:id}),

       invoice:{invoice:null, partyDetails: null, itemDetails: null},
       setInvoice : (data) => set({invoice: data})
     


 





}))

export default useGeneralStore