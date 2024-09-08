import { useState } from "react"
import useSidebarStore from "../../zustand/useSidebarStore"
import toast from "react-hot-toast"


const useUpdateFirmDetails = () => {
  const [loading, setLoading] = useState(false)
  const {setSavedFirmData, setIsFirmForm,setIsFirmPersonalData,setIsFirmAddressData,  setFirmInfo} = useSidebarStore()
  
const updateFirmDetails = async(firmId, firmData) => {
    setLoading(true)
  try {
    
    const res = await fetch(`/api/firm/updatefirmdetails/${firmId}`,{
        method:"PUT",
        body:firmData
      })
      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }
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
      console.log(data)
     toast.success("Firm updated successfully")
     setIsFirmForm(false)
    
  } catch (error) {
    toast.error(error.message)
  }finally{
    setLoading(false)
  }
}  
return {loading,updateFirmDetails}

  
}

export default useUpdateFirmDetails