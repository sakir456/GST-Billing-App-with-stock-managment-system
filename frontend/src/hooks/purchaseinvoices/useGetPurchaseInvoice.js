
import { useState } from "react";
import toast from "react-hot-toast";


const useGetPurchaseInvoice = () => {
    const [loading, setLoading] = useState(false)
    const [invoice, setInvoice] =useState({invoice:null, partyDetails: null, itemDetails: null})
    

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchPurchaseInvoice = async(invoiceId) => {


        setLoading(true)
        try {
            const res = await fetch(`${API_BASE_URL}/api/purchaseinvoice/getinvoice/${invoiceId}`,{
                method: "GET",
                credentials: "include", 
              })
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
