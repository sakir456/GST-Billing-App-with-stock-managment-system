import { useState } from "react";
import toast from "react-hot-toast";
import usePartyStore from "../../zustand/usePartyStore";

const useAddParty = () => {
    const [loading,setLoading] = useState(false);
    const [data, setData] = useState();
    const {setIsParty, resetPartyData} = usePartyStore();

 const addParty = async(formattedPartyData) => {
     if(!formattedPartyData.partyName){
        toast.error("Name is required to save Party")
     }
     setLoading(true)
     try {
        const res = await fetch("/api/parties/addparty", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedPartyData)
        })
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
          }
          console.log(data)
          setData(data);
          toast.success("Party added successfully");
          resetPartyData()
         setIsParty(false)
     } catch (error) {
        toast.error(error.message);
     }finally {
        setLoading(false)
     }
    }
    return { addParty, data, loading };
}

export default useAddParty