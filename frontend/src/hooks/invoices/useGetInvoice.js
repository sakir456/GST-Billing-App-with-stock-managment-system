import { useEffect, useState } from "react"
import useSaleStore from "../../zustand/useSaleStore";
import toast from "react-hot-toast";


const useGetInvoice = () => {
    const [loading, setLoading] = useState(false)
    const [invoice, setInvoice] =useState({invoice:null, partyDetails: null, itemDetails: null})
     const { invoiceId } = useSaleStore();

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

    useEffect(() => {
        if (invoiceId) {
          console.log("Fetching invoice with ID:", invoiceId);  // Debug log
          fetchInvoice(invoiceId);
        } else {
          console.log("No invoiceId available");  // Debug log
        }
      }, []);
    return {fetchInvoice, invoice,loading}
  
}

export default useGetInvoice
