
import { useState } from "react";
import toast from "react-hot-toast";


const useGetInvoice = () => {
    const [loading, setLoading] = useState(false)
    const [invoice, setInvoice] =useState({invoice:null, partyDetails: null, itemDetails: null})
    
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchInvoice = async(invoiceId) => {
        setLoading(true)
        try {
            const res = await fetch(`${API_BASE_URL}/api/invoice/getinvoice/${invoiceId}`,{
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

    
    return {fetchInvoice, invoice,loading}
  
}

export default useGetInvoice
