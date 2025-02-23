import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteItem = () => {
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const deleteItem = async (itemId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/item/deleteitem/${itemId}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error || "failed to delete items");
      }
      toast.success("Item deleted successfully");
      return data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteItem, isLoading };
};

export default useDeleteItem;
