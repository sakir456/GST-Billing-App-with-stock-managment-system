import { BiDownload, BiPurchaseTagAlt, BiUpload } from "react-icons/bi"
import { FaRupeeSign } from "react-icons/fa"
import { MdAlignVerticalBottom } from "react-icons/md"
import useGetInvoices from "../../hooks/invoices/useGetInvoices"
import { useEffect, useState,  } from "react"
import useGetPurchaseInvoices from "../../hooks/purchaseinvoices/useGetPurchaseInvoices"
import { useNavigate } from "react-router-dom";


const DashboardButton = () => {
  const {invoices} = useGetInvoices()
  const {invoices: purchaseInvoices} = useGetPurchaseInvoices()
  const [totalSalesAmount, setTotalSalesAmount] = useState(0);
  const [totalPurchaseAmount, setTotalPurchaseAmount] = useState(0)
  const navigate = useNavigate()
  


  useEffect(() => {
     const totalSalescalculated  = invoices.reduce((accumulator, item)=> {
      return accumulator  + parseFloat(item.grandTotal || 0)
    }, 0)

    const totalPuchasecalculated = purchaseInvoices.reduce((accumulator,item)=> {
     return accumulator + parseFloat(item.grandTotal || 0)
    },0)

    setTotalSalesAmount( totalSalescalculated )
    setTotalPurchaseAmount(totalPuchasecalculated)
   },[invoices, purchaseInvoices])

   const extractDateandDay = (date)=> {

    const splitDate = date.split("T")[0]
    const newdate = new Date(splitDate)
    const day = newdate.getDate()
    const month = newdate.getMonth()  
    const fullYear = newdate.getFullYear()
    
  
    return `${day}/${month}/${fullYear}  `
  }

   

  return (
    <div className="flex flex-col  ml-8">
    <div className="flex ">
   <button className="  group flex  flex-col items-center rounded-lg px-12  
  text-black py-4 hover:bg-customLightGreen hover:text-white shadow-md transition-all  ease-in-out" onClick={() => navigate("/sales")}>
  <div className="flex items-center trans ">
    <MdAlignVerticalBottom className="mr-1 text-customLightGreen group-hover:text-white " />
    <div className="text-sm   ">Net Sales</div>
  </div>
  <div className="flex items-center mt-3 font-bold text-lg ">
    <FaRupeeSign className="text-base" />
    <div>{totalSalesAmount}</div>
  </div>
  <div className="flex text-xs ">
    Total sales
  </div>
</button>


     <button className="  group flex flex-col items-center  ml-6 rounded-lg px-12  text-black py-4
      hover:bg-customLightGreen hover:text-white shadow-md " onClick={() => navigate("/purchase")}>
      <div className="flex items-center">
      <BiPurchaseTagAlt className="mr-1 text-customLightGreen group-hover:text-white" />
      <div className="text-sm">Purchase</div>
      </div>
      <div className="flex items-center mt-3 font-bold text-lg">
      <FaRupeeSign className="text-base" />
      <div>{totalPurchaseAmount}</div>
      </div>
      <div className="flex text-xs">
      Total Purchase
     
      </div>
     </button>
     <button className=" group flex flex-col items-center  ml-6 rounded-lg px-12 text-black py-4
      hover:bg-customGreen hover:text-white shadow-md ">
      <div className="flex items-center">
      <BiDownload className="mr-1 text-customLightGreen group-hover:text-white"  />
      <div className="text-sm">{"you'll Recieve"}</div>
      </div>
      <div className="flex items-center mt-3 font-bold text-lg">
      <FaRupeeSign className="text-base" />
      <div>{totalSalesAmount}</div>
      </div>
      <div className="flex text-xs">
      (Total) 
      </div>
   </button>
   <button className="  group flex flex-col items-center  ml-6 rounded-lg px-12 text-black py-4
      hover:bg-customGreen hover:text-white shadow-md ">
      <div className="flex items-center">
      <BiUpload className="mr-1 text-customLightGreen group-hover:text-white"  />
      <div className="text-sm">{"you'll Give" }</div>
      </div>
      <div className="flex items-center mt-3 font-bold text-lg">
      <FaRupeeSign className="text-base" />
      <div>{totalPurchaseAmount}</div>
      </div>
      <div className="flex text-xs">
      (Total) 
      </div>
   </button>
   </div>

   <div className="bg-white max-w-3xl mt-10">
      <div className="flex items-center gap-2.5 p-4 rounded-t border ">
        <p className="font-semibold">Recent Invoices</p>
      </div>
      <div className="pt-4 border border-t-0">
        {
          invoices.slice(0,5).map((invoice,index)=> (
            <div key={index} className=" px-6 py-3 flex gap-3 items-center  hover:bg-gray-200">
            <div className=" flex flex-col flex-1 ">
             <div className=" font-medium text-gray-800">{invoice.partyName}</div>
             <div className="text-xs text-gray-600">{`${extractDateandDay(invoice.updatedAt)} - ${invoice.invoiceNo}`}</div>
            </div>
            <div className=" text-gray-600">{invoice.grandTotal}</div>

            </div>
          ))
        }
      </div>
      

      </div>
    
   </div>
  )
}

export default DashboardButton