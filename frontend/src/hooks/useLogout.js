import { useState } from 'react'
import useAuthStore from '../zustand/useAuthStore';
import toast from "react-hot-toast"

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthStore();

  const logout = async()=> {
    setLoading(true)
    try {
       const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        }); 
        const data = await res.json()
        if(data.error) {
            throw new Error(data.error)
        }
        setAuthUser(null)
    } catch (error) {
        toast.error(error.message);
  }  finally {
    setLoading(false)
  }
}

return{loading, logout}
}

export default useLogout;