import  create  from "zustand";

const usePartyStore = create((set) => ({
     isParty:false,
     setIsParty: (value) => set({isParty: value}),

     partyData : {
          partyName:"",
           GSTIN:"",
           billingAddress:"",
           shippingAddress:"",
            openingBalance:"",
            asOfDate:""
     },
     setPartyData: (data) => set((state) => ({partyData: {...state.partyData, ...data} })),
     resetPartyData: () => set({
          partyData : {
          partyName:"",
           GSTIN:"",
           billingAddress:"",
           shippingAddress:"",
            openingBalance:"",
            asOfDate:""
     },
     }),
     isUpdatePartyForm: false,
     setIsUpdatePartyForm: (value) => set({isUpdatePartyForm: value})
 }))

export default usePartyStore;