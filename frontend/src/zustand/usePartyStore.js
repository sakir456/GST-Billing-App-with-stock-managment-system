import  create  from "zustand";

const usePartyStore = create((set) => ({
     isParty:false,
     setIsParty: (value) => set({isParty: value})
}))

export default usePartyStore;