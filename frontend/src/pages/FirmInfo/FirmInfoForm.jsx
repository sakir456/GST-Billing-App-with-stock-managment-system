
import FirmLogo from "./FirmLogo";
import { RxCross1 } from "react-icons/rx";
import FirmPersonalDetails from "./FirmPersonalDetails";
import FirmAddress from "./FirmAddress";
import useSidebarStore from "../../zustand/useSidebarStore";
import useSaveFirmDetails from "../../hooks/firm/useSaveFirmDetails";


const FirmInfoForm = () => {
  const {isFirmPersonalData, isFirmAddressData,logo} = useSidebarStore();
  const {saveFirmDetails} = useSaveFirmDetails()
 

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
    await saveFirmDetails(firmData)
  
    

  }
  
  return (
    
    <form className="px-10 py-5 " onSubmit={handleSubmit}>
    <div className="flex justify-between text-lg font-medium">
    <div>Enter Firm Details</div>
    <RxCross1 className="mr-3 cursor-pointer"  />
    </div>
     <div className="flex items-center gap-28 ">
      <FirmLogo/>
      <FirmPersonalDetails/>
      </div>
      <FirmAddress/>
      <div  className=" flex justify-end">
      <button className="mt-8 items-center px-4 py-2 text-white rounded-md bg-customLightGreen">Save</button>
      </div>
      </form>
   
  );
};

export default FirmInfoForm