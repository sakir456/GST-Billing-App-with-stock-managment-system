
import FirmLogo from "./FirmLogo";
import { RxCross1 } from "react-icons/rx";
import FirmPersonalDetails from "./FirmPersonalDetails";
import FirmAddress from "./FirmAddress";
import useSidebarStore from "../../zustand/useSidebarStore";
import useSaveFirmDetails from "../../hooks/firm/useSaveFirmDetails";
import LoadingSpinnerNew from "../../components/LoadingSpinnerNew";
import useUpdateFirmDetails from "../../hooks/firm/useUpdateFirmDetails";
import { useEffect } from "react";



const FirmInfoForm = () => {
  const {isFirmPersonalData, isFirmAddressData,logo,    setIsFirmForm, firmInfo, setIsFirmPersonalData, setIsFirmAddressData} = useSidebarStore();
  const {saveFirmDetails, loading} = useSaveFirmDetails()
  const {updateFirmDetails, loading:isLoading} = useUpdateFirmDetails()

 

  const handleSubmit = async(e) => {
    e.preventDefault()
    const firmData = new FormData();

    firmData.append("businessName", isFirmPersonalData.businessName);
    firmData.append("gstin", isFirmPersonalData.gstin);
    firmData.append("phoneNo", isFirmPersonalData.phoneNo);
    firmData.append("email", isFirmPersonalData.email);
    firmData.append("address", isFirmAddressData.address);
    firmData.append("pincode", isFirmAddressData.pincode);
    firmData.append("state", isFirmAddressData.state);
    firmData.append("description", isFirmAddressData.description);
    firmData.append("businessType", isFirmAddressData.businessType);
    firmData.append("businessCategory", isFirmAddressData.businessCategory);
    
    
    if (logo) {
      firmData.append("logo", logo);
    }

     if(firmInfo) {
      
      

       await updateFirmDetails(firmInfo._id,firmData);
       
  }else{
    await saveFirmDetails(firmData);
    
 }
  }
  const handlecrossbtn = ()=> {
    setIsFirmForm(false)
  }


  useEffect(() => {
    if (firmInfo) {
      // Set personal data
      setIsFirmPersonalData({
        businessName: firmInfo.businessName,
        gstin: firmInfo.gstin,
        phoneNo: firmInfo.phoneNo,
        email: firmInfo.email,
      });

      // Set address data
      setIsFirmAddressData({
        address: firmInfo.address,
        pincode: firmInfo.pincode,
        state: firmInfo.state,
        description: firmInfo.description,
        businessType: firmInfo.businessType,
        businessCategory: firmInfo.businessCategory,
      });
    }
  }, [firmInfo, setIsFirmPersonalData, setIsFirmAddressData]);
  
  const isSaveDisabled = !isFirmPersonalData.businessName || isFirmPersonalData.businessName.trim()==="";
  return (
    <div>
    {loading || isLoading ? (
       <LoadingSpinnerNew/>
    ) : (
      <form className="px-10 py-5 " onSubmit={handleSubmit}>
      
    <div className="flex justify-between text-lg font-medium">
    <div>{firmInfo ? "Edit Firm Details" : "Enter Firm Details"}</div>
    <RxCross1 className="mr-3 cursor-pointer"  onClick={handlecrossbtn} />
    </div>
     <div className="flex items-center gap-28 ">
      <FirmLogo/>
      <FirmPersonalDetails/>
      </div>
      <FirmAddress/>
      <div  className=" flex gap-2 justify-end">
      <button className="mt-8 items-center px-4 py-2 text-customLightGreen rounded-md 
       border border-customLightGreen hover:bg-customGreen hover:text-white " onClick={handlecrossbtn}>Cancel</button>
      <button className={`mt-8 items-center px-4 py-2 text-white rounded-md 
      ${isSaveDisabled ? "bg-gray-400" : "bg-customLightGreen"}`} 
      disabled={isSaveDisabled} >{firmInfo ? "Update" : "Save"}</button>
      
      </div>
      </form>
    )}
    
      </div>
   
  );
};

export default FirmInfoForm