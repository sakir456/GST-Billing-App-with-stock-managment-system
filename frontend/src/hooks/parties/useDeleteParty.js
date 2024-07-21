import { useState } from "react";
import toast from "react-hot-toast";


const useDeleteParty = () => {
    const [isLoading, setIsLoading] = useState(false);
 const deleteParty = async(partyId) => {
    setIsLoading(true);
    try {
        const response = await fetch(`/api/parties/deleteparty/${partyId}`,{
            method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        });
        const data = await response.json();
        if (data.error) {
            throw new Error(data.error || "failed to fetch Party");
          }
          toast.success("Party deleted successfully")
          return data;
    } catch (error) {
        toast.error(error.message);
      throw error;
    }finally {
        setIsLoading(false);
      }
 }

 return { deleteParty, isLoading };
}

export default useDeleteParty