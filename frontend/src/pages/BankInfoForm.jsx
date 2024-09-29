import { RxCross1 } from "react-icons/rx"
import useBankStore from "../zustand/useBankStore"
import useSaveBankDetails from "../hooks/Bank/useSaveBankDetails"
import useUpdateBankDetails from "../hooks/Bank/useUpdateBankDetails"
import LoadingSpinnerNew from "../components/LoadingSpinnerNew"
import { useEffect } from "react"


const BankInfoForm = () => {
  const {bankData, setBankData,setIsBankForm, savedBankDetails }  = useBankStore()
  const {saveBankdetails, loading} = useSaveBankDetails()
  const {updateBankDetails, loading:isLoading} = useUpdateBankDetails()

  const handleInputChange = (field, value)=> {

    if (field === "accountNO") {
      value = value.replace(/[^0-9,]/g, ''); // Remove non-numeric characters
    }
   setBankData({...bankData, [field]: value})
  }

  const handleSubmit = async(e)=> {
    e.preventDefault()
    const BankData = {...bankData}

    if(savedBankDetails) {
      await updateBankDetails(savedBankDetails._id, BankData)
    } else{
      await saveBankdetails(BankData)
    }
   }

  const handleCross = ()=> {
    setIsBankForm(false)
  }

  useEffect(()=> {

    if(savedBankDetails) {
      setBankData({
       bankName: savedBankDetails.bankName,
       accountNO:savedBankDetails.accountNO,
       bankIfsc:savedBankDetails.bankIfsc,
        address:savedBankDetails.address
       })
    }
    
  },[savedBankDetails,setBankData ])

  const isSaveDisabled = !bankData.bankName || bankData.bankName.trim()==="";
  return (
    <div>
    {loading || isLoading ? (
      <LoadingSpinnerNew/>
    ) : (
      
   
    <div>
        <form className="px-10 py-5" onSubmit={handleSubmit}>
        <div className="flex justify-between text-lg font-medium ">
        <div className="text-customGreen">{savedBankDetails ? "Edit Bank Details" : "Enter Bank Details "}</div>
        <RxCross1 className="mr-3 cursor-pointer" onClick={handleCross}  />
        </div>
         
         <div className=" mt-5 flex  gap-8 ">
        <div className="mt-6 relative ">
        <input
        placeholder=" Bank Name"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        value={bankData.bankName}
        onChange={(e) => handleInputChange("bankName", e.target.value)}
        />
        {bankData.bankName && (
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Bank Name</label>
       )}
        </div>
        

        <div className="mt-6 relative ">
        <input
        placeholder="Account No."
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        value={bankData.accountNO}
        onChange={(e) => handleInputChange("accountNO", e.target.value)}
        />
        {bankData.accountNO && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Account No.</label>
        )}
      </div>
        </div>
         
         <div className=" mt-5 flex gap-8">
        <div className="mt-6 relative ">
        <input
        placeholder=" Bank Ifsc"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        value={bankData.bankIfsc}
        onChange={(e) => handleInputChange("bankIfsc", e.target.value)}
        />
        {bankData.bankIfsc && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Bank Ifsc</label>
        )}
      </div>

        <div className="mt-6 relative ">
        <input
        placeholder="Address"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        value={bankData.address}
        onChange={(e) => handleInputChange("address", e.target.value)}
        />
        {bankData.address && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Address</label>
        )}
      </div>
        </div>

        <div  className=" flex gap-3 justify-end">
        <button className="mt-8 items-center px-4 py-2 text-customLightGreen rounded-md 
       border border-customLightGreen hover:bg-customGreen hover:text-white " onClick={handleCross}>Cancel</button>
      <button className={`mt-8 items-center px-4 py-2 text-white rounded-md 
      ${isSaveDisabled ? "bg-gray-400" : "bg-customLightGreen"}`} 
      disabled={isSaveDisabled}>{savedBankDetails ? "Update" : "Save"}</button>
      </div>
    

        </form>
    </div>
  )}
    </div>
  )
}

export default BankInfoForm