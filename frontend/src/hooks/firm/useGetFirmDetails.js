import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSidebarStore from "../../zustand/useSidebarStore";

const useGetFirmDetails = () => {
  const [loading, setLoading] = useState(false);
  const { savedFirmData, setSavedFirmData } = useSidebarStore();

  const getFirmDetails = async (firmId) => {
    if (!firmId) {
      toast.error("Firm ID is required to fetch details");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/firm/getfirmdetails/${firmId}`, {
        method: "GET",
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error || "Failed to fetch Firm Details");
      }
      setSavedFirmData(data); // Save firm details in Zustand
      localStorage.setItem("savedFirmData", JSON.stringify(data)); // Save to localStorage
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load data from localStorage if available
    const cachedFirmData = JSON.parse(localStorage.getItem("savedFirmData"));
    if (cachedFirmData) {
      setSavedFirmData(cachedFirmData); // Initialize Zustand with cached data
    }

    // Ensure savedFirmData exists and contains an _id before calling getFirmDetails
    if (savedFirmData?._id) {
      getFirmDetails(savedFirmData._id);
    }
  }, [savedFirmData?._id, setSavedFirmData]);

  return { savedFirmData, loading, getFirmDetails };
};

export default useGetFirmDetails;
