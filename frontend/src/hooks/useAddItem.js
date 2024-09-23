import { useState } from "react";
import toast from "react-hot-toast";
import useItemStore from "../zustand/useItemStore";

const useAddItem = () => {
  const { setIsAddingItem, setIsProducts, resetItemData } = useItemStore();
  const [data, setData] = useState();
  const [loading,setLoading] = useState(false)

  const addItem = async (formattedItemData) => {
    if (!formattedItemData.itemName) {
      toast.error("Name is required to save item");
      return;
    }
    setLoading(true)
    try {
      const res = await fetch("/api/item/additem", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedItemData)
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data)
      setData(data);
     toast.success("Item added successfully");
      setIsAddingItem(false);
      setIsProducts("products");
      resetItemData();

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false)
   }
  };

  return { addItem, data, loading };
};

export default useAddItem;
