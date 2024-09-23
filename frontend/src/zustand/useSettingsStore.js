import  create  from "zustand";

const useSettingsStore = create((set)=>({
isSettings : false,
setIsSettings: (value) => set({isSettings: value}),

termsAndConditions:"",
setTermsAndConditions: (data) => set({termsAndConditions:data})


}))  

export default useSettingsStore