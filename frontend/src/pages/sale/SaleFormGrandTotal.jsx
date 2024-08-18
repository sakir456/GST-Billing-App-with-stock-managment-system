import { useEffect } from "react";
import useSaleStore from "../../zustand/useSaleStore";


const SaleFormGrandTotal = () => {
  const { grandTotal, setGrandTotal,isUpdateForm,saleItems  } = useSaleStore();

  useEffect(() => {
    const totalItemAmount = saleItems.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.Amount || 0);
    }, 0);
    const totalAmount = parseFloat((totalItemAmount + parseFloat(grandTotal.pandfAmount || 0)).toFixed(2));
    
    setGrandTotal({ ...grandTotal, grandTotal: totalAmount });
  }, [saleItems, grandTotal.pandfAmount, setGrandTotal]);

   
  

  
  
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
<button className=" mt-5 items-center px-4 py-2 text-white rounded-md bg-customLightGreen" >
 {isUpdateForm ? "Update" : "Save"}
 </button>
    </div>
  )
}

export default SaleFormGrandTotal