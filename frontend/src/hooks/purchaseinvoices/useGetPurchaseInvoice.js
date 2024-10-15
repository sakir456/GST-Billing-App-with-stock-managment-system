
import { useState } from "react";
import toast from "react-hot-toast";


const useGetPurchaseInvoice = () => {
    const [loading, setLoading] = useState(false)
    const [invoice, setInvoice] =useState({invoice:null, partyDetails: null, itemDetails: null})
    

    const fetchPurchaseInvoice = async(invoiceId) => {
        setLoading(true)
        try {
            const res = await fetch(`/api/purchaseinvoice/getinvoice/${invoiceId}`,)
            const data = await res.json()
            if(data.error){
                throw new Error(data.error || "Failed to fetch Invoice")
            }
            setInvoice(data)
            console.log(data)
            // setSavedInvoiceData(data)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    
    return {fetchPurchaseInvoice, invoice,loading}
  
}

export default useGetPurchaseInvoice
