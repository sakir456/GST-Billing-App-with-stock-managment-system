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

  savedFirmData: JSON.parse(localStorage.getItem('savedFirmData')) || null, // Initial load from localStorage

  setSavedFirmData: (data) => {
    set({ savedFirmData: data });
    localStorage.setItem('savedFirmData', JSON.stringify(data)); // Save to localStorage
  },

  clearSavedFirmData: () => {
    set({ savedFirmData: null });
    localStorage.removeItem('savedFirmData'); // Clear localStorage
  },

  
}));

export default useSidebarStore;