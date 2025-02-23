import { useState } from "react"
import toast from "react-hot-toast"
import useBankStore from "../../zustand/useBankStore";


const useUpdateBankDetails = () => {
     const [loading,setLoading] = useState(false);
     const {setSavedBankDetails, setIsBankForm,  clearBankData} = useBankStore()

     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const updateBankDetails = async(bankId, updatedBankData) => {
        if(!updatedBankData.bankName ) {
            toast.error ("Bank Name is required to Update BankDetails")
            return;
        }
        setLoading(true)
        try {
            clearBankData()
            const res = await fetch(`${API_BASE_URL}/api/bank/updatebankdetails/${bankId}`, {
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                credentials: "include",
                body:JSON.stringify(updatedBankData)
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            console.log(data)
            setSavedBankDetails(data)
           
          toast.success("Bank details updated  Successfully");
          setIsBankForm(false)

        } catch (error) {
            toast.error(error.message); 
        }finally{
            setLoading(false)
        }
   }
  return {updateBankDetails,loading}
}

export default useUpdateBankDetails