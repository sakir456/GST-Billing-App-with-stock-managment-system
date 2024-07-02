import { useState } from "react"
import toast from "react-hot-toast"
import useAuthStore from "../zustand/useAuthStore"


const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser} = useAuthStore()

  const login  = async (email, password) => {
    const success =  handleInputErrors({email,password})
    if(!success) return;
 

    setLoading(true)
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({ email, password })
        })
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        
        setAuthUser(data)


    } catch (error) {
        toast.error(error.message);
    } finally {
     setLoading(false)
    }
  } 

  return { loading, login }
}

export default useLogin

function handleInputErrors({email,password}) {
    if( !email || !password ){
        toast.error('please fill in all the Fields')
        return false;
    }

    
    if(password.length < 6) {
        toast.error("password must have 6 characters")
        return false
    }

    return true;
}