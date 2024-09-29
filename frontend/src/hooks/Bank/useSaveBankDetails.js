import { useState } from "react";
import useBankStore from "../../zustand/useBankStore";
import toast from "react-hot-toast";


const useSaveBankDetails = () => {
    const [loading, setLoading] = useState(false);
    const {setSavedBankDetails,setIsBankForm,  clearBankData } = useBankStore()
    

    const saveBankdetails = async(BankData) => {
        if(!BankData.bankName ) {
            toast.error ("Bank Name is required to Save BankDetails")
            return;
        }
        setLoading(true)
        try {
            clearBankData()
           const res = await fetch("/api/bank/savebankdetails", {
            method:"POST",
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(BankData)
           }) 
           const data = await res.json();
           
        if (data.error) {
            throw new Error(data.error);
          }
          
          console.log(data)
          setSavedBankDetails(data)
          toast.success("Bank details Saved Successfully");
          setIsBankForm(false)

        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }
    return {saveBankdetails, loading}
}

export default useSaveBankDetails