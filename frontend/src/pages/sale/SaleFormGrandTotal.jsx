

const SaleFormGrandTotal = () => {
  return (
    <div className="flex flex-col gap-6 mt-8 items-end">
    <div className="flex items-center gap-4">
    <span className=" text-customGreen font-semibold ">P&F</span>
    <input type="text" placeholder="" className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
</div>
<div className="flex items-center gap-4">
<span className=" text-customGreen font-semibold">G.TOTAL</span>
<input type="text" placeholder="" className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
</div>
<button className=" mt-5 items-center px-4 py-2 text-white rounded-md bg-customLightGreen" >
 Save
 </button>
    </div>
  )
}

export default SaleFormGrandTotal