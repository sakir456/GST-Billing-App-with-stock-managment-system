import DatePicker from "react-datepicker"
import usePurchaseStore from "../../zustand/usePurchaseStore"
import useGetParties from "../../hooks/parties/useGetParties"
import { useState } from "react"
import usePartyStore from "../../zustand/usePartyStore"


const PurchaseFormPartyData = () => {
  const {partyInfo, setPartyInfo} = usePurchaseStore()
  const {fetchParties, parties} = useGetParties()
  const [showPartiesList, setShowPartiesList] = useState(false)
  const {setIsParty, setIsUpdatePartyForm} = usePartyStore()

  const handleChange = (field,value) => {
    setPartyInfo({...partyInfo, [field]:value})
   }

   const fetchPartiesList = async() => {
    await fetchParties()
    setShowPartiesList(true)
 }

 const filteredParties =  parties.filter(party =>
  party.partyName.toLowerCase().includes(partyInfo.partyName.toLowerCase())
)

 const handleAddParty = () => {
  setIsParty(true)
  setIsUpdatePartyForm(false)
 }

 const handleBlur = () => {
  setTimeout(()=>setShowPartiesList(false), 200)
}
const handlePartyClick = (partyName) => {
  setPartyInfo({...partyInfo, partyName })
  setShowPartiesList(false)
 }
  return (
    <div className="flex justify-between mt-4">
    <div className="flex gap-3 ">
    <div className=" w-56   relative">
    <input type="search" 
    placeholder="Party Name"
    className=" py-1.5 pl-2 bg-gray-100 w-full  outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"
     value={partyInfo.partyName}
     onChange={(e) => handleChange("partyName", e.target.value)} 
     onFocus={fetchPartiesList}
      onBlur={handleBlur}
     />
     {showPartiesList && (
      <div className="absolute bg-gray-100  rounded-md w-full mt-1 flex flex-col gap-1 p-1 z-10">
     <div className="text-sm hover:bg-green-100 py-1 text-customLightGreen cursor-pointer" 
     onClick={handleAddParty}>
     + Add Party
     </div>

     {filteredParties.map((party)=> (
      <div key={party._id} className="text-sm hover:bg-green-100 flex items-center pl-2 py-1 cursor-pointer " 
      onClick={() => handlePartyClick(party.partyName)}
      >{party.partyName}</div>
     ))}
     </div>
     )}
     
     </div>
     <input type="text"
     placeholder="Billing Name (optional)" 
     className=" h-8 py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300  focus:outline-customLightGreen placeholder:font-medium" 
     value={partyInfo?.billingName}
     onChange={(e) => handleChange("billingName", e.target.value)}
     />
     </div>
     <div className="flex flex-col  gap-8">
     <div className="flex  gap-14">
      <input type="text"
      name="email"
    placeholder="Email" className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"
     value={partyInfo?.email}
     onChange={(e) => handleChange("email", e.target.value)}
     />
     <input type="text" 
     name="ewayBillNo"
     placeholder="Eway Bill No" className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"
     value={partyInfo?.ewayBillNo}
     onChange={(e) => handleChange("ewayBillNo", e.target.value)}
     />
     </div>
     <input type="text"
     name="poNo"
     placeholder="PO No." className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium "
     value={partyInfo?.poNo}
     onChange={(e) => handleChange("poNo", e.target.value)}
     />
      <div className="relative">
          <DatePicker
        id="date-picker"
        className="py-1.5 pl-2 pr-8 w-48 bg-white outline-none text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"
        selected={partyInfo?.poDate}
        onChange={(Date) => handleChange("poDate", Date )}
        popperPlacement="bottom-end"
        dateFormat="dd/MM/yyyy"
        placeholderText="PO Date "
      />
 </div>
       
   </div>
    <div>
        <div>
        <span className="text-sm text-gray-600">Invoice Number:</span>
        <input type="text" 
       className=" ml-2 px-1 bg-gray-100 outline-none
     text-xs rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"
     value={partyInfo?.invoiceNo}
     onChange={(e) => handleChange("invoiceNo", e.target.value)}
      />
     </div>
     <div className="mt-3">
        <span className="text-sm text-gray-600">Invoice Date:</span>
       <DatePicker
      id="date-picker"
        className="ml-8 px-1 bg-gray-100 outline-none
     text-xs rounded-md border border-gray-300 focus:outline-customLightGreen"
     selected={partyInfo?.invoiceDate}
        onChange={(Date) => handleChange("invoiceDate", Date)}
        popperPlacement="bottom-end"
        dateFormat="dd/MM/yyyy"
        />
     </div>
     </div>
    </div>
  )
}

export default PurchaseFormPartyData