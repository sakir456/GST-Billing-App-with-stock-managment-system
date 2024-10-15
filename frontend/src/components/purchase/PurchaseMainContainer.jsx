import { FiBox } from "react-icons/fi"
import usePurchaseStore from "../../zustand/usePurchaseStore"
import useGetPurchaseInvoices from "../../hooks/purchaseinvoices/useGetPurchaseInvoices"
import useDeletePurchaseInvoice from "../../hooks/purchaseinvoices/useDeletePurchaseInvoice"
import { useState } from "react"
import LoadingSpinnerNew from "../LoadingSpinnerNew"
import NoTranscation from "../NoTranscation"
import { LuPencil, LuPrinter } from "react-icons/lu"
import { FaRegTrashAlt } from "react-icons/fa"
import useGeneralStore from "../../zustand/useGeneralStore"


const PurchaseMainContainer = () => {
  const {setIsPurchaseForm,setIsUpdateForm, resetForm, setPurchaseItems, setPartyInfo, setGrandTotal, setInvoiceId} = usePurchaseStore()
  const { invoices, loading, fetchPurchaseInvoices } = useGetPurchaseInvoices()
  const {deletePurchaseInvoice,isLoading} = useDeletePurchaseInvoice()
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery,setSearchQuery] = useState("")
  const {setInvoicePrintPage} = useGeneralStore();

  const handleAddPurchaseBtn =async () => {
    setIsPurchaseForm(true);
    setIsUpdateForm(false);
    await resetForm()
  }

  const handleUpdateBtn = (invoice) => {
    setIsPurchaseForm(true);
    setIsUpdateForm(true);
    setPurchaseItems(invoice.purchaseItems);
    setPartyInfo(invoice);
    setGrandTotal(invoice);
    setInvoiceId(invoice._id);
  };
  
  const handleDateChange = async(start, end) => {
    setStartDate(start);
    setEndDate(end);
    await fetchPurchaseInvoices(start, end);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const formatInvoiceDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const filteredInvoices = invoices.filter(invoice => (
    String(formatInvoiceDate(invoice.invoiceDate)).includes(searchQuery) ||
    invoice.partyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    String(invoice.invoiceNo).includes(searchQuery) || 
    String(invoice.grandTotal).includes(searchQuery)
  ))

  const handleDeleteBtn = async (invoiceId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deletePurchaseInvoice(invoiceId);
        await fetchPurchaseInvoices();
        await resetForm();
      } catch (error) {
        console.error('Error deleting invoice:', error);
      }
    }
  };

  const handlePrintbtn = (invoiceId) => {
    setInvoiceId(invoiceId)
    setInvoicePrintPage(true)
    
 }
  return (
    <div>
    {
      loading || isLoading ? (
        <LoadingSpinnerNew/>
      ) : (
    <div className="m-4 ">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <FiBox className="text-customLightGreen bg-green-100 rounded-full" />
          <p className="font-medium">Purchase Invoices</p>
        </div>
        <div className="flex items-center">
          <div className="px-2 py-1.5  text-sm bg-gray-200  rounded-md rounded-r-none">Between</div>
          <input 
            type="Date"
            className="text-gray-300 border border-gray-300 px-2 py-1 text-sm border-x-0 outline-none cursor-pointer  "
            value={startDate}
           onChange={(e) => handleDateChange(e.target.value, endDate)}
            />
          <div className="text-sm px-1 py-[5px] border border-gray-300 border-x-0">To</div>
          <input 
            type="Date"
            className="text-gray-300 border border-gray-300 px-2 py-1 text-sm border-l-0 outline-none 
             cursor-pointer rounded-md rounded-l-none"
             value={endDate}
             onChange={(e) => handleDateChange(startDate, e.target.value)}
             />

             </div>
        <div className="flex gap-5">
          <input
            type="search"
            placeholder="Search"
            className="py-1 pl-3 w-60 bg-gray-100 outline-none text-sm"
            value={searchQuery}
                onChange={handleSearchInputChange}
          />
          <button
            className="flex items-center px-2 py-1 bg-customLightGreen text-white rounded-md" 
            onClick={handleAddPurchaseBtn}>
            + Add Purchase
          </button>
        </div>
      </div>

      <div className="mt-3 relative">
        <div className="flex h-10 px-2 items-center bg-gray-100 border-2 border-gray-300 font-medium">
          <div className="w-1/5 text-center">Date</div>
          <div className="w-1/5 text-center">Invoice No.</div>
          <div className="w-1/5 text-center">Party Name</div>
          <div className="w-1/5 text-center">Amount</div>
          <div className="w-1/5 text-center">Action</div>
        </div>
        <div>
              {!invoices || invoices.length === 0 ? (
                <NoTranscation />
              ) : (
                filteredInvoices.map((invoice) => (
                  <div
                    className="flex h-10 px-2 items-center border border-b-2 border-x-2
                     border-gray-300 hover:bg-customLightGreen hover:text-white cursor-pointer"
                    key={invoice._id}
                  >
                    <div className="w-1/5 text-center">
                    {invoice.invoiceDate ? formatInvoiceDate(invoice.invoiceDate) : formatInvoiceDate(new Date())}
                    </div>
                    <div className="w-1/5 text-center">{invoice.invoiceNo}</div>
                    <div className="w-1/5 text-center">{invoice.partyName}</div>
                    <div className="w-1/5 text-center">{invoice.grandTotal}</div>
                    <div className="w-1/5 h-full flex justify-center gap-3 text-center relative">
                      <button
                        className="text-center group"
                        onClick={() => handleUpdateBtn(invoice)}
                      >
                        <LuPencil />
                        <span className="absolute hidden group-hover:block -bottom-4 left-24 bg-gray-300 text-black text-xs rounded py-1 px-2">
                          Edit
                        </span>
                      </button>
                      <button
                        className="text-center group"
                        onClick={() => handleDeleteBtn(invoice._id)}
                      >
                        <FaRegTrashAlt />
                        <span className="absolute hidden group-hover:block -bottom-4 right-20 bg-gray-300  text-black  text-xs rounded py-1 px-2">
                          Delete
                        </span>
                      </button>
                      <button
                        className="text-center group"
                        onClick={() => handlePrintbtn(invoice._id)}
                      >
                        <LuPrinter />
                        <span className="absolute hidden group-hover:block -bottom-4 right-20 bg-gray-300  text-black  text-xs rounded py-1 px-2">
                          Print
                        </span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
    </div>
    </div>
   ) }
   </div>
    
  )
}

export default PurchaseMainContainer









// import { FiBox } from "react-icons/fi";
// import usePurchaseStore from "../../zustand/usePurchaseStore";

// const PurchaseMainContainer = () => {
//   const { setIsPurchaseForm } = usePurchaseStore();

//   const handleAddPurchaseBtn = () => {
//     setIsPurchaseForm(true);
//   };

//   return (
//     <div className="m-2 sm:m-4">
//       <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center">
//         <div className="flex items-center gap-2">
//           <FiBox className="text-customLightGreen bg-green-100 rounded-full" />
//           <p className="font-medium">Purchase Invoices</p>
//         </div>
        
//         <div className="flex flex-wrap items-center gap-2">
//           <div className="flex items-center">
//             <div className="px-2 py-1.5 text-sm bg-gray-200 rounded-l-md">Between</div>
//             <input
//               type="date"
//               className="text-gray-300 border border-gray-300 px-2 py-1 text-sm outline-none cursor-pointer"
//             />
//             <div className="text-sm px-1 py-[5px] border border-gray-300">To</div>
//             <input
//               type="date"
//               className="text-gray-300 border border-gray-300 px-2 py-1 text-sm outline-none cursor-pointer rounded-r-md"
//             />
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 w-full sm:w-auto">
//             <input
//               type="search"
//               placeholder="Search"
//               className="py-1 pl-3 w-full sm:w-60 bg-gray-100 outline-none text-sm rounded-md"
//             />
//             <button
//               className="flex items-center justify-center px-2 py-1 bg-customLightGreen text-white rounded-md w-full sm:w-auto"
//               onClick={handleAddPurchaseBtn}
//             >
//               + Add Purchase
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mt-3 relative overflow-x-auto">
//         <div className="flex h-10 px-2 items-center bg-gray-100 border-2 border-gray-300 font-medium text-sm sm:text-base">
//           <div className="w-1/5 text-center">Date</div>
//           <div className="w-1/5 text-center">Invoice No.</div>
//           <div className="w-1/5 text-center">Party Name</div>
//           <div className="w-1/5 text-center">Amount</div>
//           <div className="w-1/5 text-center">Action</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PurchaseMainContainer;
