import create from "zustand";

const usePurchaseStore = create((set)=> ({
   
    isPurchase: false,
    setIsPurchase: (value) => set({isPurchase: value}),

    isPurchaseForm : false,
    setIsPurchaseForm: (value) => set({isPurchaseForm: value}),

    purchaseItems: [{ id: 1, itemName: "", qty: 0, price: 0, discountPercent: "", discountAmount: 0, TaxInPercent: "", TaxInAmount: 0, Amount: 0 }],
   setPurchaseItems: (items) => set({ purchaseItems: items }),

    partyInfo: {
    partyName: "",
    billingName: "",
    email: "",  
    poNo: "",
    poDate: new Date(),
    ewayBillNo: "",
    invoiceNo:"",
    invoiceDate: new Date()
  },
  setPartyInfo: (info) => set({ partyInfo: info }),

  grandTotal: { pandfAmount: 0, grandTotal: 0 },
  setGrandTotal: (value) => set({ grandTotal: value }),

  itemsTotal:{totalQnty: 0, totalDiscountAmount: 0, totalTaxAmount: 0, totalAmount: 0 },
  setItemsTotal: (value) => set({ itemsTotal: value }),

  isUpdateForm : false,
  setIsUpdateForm: (value) => set({isUpdateForm: value}),

  invoiceId:null,
  setInvoiceId:(id) => set({invoiceId: id}),

  resetForm: async() => {
    let highestInvoiceNo =  0;
    try {
      const res = await fetch("/api/purchaseinvoice/highestinvoice");
      const data = await res.json();
      highestInvoiceNo = data.highestInvoiceNo;
      console.log(highestInvoiceNo)

    } catch (error) {
      console.error("Error fetching highest invoice number:", error);
    }
    set({
    purchaseItems: [{ id: 1, itemName: "", qty: 0, price: 0, discountPercent: "", discountAmount: 0, TaxInPercent: "", TaxInAmount: 0, Amount: 0 }],
    partyInfo: { partyName: "", billingName: "", email: "", poNo: "", poDate: new Date(), ewayBillNo: "", invoiceNo: "", invoiceDate: new Date() },
    grandTotal: { pandfAmount: 0, grandTotal: 0 }
  })},

  savedInvoiceData: null,
  setSavedInvoiceData:(data) => set({savedInvoiceData:data}),

}))

export default usePurchaseStore;