
import DatePicker from "react-datepicker"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const SaleFormPartyData = () => {
  const [poDate, setPODate] = useState(null)
  const [invoiceDate, setInvoiceDate] = useState(null)
  

  
  return (
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
     text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium "/>
      <div className="relative">
          <DatePicker
        id="date-picker"
        className="py-1.5 pl-2 pr-8 w-48 bg-white outline-none text-sm rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"
        selected={poDate}
        onChange={(date) => setPODate(date)}
        popperPlacement="bottom-end"
        dateFormat="dd/MM/yyyy"
        placeholderText="PO Date "
      />
 </div>
       
   </div>
    <div>
        <div>
        <span className="text-sm text-gray-600">Invoice Number:</span>
        <input type="text" className=" ml-2 px-1 bg-gray-100 outline-none
     text-xs rounded-md border border-gray-300 focus:outline-customLightGreen placeholder:font-medium"/>
     </div>
     <div className="mt-3">
        <span className="text-sm text-gray-600">Invoice Date:</span>
       
      <DatePicker
        id="date-picker"
        className="ml-8 px-1 bg-gray-100 outline-none
     text-xs rounded-md border border-gray-300 focus:outline-customLightGreen"
        selected={invoiceDate}
        onChange={(date) => setInvoiceDate(date)}
        popperPlacement="bottom-end"
        dateFormat="dd/MM/yyyy"
        />
     </div>
     </div>
    </div>
  )
}

export default SaleFormPartyData