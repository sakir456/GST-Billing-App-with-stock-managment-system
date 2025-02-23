import { useState } from "react"
import toast from "react-hot-toast"
import useSettingsStore from "../../zustand/useSettingsStore"


const useSaveSetting = () => {
     const [loading, setLoading] = useState(false)
     const {setTermsAndConditionsData,  setIsSettings, clearTermsAndConditions} = useSettingsStore()

     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const saveSetting = async(termsAndConditions) => {
        setLoading(true)
        try {
            clearTermsAndConditions()
            const res = await fetch(`${API_BASE_URL}/api/settings/savesettings`, {
                method: "POST",
                headers:{'Content-Type':'application/json'},
                credentials: "include",
                body: JSON.stringify({termsAndConditions}),
            });
            const data = await res.json()
            if (data.error){
                throw new Error(data.error)
            }
            console.log(data)
            setTermsAndConditionsData(data)
           toast.success("Settings saved successfully!");
            setIsSettings(false)
            
        } catch (error) {
            console.error("Error saving settings:", error);
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    }
     
 return {loading, saveSetting}   
     
}

export default useSaveSetting