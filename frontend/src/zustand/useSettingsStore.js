import  create  from "zustand";
import { persist }  from "zustand/middleware";

const useSettingsStore = create(
    persist((set)=>({
        isSettings : false,
        setIsSettings: (value) => set({isSettings: value}),
        
        termsAndConditions:"",
        setTermsAndConditions: (data) => set({termsAndConditions:data}),
        
        termsAndConditionsData:null,
        setTermsAndConditionsData : (data) => set({termsAndConditionsData:data}),

        clearTermsAndConditions : () => set({
             termsAndConditions:"",
             termsAndConditionsData:null,
        }),
        
        
        }),
        {
        name:"setting-store",
        getStorage: () => localStorage
        }
    )
    )  

export default useSettingsStore