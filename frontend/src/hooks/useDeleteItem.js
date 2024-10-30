import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteItem = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteItem = async (itemId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/item/deleteitem/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
