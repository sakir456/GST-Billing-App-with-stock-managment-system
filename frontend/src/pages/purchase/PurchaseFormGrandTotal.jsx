import { useEffect, useState } from "react";
import usePurchaseStore from "../../zustand/usePurchaseStore";


const PurchaseFormGrandTotal = () => {
  const {purchaseItems, grandTotal, setGrandTotal, partyInfo, isUpdateForm} = usePurchaseStore()
  const [isRoundOffChecked, setIsRoundOffChecked] = useState(true);

  const handleChange = (field, value) => {
    setGrandTotal({...grandTotal, [field]:value})
  }

  
const handleRoundOffChange = (e) => {
  setIsRoundOffChecked(e.target.checked)
}

const totalItemAmount = purchaseItems.reduce((accumulator, item) => {
  return accumulator + parseFloat(item.Amount || 0);
}, 0);
const totalAmount = parseFloat((totalItemAmount + parseFloat(grandTotal.pandfAmount || 0)).toFixed(2));
  const roundedTotalAmount = Math.round(totalAmount);
  const RoundedValue = (totalAmount - roundedTotalAmount).toFixed(2);

  useEffect(() => {
    const totalItemAmount = purchaseItems.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.Amount || 0);
    }, 0);

    const totalAmount = parseFloat((totalItemAmount + parseFloat(grandTotal.pandfAmount || 0)).toFixed(2));
    const RoundedtotalAmount = Math.round(totalAmount);
    const finalTotal =  isRoundOffChecked ?  RoundedtotalAmount : totalAmount 
   
    
    setGrandTotal({ ...grandTotal, grandTotal: finalTotal });
  }, [purchaseItems, grandTotal.pandfAmount, isRoundOffChecked, setGrandTotal]);

  const isSaveDisabled = !partyInfo.partyName || partyInfo.partyName.trim()==="";
  return (
    <div className="flex flex-col gap-6 mt-8 items-end">
    <div className="flex items-center gap-4">
    <span className=" text-customGreen font-semibold ">P&F</span>
    <input type='number'
    value={grandTotal.pandfAmount}
    onChange={(e) =>handleChange("pandfAmount", e.target.value)}
  className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium text-right"/>
</div>
<div className="flex items-center gap-4">
    <span className=" text-customGreen font-semibold ">Round Off</span>
    <input 
      type="checkbox"
      checked={isRoundOffChecked}
      onChange={handleRoundOffChange}
      className="h-5 w-5"
    />
  <input 
  type='text'
  value={isRoundOffChecked ? RoundedValue : ""}
  readOnly
  className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium text-right"/>
</div>
<div className="flex items-center gap-4">
<span className=" text-customGreen font-semibold">G.TOTAL</span>
<input type='number' 
value={grandTotal.grandTotal}
readOnly
onChange={(e) =>handleChange("grandTotal", e.target.value)}
className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium text-right"/>
</div>
<div className="flex gap-9">
<button className={` mt-5  px-8 py-2 text-white rounded-md 
${isSaveDisabled ? "bg-gray-400" : "bg-customLightGreen"}`} 
disabled={isSaveDisabled} >
{isUpdateForm ? "Update" : "Save"}
 </button>
 
 </div>
    </div>
  )
}

export default PurchaseFormGrandTotal