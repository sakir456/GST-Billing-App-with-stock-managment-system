
import { useState } from "react";
import toast from "react-hot-toast";


const useGetInvoice = () => {
    const [loading, setLoading] = useState(false)
    const [invoice, setInvoice] =useState({invoice:null, partyDetails: null, itemDetails: null})
    

    const fetchInvoice = async(invoiceId) => {
        setLoading(true)
        try {
            const res = await fetch(`/api/invoice/getinvoice/${invoiceId}`,)
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
