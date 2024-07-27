
import useSaleStore from "../../zustand/useSaleStore";


const SaleFormTableTotalValue = () => {
  const {items, setItems} = useSaleStore()
  const handleAddRowButton = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        itemName: "",
        qty:0,
        price:0,
        discountPercent: "",
        discountAmount:0,
       TaxInPercent: "", 
       TaxInAmount:0,
        Amount: 0,
      },
    ]);
  };
    
  
    
  return (
    <div className="flex h-10 border-2 bg-gray-100 border-t-0  border-gray-300 font-normal items-center justify-between">
    <div className="w-1/12  flex gap-2 pl-1 justify-center border-r-2 h-full  items-center ">#</div>
                <div className="w-2/4 flex  h-full items-center justify-between   ">
                <div className=" rounded-md  border px-2 py-1 ml-2 border-customGreen
               hover:border-customLightGreen text-customLightGreen hover:text-green-800 cursor-pointer "
               onClick={handleAddRowButton}
               >Add row</div>
               <div className="pr-1 h-full flex items-center  ">Total</div>
                </div>
                <div className="w-1/12 flex items-center justify-end   h-full  border-r-2   ">0</div>
                <div className="w-1/6 flex  items-center justify-end  border-r-2 pl-1 h-full "></div>
                <div className=" w-1/6 flex  items-center justify-end  border-r-2 h-full   ">0</div>
                <div className="w-1/6  flex  items-center justify-end border-t-2  border-r-2 h-full  ">0</div>
                <div className="w-1/6   h-full pl-1 flex items-center  border-r-2  justify-end ">0</div>
   </div>
  )
}

export default SaleFormTableTotalValue