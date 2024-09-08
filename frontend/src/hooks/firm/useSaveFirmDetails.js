import { useState } from "react";
import toast from "react-hot-toast";
import useSidebarStore from "../../zustand/useSidebarStore";

const useSaveFirmDetails = () => {
  const [loading, setLoading] = useState(false);
  const { setSavedFirmData, setIsFirmPersonalData, setIsFirmAddressData,  setFirmInfo } = useSidebarStore();
  const { setIsFirmForm } = useSidebarStore();

  const saveFirmDetails = async (firmData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/firm/savefirmdetails", {
        method: "POST",
        body: firmData,
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Update Zustand store with the API response data
      const firm = data.firm;

      setSavedFirmData(firm); // Save the whole firm data
      setFirmInfo(firm)

      // Update individual fields
      setIsFirmPersonalData({
        businessName: firm.businessName,
        gstin: firm.gstin,
        phoneNo: firm.phoneNo,
        email: firm.email,
      });

      setIsFirmAddressData({
        address: firm.address,
        pincode: firm.pincode,
        state: firm.state,
        description: firm.description,
        businessType: firm.businessType,
        businessCategory: firm.businessCategory,
      });

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
