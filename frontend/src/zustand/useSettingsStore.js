import  create  from "zustand";

const useSettingsStore = create((set)=>({
isSettings : false,
setIsSettings: (value) => set({isSettings: value}),

termsAndConditions:"",
setTermsAndConditions: (data) => set({termsAndConditions:data}),

termsAndConditionsData:null,
setTermsAndConditionsData : (data) => set({termsAndConditionsData:data})


}))  

export default useSettingsStore