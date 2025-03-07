import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetInvoices = () => {
  const [loading, setLoading] = useState(false);
  const [invoices, setInvoices] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  const fetchInvoices = async (startDate, endDate) => {
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

      const res = await fetch(`${API_BASE_URL}/api/invoice/getinvoices?${query}`,{
        method: "GET",
        credentials: "include", 
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error || "Failed to fetch invoices");
      }
     console.log(data)
      setInvoices(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  return { invoices, loading, fetchInvoices };
};

export default useGetInvoices;














// import  { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';

// const useGetInvoices = () => {
//     const [loading,setLoading] = useState(false)
//     const [invoices, setInvoices] = useState([]);
    

//   const fetchInvoices = async() => {
//     setLoading(true)
//     try {
//         const res =  await fetch("/api/invoice/getinvoices")
//         const data = await res.json()
//         if (data.error) {
//             throw new Error(data.error || "failed to fetch Invoices");
//           }
//           setInvoices(data)
//           console.log(data)

//     } catch (error) {
//         toast.error(error.message);
//     }finally {
//         setLoading(false);
//       }
    
//   }
//   useEffect(() => {
//     fetchInvoices();
//   }, []);

//   return {invoices, loading, fetchInvoices}
// }

// export default useGetInvoices