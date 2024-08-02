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
    invoiceNo: "",
    invoiceDate: new Date()
  },
  setPartyInfo: (info) => set({ partyInfo: info }),

  grandTotal: { pandfAmount: 0, grandTotal: 0 },
  setGrandTotal: (value) => set({ grandTotal: value }),

  resetForm: () => set({
    saleItems: [{ id: 1, itemName: "", qty: 0, price: 0, discountPercent: "", discountAmount: 0, TaxInPercent: "", TaxInAmount: 0, Amount: 0 }],
    partyInfo: { partyName: "", billingName: "", email: "", poNo: "", poDate: new Date(), ewayBillNo: "", invoiceNo: "", invoiceDate: new Date() },
    grandTotal: { pandfAmount: 0, grandTotal: 0 }
  }),
  isUpdateForm : false,
  setIsUpdateForm: (value) => set({isUpdateForm: value})
}));

export default useSaleStore;


