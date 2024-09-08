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

  displayedLogo:"/shop.png" ,
  setDisplayedLogo:(file) => set({displayedLogo:file}),

  savedFirmData:  null, 

  setSavedFirmData: (data) => set({ savedFirmData: data }),

  firmInfo: null,
  setFirmInfo : (data) => set({ firmInfo: data }),
   
  

  

  
}));

export default useSidebarStore;