import { useState, useEffect } from "react";
import toast from "react-hot-toast"

const useGetItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/item/getitems`,{
        method: "GET",
        credentials: "include", 
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error || "failed to fetch items");
      }
      setItems(data);
      console.log(data)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, loading, fetchItems };
};

export default useGetItems;
