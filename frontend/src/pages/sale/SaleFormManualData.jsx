
import { IoMdTrash } from 'react-icons/io'
import TaxRateSale from "../../utils/sale/TaxRateSale"

import useSaleStore from "../../zustand/useSaleStore"

const SaleFormManualData = () => {
   const {items, setItems} = useSaleStore()
   

  
  const handleItemChange = (index, field, value) => {
   const newItem = [...items];
   newItem[index][field] = value;
   setItems(newItem);

   if (index === items.length - 1 && value && field === "itemName") {
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
   }
 };

 const handleDeleteButton = (index) => {
   const updatedItems = [...items];
   updatedItems.splice(index, 1);
   const resetIds = updatedItems.map((item, idx) => ({
     ...item,
     id: idx + 1,
   }));
   setItems(resetIds);
 };
        
  return (
    <div>
         {items.map((item,index) => (
      
      <div className="flex h-10     border-2 border-gray-300  border-t-0 font-normal items-center justify-between" key={item.id}>
                 <div className="w-1/12 bg-gray-50 flex gap-2 pl-1 justify-center border-r-2 h-full  items-center  ">
                <div className='cursor-pointer' onClick={handleDeleteButton} ><IoMdTrash  /></div>
                 {item.id}
                 </div>
                <input className="w-2/4 pl-1 bg-gray-50 flex border-r-2 h-full items-center focus:outline-customLightGreen" 
                value={item.itemName}
                onChange={(e)=>handleItemChange(index,"itemName",e.target.value )}
                placeholder="enter Item Name"/>
                <input className="w-1/12 flex pr-1 bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen "
                 value={item.qty}
                 onChange={(e)=>handleItemChange(index,"qty",e.target.value )}
                />
                <input className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen"
                 value={item.price}
                onChange={(e)=>handleItemChange(index,"price",e.target.value )}
                />
                 <div className="w-1/6 flex  bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen" >
                <input className="w-1/2  pr-1 bg-gray-50  border-r-2 h-full text-right  focus:outline-customLightGreen "
                  value={item.discountPercent}
                   onChange={(e)=>handleItemChange(index,"discountPercent",e.target.value )}
                />
                <input className="w-1/2  pr-1  bg-gray-50  h-full text-right   focus:outline-customLightGreen "
                   value={item.discountAmount}
                   onChange={(e)=>handleItemChange(index,"discountAmount",e.target.value )}
                />
                </div>

                <div className="w-1/6 flex  bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen" >
                <TaxRateSale   value={item.TaxInPercent}   onChange={(e) => handleItemChange(index, "TaxInPercent", e.target.value)} />
                <input className="w-1/2 pr-1  bg-gray-50  h-full text-right   focus:outline-customLightGreen "
                   value={item.TaxInAmount}
                   onChange={(e)=>handleItemChange(index,"TaxInAmount",e.target.value )}
                />
                </div>

          
                <input className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen "
                 value={item.Amount}
                onChange={(e)=>handleItemChange(index,"Amount",e.target.value )}
                />
                
              
     </div> 
     
 
     ))}
    </div>
  )
}

export default SaleFormManualData