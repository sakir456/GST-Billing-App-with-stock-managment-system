import { useState } from "react"
import toast from "react-hot-toast"
import useAuthStore from "../zustand/useAuthStore"



const useSignup = () => {
    const [loading,setLoading] = useState(false)
    const {setAuthUser} = useAuthStore();


    const signup = async({fullName,userName,password, confirmpassword,email}) => {
    const success = handleInputErrors({fullName,userName,password, confirmpassword,email})
    if(!success) return;
    setLoading(true)
     try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({fullName,userName,password, confirmpassword,email})
        })
        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        console.log(data)
        setAuthUser(data)
     
     } catch (error) {
        toast.error(error.message)
     } finally {
        setLoading(false)
     }
    }
    return {loading,signup};
}

export default useSignup

function handleInputErrors({fullName,userName,password, confirmpassword,email}) {
    if(!fullName || !userName || !password || !confirmpassword || !email) {
        toast.error('please fill in all the fields')
        return false
    }
    if(password!==confirmpassword) {
        toast.error('password and confirm password should be same')
        return false
    }
    if(password.length < 6){
        toast.error('password must have  atleast 6 characters  ')
        return false
    }

    return true;
}