import useSaleStore from "../../zustand/useSaleStore";


const SaleFormGrandTotal = () => {
  const { grandTotal, setGrandTotal } = useSaleStore();
const handleChange = (field, value) => {
  setGrandTotal({...grandTotal, [field]:value})
}
  return (
    <div className="flex flex-col gap-6 mt-8 items-end">
    <div className="flex items-center gap-4">
    <span className=" text-customGreen font-semibold ">P&F</span>
    <input type='number'
    value={grandTotal.pandfAmount}
    onChange={(e) =>handleChange("pandfAmount", e.target.value)}
     className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
</div>
<div className="flex items-center gap-4">
<span className=" text-customGreen font-semibold">G.TOTAL</span>
<input type='number' 
value={grandTotal.grandTotal}
onChange={(e) =>handleChange("grandTotal", e.target.value)}
 className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
</div>
<button className=" mt-5 items-center px-4 py-2 text-white rounded-md bg-customLightGreen" >
 Save
 </button>
    </div>
  )
}

export default SaleFormGrandTotal