import { useState } from "react"
import useSettingsStore from "../../zustand/useSettingsStore"
import toast from "react-hot-toast"


const useUpdateSetting = () => {
     const [loading, setLoading] = useState(false)
     const {setTermsAndConditionsData,   setIsSettings, clearTermsAndConditions} = useSettingsStore()

     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

     const updateSetting = async(id, termsAndConditions) => {
        setLoading(true)
        try {
          clearTermsAndConditions()
          const res = await fetch(`${API_BASE_URL}/api/settings/updatesettings/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({termsAndConditions})
          });
          const data = await res.json()
          if(data.error){
            throw new Error(data.error)
          }
          console.log(data)
          setTermsAndConditionsData(data)
         toast.success("Settings Updated successfully!");
            setIsSettings(false)
        } catch(error){
           console.error("error updating settings", error)
           toast.error(error.message)
        } finally{
            setLoading(false)
        }
     }
     return{loading, updateSetting}
}

export default useUpdateSetting