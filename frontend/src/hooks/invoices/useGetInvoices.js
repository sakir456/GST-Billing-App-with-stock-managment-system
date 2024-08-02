import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetInvoices = () => {
    const [loading,setLoading] = useState(false)
    const [invoices, setInvoices] = useState([]);
    

  const fetchInvoices = async() => {
    setLoading(true)
    try {
        const res =  await fetch("/api/invoice/getinvoices")
        const data = await res.json()
        if (data.error) {
            throw new Error(data.error || "failed to fetch Invoices");
          }
          setInvoices(data)
          console.log(data)

    } catch (error) {
        toast.error(error.message);
    }finally {
        setLoading(false);
      }
    
  }
  useEffect(() => {
    fetchInvoices();
  }, []);

  return {invoices, loading, fetchInvoices}
}

export default useGetInvoices