
import { IoMdTrash } from 'react-icons/io'
import TaxRateSale from "../../utils/sale/TaxRateSale"

import useSaleStore from "../../zustand/useSaleStore"
import { useState } from 'react'
import useGetItems from '../../hooks/useGetItems'



const SaleFormItemData= () => {
   const {saleItems, setSaleItems} = useSaleStore()
   const { items,  fetchItems } = useGetItems()
   const[showFetchItems, setShowFetchItems] = useState(false)
   const [showItemList, setShowItemList] = useState(false)
   
 

  
  const handleItemChange = (index, field, value) => {
   const newItem = [...saleItems];
   newItem[index][field] = value;
   setSaleItems(newItem);

   if (index === saleItems.length - 1 && value && field === "itemName") {
    setSaleItems([
      ...saleItems,
       {
         id: saleItems.length + 1,
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
   const updatedItems = [...saleItems];
   updatedItems.splice(index, 1);
   const resetIds = updatedItems.map((item, idx) => ({
    ...item,
     id: idx + 1,
   }));
   setSaleItems(resetIds);
 };

 const fetchItemList =  async(index) => {
   await fetchItems()
    setShowFetchItems(index)
    setShowItemList(true)
 }

 const handleBlur = () => {
setTimeout(()=>setShowItemList(false),200)
  
 }
 const handleItemClick = (itemName, index) => {
  const newItem = [...saleItems];
  newItem[index].itemName = itemName;
  setSaleItems(newItem);
  setShowItemList(false);
};
 
        
  return (
    <div>
         {saleItems.map((item,index) => (
      
      <div className="flex h-10     border-2 border-gray-300  border-t-0 font-normal items-center justify-between" key={item.id}>
                 <div className="w-1/12 bg-gray-50 flex gap-2 pl-1 justify-center border-r-2 h-full  items-center  ">
                <div className='cursor-pointer' onClick={handleDeleteButton} ><IoMdTrash  /></div>
                 {item.id}
                 </div>
                 
                 <div  className="w-2/4 relative" >
                <input type='text' className="w-full py-2  pl-1 bg-gray-50 flex border-r-2 h-full items-center focus:outline-customLightGreen" 
                value={item.itemName}
                onChange={(e)=>handleItemChange(index,"itemName",e.target.value )}
                placeholder="enter Item Name"
                  onFocus={() => fetchItemList(index)}
                  onBlur={ handleBlur}
                />

               {showItemList && showFetchItems===index && (
                 <div className='absolute bg-gray-100  rounded-md w-full mt-1 flex flex-col gap-1 p-1' style={{ zIndex: 10 }}>
                 <div className="text-sm hover:bg-green-100 py-1 text-customLightGreen cursor-pointer" >
                  + Add Item
                  </div>
                {items.map((item) => (
                <div key={item._id} className='flex justify-between text-sm hover:bg-green-100  items-center pl-2 py-1 cursor-pointer'
                onClick={() => handleItemClick(item.itemName,index)}
                >
                <div >{item.itemName}</div>
               <div>85</div>
               </div>
                 ))}
               </div> 
              )}
                </div>
                <input type='number' className="w-1/12 flex pr-1 bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen "
                 value={item.qty}
                 onChange={(e)=>handleItemChange(index,"qty",e.target.value )}
                />
                <input type='number' className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen"
                 value={item.price}
                onChange={(e)=>handleItemChange(index,"price",e.target.value )}
                />
                 <div  className="w-1/6 flex  bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen" >
                <input className="w-1/2  pr-1 bg-gray-50  border-r-2 h-full text-right  focus:outline-customLightGreen "
                  value={item.discountPercent}
                   onChange={(e)=>handleItemChange(index,"discountPercent",e.target.value )}
                />
                <input type='number' className="w-1/2  pr-1  bg-gray-50  h-full text-right   focus:outline-customLightGreen "
                   value={item.discountAmount}
                   onChange={(e)=>handleItemChange(index,"discountAmount",e.target.value )}
                />
                </div>

                <div className="w-1/6 flex  bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen" >
                <TaxRateSale   value={item.TaxInPercent}   onChange={(e) => handleItemChange(index, "TaxInPercent", e.target.value)} />
                <input type='number' className="w-1/2 pr-1  bg-gray-50  h-full text-right   focus:outline-customLightGreen "
                   value={item.TaxInAmount}
                   onChange={(e)=>handleItemChange(index,"TaxInAmount",e.target.value )}
                />
                </div>

          
                <input type='number' className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen "
                 value={item.Amount}
                onChange={(e)=>handleItemChange(index,"Amount",e.target.value )}
                />
                
              
     </div> 
     
 
     ))}
    </div>
  )
}

export default SaleFormItemData