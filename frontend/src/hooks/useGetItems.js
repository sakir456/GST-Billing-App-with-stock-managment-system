import { useState, useEffect } from "react";
import toast from "react-hot-toast"

const useGetItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/item/getitems");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error || "failed to fetch items");
      }
      setItems(data);
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
