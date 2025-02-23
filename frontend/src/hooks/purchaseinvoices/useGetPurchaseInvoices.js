import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetPurchaseInvoices = () => {
  const [loading, setLoading] = useState(false);
  const [invoices, setInvoices] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchPurchaseInvoices = async (startDate, endDate) => {
    setLoading(true);
    try {
      const params = {};


       if (startDate) {
       params.startDate = startDate; 
       }
     if (endDate) {
     params.endDate = endDate; 
      }

    const query = new URLSearchParams(params).toString();

      const res = await fetch(`${API_BASE_URL}/api/purchaseinvoice/getinvoices?${query}`,{
        method: "GET",
        credentials: "include", 
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error || "Failed to fetch invoices");
      }

      setInvoices(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchaseInvoices();
  }, []);

  return { invoices, loading, fetchPurchaseInvoices };
};

export default useGetPurchaseInvoices