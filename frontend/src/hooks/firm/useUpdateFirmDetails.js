import { useState } from "react"
import useSidebarStore from "../../zustand/useSidebarStore"
import toast from "react-hot-toast"


const useUpdateFirmDetails = () => {
  const [loading, setLoading] = useState(false)
  const {setSavedFirmData, setIsFirmForm,  setFirmInfo, clearFirmData} = useSidebarStore()
  
const updateFirmDetails = async(firmId, firmData) => {
    setLoading(true)
  try {
    clearFirmData()
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