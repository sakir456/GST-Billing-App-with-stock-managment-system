import { useState } from "react"
import toast from "react-hot-toast"


const useAddInvoice = () => {
    const[loading, setLoading] = useState(false)
    const [data,setData] = useState()
 const addInvoice = async(invoiceData) => {
      if(!invoiceData.partyInfo.partyName){
       toast.error("Party Name is required to create invoice")
       return
      }
      setLoading(true)
      try {
       const res =  await fetch("/api/invoice/createinvoice", {
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(invoiceData)
       });
       const data = await res.json();
       if(data.error){
        throw new Error(data.error)
       }
       setData(data)
       console.log(data)
       toast.success("Invoice created Successfully")
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false)
      }
    }
    return {addInvoice,data,loading}
}

export default useAddInvoice