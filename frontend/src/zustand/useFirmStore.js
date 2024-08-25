import create from "zustand";

const useFirmStore = create((set)=> ({

firmPersonalData: {
   bussinessName: "",
    GSTIN: "",
    phoneNo: "",
   Email: "",
  },
 setFirmPersonalData: (data) => set((state) => ({ firmPersonalData: { ...state.firmPersonalData, ...data } })), 





}))

export default useFirmStore