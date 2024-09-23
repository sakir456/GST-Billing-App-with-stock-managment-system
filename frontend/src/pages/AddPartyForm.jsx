import { RxCross1 } from "react-icons/rx"
import usePartyStore from "../zustand/usePartyStore"
import useAddParty from "../hooks/parties/useAddParty";
import useUpdateParty from "../hooks/parties/useUpdateParty";
import LoadingSpinnerNew from "../components/LoadingSpinnerNew";



const AddPartyForm = () => {
  const {setIsParty, partyData, setPartyData,resetPartyData, isUpdatePartyForm} = usePartyStore();
  const {addParty,loading} = useAddParty()
  const {updateParty, isLoading} = useUpdateParty() 


  const handleSubmitForm = async(e) => {
    e.preventDefault();
    const formattedPartyData = {
     ...partyData,
     openingBalance: partyData.openingBalance ? parseFloat(partyData.openingBalance) : undefined,
     asOfDate:partyData.asOfDate ? parseFloat(partyData.asOfDate) : undefined,
     }
     await addParty(formattedPartyData)
     
  }

  const handleChange = (e) => {
   setPartyData({...partyData, [e.target.name]: e.target.value})
  }

  const handleUpdatePartyForm = async(e) => {
    e.preventDefault();
    const formattedPartyData = {
      ...partyData,
      openingBalance: partyData.openingBalance ? parseFloat(partyData.openingBalance) : undefined,
      asOfDate:partyData.asOfDate ? parseFloat(partyData.asOfDate) : undefined,
      }
      await updateParty (partyData._id,formattedPartyData);
      resetPartyData()
     setIsParty(false)
    
  }
  const handleCross = () => {
    setIsParty(false)
    resetPartyData()
  }
  const isSaveDisabled = !partyData.partyName || partyData.partyName.trim()==="";

  return (
    <div>
    { loading || isLoading ? (
      <LoadingSpinnerNew />
    ) : (
       <form className= "px-10 py-5 " onSubmit={isUpdatePartyForm ? handleUpdatePartyForm : handleSubmitForm}>
    <div className="flex justify-between text-lg font-medium  ">
    <div className="">{isUpdatePartyForm ? "Update Party" : "Add Party"}</div>
    <RxCross1 className="mr-3 cursor-pointer"  onClick={handleCross}/>
    </div>
    <div className="flex items-center gap-5 my-5 ">
        <input placeholder="Party Name" className="py-1 px-2 border-2 border-gray-300
         rounded-md  outline-none focus:outline-customLightGreen"
         name="partyName"
         value={partyData.partyName}
         onChange={handleChange}

         />
        <input placeholder="GSTIN" className="py-1 px-2 border-2 border-gray-300 
        rounded-md outline-none focus:outline-customLightGreen "
        name="GSTIN"
        value={partyData.GSTIN}
        onChange={handleChange}
        />
    </div>
    
    <div className="mt-6 flex gap-28">
    <div className="flex">
    <div>
    <div className="text-lg font-medium ">Billing Address</div>
      <textarea placeholder="Billing Address" className=" h-32 w-80 mt-2 px-2  py-1 border-2 border-gray-300  
       outline-none  resize-none box-border focus:border-customLightGreen  rounded-md"
        name="billingAddress"
       value={partyData. billingAddress}
       onChange={handleChange}
       />
       </div>
       <div className="ml-5">
       <div className="text-lg font-medium  ">Shipping Address</div>
      <textarea placeholder="Shipping Address" className=" h-32 w-80 mt-2 px-2  py-1 border-2 border-gray-300  
       outline-none  resize-none box-border focus:border-customLightGreen  rounded-md "
        name="shippingAddress"
       value={partyData.shippingAddress}
       onChange={handleChange}
       />
       </div>
     </div>
   </div>
   <div className="text-lg font-medium mt-4">Opening Balance</div>
   <div className="flex items-center gap-5 my-5 ">
        <input placeholder="Amount" className="py-1 px-2 border-2 border-gray-300
         rounded-md  outline-none focus:outline-customLightGreen"
         name="openingBalance"
         value={partyData.openingBalance}
         onChange={handleChange}
         />
        <input placeholder="As Of Date" className="py-1 px-2 border-2 border-gray-300 
        rounded-md outline-none focus:outline-customLightGreen "
          name="asOfDate"
        value={partyData.asOfDate}
        onChange={handleChange}
        />
    </div>
    <div className="text-end mt-40">
      <button className={`mt-8 items-center px-4 py-2 text-white rounded-md 
        ${isSaveDisabled ? "bg-gray-400" : "bg-customLightGreen"} `} disabled={isSaveDisabled}>
      {isUpdatePartyForm ? "Update" : "Save"}
      </button>
     </div>
     
    </form>
    ) }
  </div>
  )
}

export default AddPartyForm