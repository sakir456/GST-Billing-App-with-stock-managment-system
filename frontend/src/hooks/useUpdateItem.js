import { useState } from "react"
import toast from "react-hot-toast";
import useItemStore from "../zustand/useItemStore";


const useUpdateItem = () => {
    const { setIsAddingItem, setIsProducts, resetItemData } = useItemStore();
   const [isLoading, setIsLoading] = useState(false)
   const [data, setData] = useState()

   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  
   const updateItem = async(itemId, updatedItemData) => {

    if (!updatedItemData.itemName) {
        toast.error("Name is required to update item");
        return;
      }
    setIsLoading(true);
    try {
       const res = await fetch(`${API_BASE_URL}/api/item/updateitem/${itemId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
        body:JSON.stringify(updatedItemData),
       })
       const data = await res.json();

       if (data.error) {
        throw new Error(data.error || "failed to update items");
      }
      console.log(data)
      setData(data)
      setIsAddingItem(false);
      setIsProducts("products");
      toast.success("Item Updated successfully");
      resetItemData()

      
     
} catch (error) {
       toast.error(error.message);
    } finally {
        setIsLoading(false)
     }
   }
  return {updateItem,isLoading,data}
}

export default useUpdateItem