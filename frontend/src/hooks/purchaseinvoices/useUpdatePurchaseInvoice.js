import { useState } from "react";
import toast from "react-hot-toast";
import usePurchaseStore from "../../zustand/usePurchaseStore";


const useUpdatePurchaseInvoice = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
  const {setIsPurchaseForm} = usePurchaseStore()
  const updatePurchaseInvoice = async(invoiceId, updatedInvoiceData) => {
        if(!updatedInvoiceData.partyInfo.partyName){
          toast.error("Name is required to update item");
         return
        }
        setIsLoading(true)
        try {
          const res = await fetch(`/api/purchaseinvoice/updateinvoice/${invoiceId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',},
            body:JSON.stringify(updatedInvoiceData),
          })
          const data = res.json();
          if (data.error) {
            throw new Error(data.error || "failed to update invoice");
          }
          console.log(data)
          setData(data)
          toast.success("Invoice updated Successfully")
          setIsPurchaseForm(false)

        } catch (error) {
          toast.error(error.message);
        }finally {
          setIsLoading(false)
       }
  }
  return {updatePurchaseInvoice,isLoading,data}
}

export default useUpdatePurchaseInvoice