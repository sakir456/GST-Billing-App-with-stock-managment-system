import create from 'zustand';
import { persist } from 'zustand/middleware';

const useSidebarStore = create(
  persist((set) => ({
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

    clearFirmData: () => {
      set({
        isFirmPersonalData: {
          businessName: "",
          gstin: "",
          phoneNo: "",
          email: "",
        },
        isFirmAddressData: {
          address: "",
          pincode: "",
          state: "",
          description: "",
          businessType: "",
          businessCategory: "",
        },
        firmInfo: null,
        displayedLogo:"/shop.png",
        logo:null,
      });
      localStorage.removeItem('firm-store');
    },
  
  }),
     
  {
    name: "firm-store",
    getStorage: () => localStorage
  }
));

export default useSidebarStore;









// import create from 'zustand';

// const useSidebarStore = create((set) => ({
//   expandedItem: null,
//   setExpandedItem: (item) => set({ expandedItem: item }),
  
//   isFirmForm: false,
//   setIsFirmForm: (value) => set({isFirmForm: value}),

//   isFirmPersonalData: {
//    businessName:"",
//    gstin:"",
//    phoneNo: "",
//    email:"",
//   },
//   setIsFirmPersonalData: (info)=> set({isFirmPersonalData:info}),

//   isFirmAddressData: {
//     address:"",
//     pincode:"",
//     state:"",
//     description:"",
//     businessType:"",
//     businessCategory:"",
//   },
//   setIsFirmAddressData: (info)=> set({isFirmAddressData:info}),

 

//   logo:null,
//   setLogo: (file) => set({logo:file}),

//   displayedLogo:"/shop.png" ,
//   setDisplayedLogo:(file) => set({displayedLogo:file}),

//   savedFirmData:  null, 

//   setSavedFirmData: (data) => set({ savedFirmData: data }),

//   firmInfo: null,
//   setFirmInfo : (data) => set({ firmInfo: data }),

// }));

// export default useSidebarStore;