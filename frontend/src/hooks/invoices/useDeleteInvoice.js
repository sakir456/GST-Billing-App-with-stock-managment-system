import { useState } from "react"
import toast from "react-hot-toast"

const useDeleteInvoice = () => {
    const [loading, setIsLoading]  = useState(false)
  const deleteInvoice =  async(invoiceId) => {
    setIsLoading(true)
    try {
        const res = await fetch(`/api/invoice/deleteinvoice/${invoiceId}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
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
  return {deleteInvoice,loading}
}

export default useDeleteInvoice