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

   

  return (
    <div className="flex w-auto ml-8">
   <button className=" w-[200px] group flex flex-col items-center rounded-lg px-12  
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


     <button className=" w-[200px] group flex flex-col items-center  ml-6 rounded-lg px-12  text-black py-4
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
     <button className=" w-[200px] group flex flex-col items-center  ml-6 rounded-lg px-12 text-black py-4
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
   <button className=" w-[200px] group flex flex-col items-center  ml-6 rounded-lg px-12 text-black py-4
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
  )
}

export default DashboardButton