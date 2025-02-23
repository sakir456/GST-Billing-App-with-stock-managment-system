import { useState } from "react"
import toast from "react-hot-toast"

const useDeletePurchaseInvoice = () => {
    const [isLoading, setIsLoading]  = useState(false)

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const deletePurchaseInvoice =  async(invoiceId) => {
    setIsLoading(true)
    try {
        const res = await fetch(`${API_BASE_URL}/api/purchaseinvoice/deleteinvoice/${invoiceId}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: "include",
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error || "failed to delete invoice");
          }
          toast.success("Item deleted successfully")
          return data
    } catch (error) {
        toast.error(error.message);
         throw error;
       }finally {
        setIsLoading(false);
      }

  }
  return {deletePurchaseInvoice,isLoading}
}

export default useDeletePurchaseInvoice