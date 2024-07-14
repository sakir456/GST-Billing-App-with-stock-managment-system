import { useEffect, useState } from "react"
import toast from "react-hot-toast";


const useGetItems = () => {
    const [items, setItems]  = useState([]);
    const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchItems = async() => {
        try {
            const res = await fetch("/api/item/getitems");
            const data = await res.json();
             
            if (data.error) {
                throw new Error(data.error || "failed to fetch items");
              }
            setItems(data)
            console.log(data)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }
    fetchItems();
  },[]);

  return{items,loading}
}

export default useGetItems