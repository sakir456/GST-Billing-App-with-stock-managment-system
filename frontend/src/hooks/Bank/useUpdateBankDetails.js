import { useState } from "react"
import toast from "react-hot-toast"
import useBankStore from "../../zustand/useBankStore";


const useUpdateBankDetails = () => {
     const [loading,setLoading] = useState(false);
     const {setSavedBankDetails, setBankData, setIsBankForm} = useBankStore()
    const updateBankDetails = async(bankId, updatedBankData) => {
        if(!updatedBankData.bankName ) {
            toast.error ("Bank Name is required to Update BankDetails")
            return;
        }
        setLoading(true)
        try {
            const res = await fetch(`api/bank/updatebankdetails/${bankId}`, {
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(updatedBankData)
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            console.log(data)
            setSavedBankDetails(data)
            const bankDetail  = {...data}
          setBankData({
           bankName: bankDetail.bankName,
          accountNO:bankDetail.accountNO,
          bankIfsc:bankDetail.bankIfsc,
           address:bankDetail.address
          })
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