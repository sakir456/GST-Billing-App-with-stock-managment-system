import { useState } from "react";
import toast from "react-hot-toast";
import useSidebarStore from "../../zustand/useSidebarStore";

const useSaveFirmDetails = () => {
  const [loading, setLoading] = useState(false);
  const { setSavedFirmData,   setFirmInfo, setIsFirmForm, clearFirmData,   } = useSidebarStore();

  const saveFirmDetails = async (firmData) => {
    setLoading(true);
    try {
        clearFirmData()
      const res = await fetch("/api/firm/savefirmdetails", {
        method: "POST",
        body: firmData,
      });
      const data = await res.json();
      console.log(data)

      if (data.error) {
        throw new Error(data.error);
      }

      
      const firm = data.firm;

      setSavedFirmData(firm); 
      setFirmInfo(firm)

     
   

    //   setLogo(firm.logo || "shop.png"); // Set the logo URL

      toast.success("Firm Saved Successfully");
      setIsFirmForm(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { saveFirmDetails, loading };
};

export default useSaveFirmDetails;
