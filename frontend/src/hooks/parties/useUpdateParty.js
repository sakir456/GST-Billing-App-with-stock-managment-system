import { useState } from "react";
import toast from "react-hot-toast";
import usePartyStore from "../../zustand/usePartyStore";


const useUpdateParty = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()
    const {setIsParty, resetPartyData} = usePartyStore();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const updateParty = async(itemId, updatedPartyData) => {
    if (!updatedPartyData.partyName) {
        toast.error("Name is required to update Party");
        return;
      }
      setIsLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/api/parties/updateparty/${itemId}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body:JSON.stringify(updatedPartyData),
           })
           const data = await res.json();
           if (data.error) {
            throw new Error(data.error || "failed to update items");
          }
          setData(data)
          toast.success("Party Updated successfully");
          resetPartyData()
         setIsParty(false)
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false)
     }
  }

  return {updateParty,isLoading,data}
}


export default useUpdateParty