import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetPurchaseInvoices = () => {
  const [loading, setLoading] = useState(false);
  const [invoices, setInvoices] = useState([]);

  const fetchPurchaseInvoices = async (startDate, endDate) => {
    setLoading(true);
    try {
      const params = {};


       if (startDate) {
       params.startDate = startDate; // Add startDate to the params object
       }
     if (endDate) {
     params.endDate = endDate; // Add endDate to the params object
      }

    const query = new URLSearchParams(params).toString();

      const res = await fetch(`/api/purchaseinvoice/getinvoices?${query}`);
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