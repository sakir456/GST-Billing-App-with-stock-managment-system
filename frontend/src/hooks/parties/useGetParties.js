import { useEffect, useState } from "react"
import toast from "react-hot-toast";


export const useGetParties = () => {
    const [loading,setLoading] = useState()
    const [parties, setParties] = useState([]);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchParties = async() => {
         setLoading(true)
         try {
            const res =  await fetch(`${API_BASE_URL}/api/parties/getparties`,{
               method: "GET",
               credentials: "include", 
             })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error || "failed to fetch Parties");
              }
              setParties(data);
              console.log(data)
         } catch (error) {
            toast.error(error.message);
         }finally {
            setLoading(false);
          }
    }

    useEffect(() => {
        fetchParties();
      }, []);
    
      return { parties, loading, fetchParties };
}

export default useGetParties;