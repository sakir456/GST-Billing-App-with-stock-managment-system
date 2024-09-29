import create from "zustand";
import { persist } from "zustand/middleware";

const useBankStore = create(
    persist(
        (set)=> ({
            isBankForm: false,
            setIsBankForm: (value) => set({isBankForm: value}),
        
        bankData:{
            bankName: "",
            accountNO:"",
            bankIfsc:"",
            address:""
        },
        setBankData : (info) => set({bankData:info}),
        
        
        
        savedBankDetails : null,
        setSavedBankDetails : (data) => set({savedBankDetails:data}),
        
        clearBankData: () => set({
            isBankForm: false,
            bankData: {
              bankName: "",
              accountNO: "",
              bankIfsc: "",
              address: "",
            },
            savedBankDetails: null,
          }),
        }),
       {
        name:"bank-store",
        getStorage: () => localStorage
       }  

    )
    )

export default useBankStore