import { useState } from 'react'
import useAuthStore from '../zustand/useAuthStore';
import toast from "react-hot-toast"
import useBankStore from '../zustand/useBankStore';
import useSettingsStore from '../zustand/useSettingsStore';
import useSidebarStore from '../zustand/useSidebarStore';

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthStore();
  const {clearBankData} = useBankStore()
  const {clearTermsAndConditions} = useSettingsStore()
  const {clearFirmData}  = useSidebarStore()

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const logout = async()=> {
    setLoading(true)
    try {
       const res = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        }); 
        const data = await res.json()
        if(data.error) {
            throw new Error(data.error)
        }
        setAuthUser(null)
        clearBankData()
        clearTermsAndConditions()
        clearFirmData()

    } catch (error) {
        toast.error(error.message);
  }  finally {
    setLoading(false)
  }
}

return{loading, logout}
}

export default useLogout;