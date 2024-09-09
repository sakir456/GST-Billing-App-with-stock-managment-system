import create from "zustand";

const useBankStore = create((set)=> ({
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


 





}))

export default useBankStore