
import create from "zustand";




const useSaleStore = create((set) => ({

  
  isSaleForm: false,
  setIsSaleForm: (value) => set({ isSaleForm: value }),

  saleItems: [{ id: 1, itemName: "", qty: 0, price: 0, discountPercent: "", discountAmount: 0, TaxInPercent: "", TaxInAmount: 0, Amount: 0 }],
  setSaleItems: (items) => set({ saleItems: items }),

  partyInfo: {
    partyName: "",
    billingName: "",
    email: "",
    poNo: "",
    poDate: new Date(),
    ewayBillNo: "",
    invoiceNo:1,
    invoiceDate: new Date()
  },
  setPartyInfo: (info) => set({ partyInfo: info }),

  grandTotal: { pandfAmount: 0, grandTotal: 0 },
  setGrandTotal: (value) => set({ grandTotal: value }),

  resetForm: async() => {
    let highestInvoiceNo =  0;
    try {
      const res = await fetch("/api/invoice/highestinvoice");
      const data = await res.json();
      highestInvoiceNo = data.highestInvoiceNo;
      console.log(highestInvoiceNo)

    } catch (error) {
      console.error("Error fetching highest invoice number:", error);
    }
    set({
    saleItems: [{ id: 1, itemName: "", qty: 0, price: 0, discountPercent: "", discountAmount: 0, TaxInPercent: "", TaxInAmount: 0, Amount: 0 }],
    partyInfo: { partyName: "", billingName: "", email: "", poNo: "", poDate: new Date(), ewayBillNo: "", invoiceNo: highestInvoiceNo + 1, invoiceDate: new Date() },
    grandTotal: { pandfAmount: 0, grandTotal: 0 }
  })},
 invoiceId:null,
 setInvoiceId:(id) => set({invoiceId: id}),

  isUpdateForm : false,
  setIsUpdateForm: (value) => set({isUpdateForm: value}),
 
  itemsTotal:{totalQnty: 0, totalDiscountAmount: 0, totalTaxAmount: 0, totalAmount: 0 },
  setItemsTotal: (value) => set({ itemsTotal: value }),
 
 
}));

export default useSaleStore;


