import { useEffect, useState } from "react"
import toast from "react-hot-toast";


export const useGetParties = () => {
    const [loading,setLoading] = useState()
    const [parties, setParties] = useState([]);

    const fetchParties = async() => {
         setLoading(true)
         try {
            const res =  await fetch("/api/parties/getparties")
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