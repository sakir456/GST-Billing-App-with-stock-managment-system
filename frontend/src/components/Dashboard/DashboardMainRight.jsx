import { FaIndianRupeeSign } from "react-icons/fa6";

const DashboardMainRight = () => {
  return (
    <div className='w-1/4 ml-6 '>
    <button className=" group pl-2 pr-52 pb-5 pt-2 shadow-md   rounded-md ">
      <div>Stock Value</div>
      <div className=" flex items-center  font-semibold text-customLightGreen ">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg">145503.21</div>
      </div>
    </button>

    <button className=" group pl-2 pr-52 pb-5 pt-2 shadow-md   rounded-md  ">
      <div>Expenses</div>
      <div className=" flex items-center  font-semibold text-customLightGreen ">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg">145503.21</div>
      </div>
    </button>

    <button className=" group pl-2 pr-52 pb-5 pt-2 mt-3 shadow-md   rounded-md  ">
      <div>Cash in hand</div>
      <div className=" flex items-center  font-semibold text-customLightGreen ">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg ">145503.21</div>
      </div>
    </button>

    <button className=" group pl-2 pr-52 pb-5 pt-2 shadow-md   rounded-md  ">
      <div>Sale order</div>
      <div className=" flex items-center  font-semibold text-customLightGreen ">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg">145503.21</div>
      </div>
    </button>

    <div className=" group pl-2   pb-5 pt-5 mt-5 shadow-md rounded-md cursor-pointer " >
      <div>Bank Accounts</div>
      <div className=" flex items-center  font-semibold text-yellow-800 ">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg  ">150000.00</div>
      </div>

      <div className="mt-2 ">
       <div>ICICI Bank</div>
       <div className=" flex items-center   font-semibold text-customLightGreen ">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg  ">50000.00</div>
      </div>
      </div>

      <div className="mt-2">
        <div>Bank of Baroda</div>
        <div className=" flex items-center  font-semibold text-customLightGreen ">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg ">50000.00</div>
      </div>
      </div>

      <div className="mt-2">
        <div>SBI Bank</div>
        <div className=" flex items-center  font-semibold text-customLightGreen ">
      <FaIndianRupeeSign className="  text-base mt-1" />
      <div className="text-lg ">50000.00</div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default DashboardMainRight