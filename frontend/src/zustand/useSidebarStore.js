import create from 'zustand';

const useSidebarStore = create((set) => ({
  expandedItem: null,
  setExpandedItem: (item) => set({ expandedItem: item }),
  
  isFirmForm: false,
  setIsFirmForm: (value) => set({isFirmForm: value}),

  isFirmPersonalData: {
   businessName:"",
   gstin:"",
   phoneNo: "",
   email:"",
  },
  setIsFirmPersonalData: (info)=> set({isFirmPersonalData:info}),

  isFirmAddressData: {
    address:"",
    pincode:"",
    state:"",
    description:"",
    businessType:"",
    businessCategory:"",
  },
  setIsFirmAddressData: (info)=> set({isFirmAddressData:info}),

 

  logo:null,
  setLogo: (file) => set({logo:file}),

  
}));

export default useSidebarStore;