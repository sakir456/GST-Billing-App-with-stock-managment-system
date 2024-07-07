import { FaIndianRupeeSign } from "react-icons/fa6";

const DashboardMainRight = () => {
  return (
    <div className='w-auto ml-10 '>
    <button className=" group pl-2 pr-60 pb-5 pt-2 shadow-md   rounded-md hover:bg-customLightGreen hover:text-white ">
      <div>Stock Value</div>
      <div className=" flex items-center  font-semibold text-customLightGreen group-hover:text-white">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg">145503.21</div>
      </div>
    </button>

    <button className=" group pl-2 pr-60 pb-5 pt-2 shadow-md   rounded-md hover:bg-customLightGreen hover:text-white ">
      <div>Expenses</div>
      <div className=" flex items-center  font-semibold text-customLightGreen group-hover:text-white">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg">145503.21</div>
      </div>
    </button>

    <button className=" group pl-2 pr-60 pb-5 pt-2 mt-3 shadow-md   rounded-md hover:bg-customLightGreen hover:text-white ">
      <div>Cash in hand</div>
      <div className=" flex items-center  font-semibold text-customLightGreen group-hover:text-white">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg ">145503.21</div>
      </div>
    </button>

    <div className=" group pl-2 pr-36 w-[344px] pb-5 pt-2 mt-3 shadow-md rounded-md cursor-pointer hover:bg-customLightGreen hover:text-white" >
      <div>Bank Accounts</div>
      <div className=" flex items-center  font-semibold text-yellow-800 group-hover:text-white">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg  ">150000.00</div>
      </div>

      <div className="mt-2 ">
       <div>ICICI Bank</div>
       <div className=" flex items-center   font-semibold text-customLightGreen group-hover:text-white">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg  ">50000.00</div>
      </div>
      </div>

      <div className="mt-2">
        <div>Bank of Baroda</div>
        <div className=" flex items-center  font-semibold text-customLightGreen group-hover:text-white">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg ">50000.00</div>
      </div>
      </div>

      <div className="mt-2">
        <div>SBI Bank</div>
        <div className=" flex items-center  font-semibold text-customLightGreen group-hover:text-white">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg ">50000.00</div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default DashboardMainRight