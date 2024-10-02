import { BiDownload, BiPurchaseTagAlt, BiUpload } from "react-icons/bi"
import { FaRupeeSign } from "react-icons/fa"
import { MdAlignVerticalBottom } from "react-icons/md"


const DashboardButton = () => {
  return (
    <div className="flex w-auto ml-4">
   <button className="group flex flex-col items-center rounded-lg px-12
  text-black py-4 hover:bg-customLightGreen hover:text-white shadow-md transition-all  ease-in-out">
  <div className="flex items-center trans ">
    <MdAlignVerticalBottom className="mr-1 text-customLightGreen group-hover:text-white " />
    <div className="text-sm   ">Net Sales</div>
  </div>
  <div className="flex items-center mt-3 font-bold text-lg ">
    <FaRupeeSign className="text-base" />
    <div>131000.00</div>
  </div>
  <div className="flex text-xs ">
    Total sales
    <div>(JULY)</div>
  </div>
</button>


     <button className=" group flex flex-col items-center  ml-6 rounded-lg px-12  text-black py-4
      hover:bg-customLightGreen hover:text-white shadow-md ">
      <div className="flex items-center">
      <BiPurchaseTagAlt className="mr-1 text-customLightGreen group-hover:text-white" />
      <div className="text-sm">Purchase</div>
      </div>
      <div className="flex items-center mt-3 font-bold text-lg">
      <FaRupeeSign className="text-base" />
      <div>131000.00</div>
      </div>
      <div className="flex text-xs">
      Total Purchase
      <div>(JULY)</div>
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
      <div>131000.00</div>
      </div>
      <div className="flex text-xs">
      (Total) 
      </div>
   </button>
   <button className=" group flex flex-col items-center  ml-6 rounded-lg px-12 text-black py-4
      hover:bg-customGreen hover:text-white shadow-md ">
      <div className="flex items-center">
      <BiUpload className="mr-1 text-customLightGreen group-hover:text-white"  />
      <div className="text-sm">{"you'll Give" }</div>
      </div>
      <div className="flex items-center mt-3 font-bold text-lg">
      <FaRupeeSign className="text-base" />
      <div>131000.00</div>
      </div>
      <div className="flex text-xs">
      (Total) 
      </div>
   </button>
   </div>
  )
}

export default DashboardButton