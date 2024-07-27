import { useState } from "react"
import TaxRateSale from "../../utils/sale/TaxRateSale"
import { IoMdTrash } from "react-icons/io";




const AddSaleForm = () => {
  const [items, setItems] = useState([{id:1,itemName:"",qty:"",price:"", Discount:"", Tax:"", Amount:""}])
  

  const handleItemChange = (index,field,value,) => {
    const newItem  = [...items]
    newItem [index][field] = value
    setItems(newItem)

    if(index ===items.length-1 && value && field ==="itemName")
      setItems([...items,{id:items.length+1,itemName:"",qty:"",price:"", Discount:"", Tax:"", Amount:""}])
  }

  const handleAddRowButton = () => {
    setItems([...items,{id:items.length+1,itemName:"",qty:"",price:"", Discount:"", Tax:"", Amount:""}])
  }
  return (
    <div className="m-2">
    <div className="flex justify-between mx-2 ">
    <div className="text-xl font-medium text-customGreen">Sale Invoice</div>
    <div className="text-xl font-medium text-customGreen">A to Z Billing App</div>
    </div>
    <div className="flex justify-between mt-4">
    <div className="flex gap-3 ">
    <input type="search" placeholder="Party Name" className="h-8 py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
     <input type="text" placeholder="Billing Name (optional)" className=" h-8 py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300  focus:outline-customLightGreen placeholder:font-medium" />
     </div>
     <div className="flex flex-col  gap-8">
     <div className="flex  gap-14">
      <input type="text" placeholder="Email" className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
     <input type="text" placeholder="Eway Bill No" className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
     </div>
     <input type="text" placeholder="PO No." className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
     <input type="text" placeholder="PO Date" className="py-1.5 pl-2 w-48 bg-gray-100 outline-none
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
   </div>
    <div>
        <div>
        <span className="text-sm text-gray-600">Invoice Number:</span>
        <input type="text" className=" ml-2 px-1 bg-gray-100 outline-none
     text-xs rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
     </div>
     <div className="mt-3">
        <span className="text-sm text-gray-600">Invoice Date:</span>
        <input type="text" className="  ml-8 px-1 bg-gray-100 outline-none
     text-xs rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
     </div>
     </div>
    </div>
    
    <div className="mt-16" >
    <div className="flex h-10   border-2 border-gray-300 font-normal items-center justify-between">
    <div className="w-1/12 flex pl-1 justify-center border-r-2 h-full  items-center ">#</div>
                <div className="w-2/4 flex border-r-2 h-full items-center pl-2 ">Item</div>
                <div className="w-1/12 flex  justify-center pl-1 border-r-2 h-full  items-center ">QTY</div>
                <div className="w-1/6 text-center border-r-2 pl-1 h-full flex items-center justify-center">Price/Unit</div>
                <div className="w-1/6 text-center border-r-2 pl-1 h-full flex items-center justify-center">Discount </div>
                <div className="w-1/6 text-center border-r-2  pl-1 h-full flex items-center justify-center">Tax %</div>
                <div className="w-1/6 text-center  h-full pl-1 flex items-center justify-center">Amount</div>
     </div> 

     {items.map((item,index) => (
      
      <div className="flex h-10     border-2 border-gray-300  border-t-0 font-normal items-center justify-between" key={item.id}>
                 <div className="w-1/12 bg-gray-50 flex gap-2 pl-1 justify-center border-r-2 h-full  items-center  ">
                <button><IoMdTrash  /></button>
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
                <input className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen "
                  value={item.Discount}
                   onChange={(e)=>handleItemChange(index,"Discount",e.target.value )}
                />
            <TaxRateSale   value={item.Tax}   onChange={(e) => handleItemChange(index, "tax", e.target.value)} />
                <input className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen "
                 value={item.Amount}
                onChange={(e)=>handleItemChange(index,"Amount",e.target.value )}
                />
              
     </div> 
     
 
     ))}
     <button className="ml-24 mt-1 rounded-md  border px-2 py-1 border-customGreen hover:border-customLightGreen "
     onClick={handleAddRowButton}
     >Add row</button>
</div>



    </div>
  )
}

export default AddSaleForm