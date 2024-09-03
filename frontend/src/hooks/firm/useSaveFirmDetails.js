import { useState } from "react"
import toast from "react-hot-toast"
import useSidebarStore from "../../zustand/useSidebarStore"


const useSaveFirmDetails = () => {
    const[loading, setLoading] = useState(false)
    const [data,setData] = useState()
    const {setIsFirmForm} = useSidebarStore()

    const saveFirmDetails = async(firmData) => {
        setLoading(true)
        try {
           const res  = await fetch("/api/firm/savefirmdetails", {
            method:"POST",
            body: firmData,
           });
           const data = await res.json();
           if(data.error){
            throw new Error(data.error)
           }
           setData(data)
           console.log(data)
           toast.success("Firm Saved Successfully")
           setIsFirmForm(false)

        } catch (error) {
            toast.error(error.message)
        }
    }
    
    return {saveFirmDetails ,data,loading}
}

export default useSaveFirmDetails