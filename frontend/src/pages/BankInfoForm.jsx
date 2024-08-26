import { RxCross1 } from "react-icons/rx"


const BankInfoForm = () => {
  return (
    <div>
        <form className="px-10 py-5">
        <div className="flex justify-between text-lg font-medium">
        <div>Enter Bank Details</div>
        <RxCross1 className="mr-3 cursor-pointer"  />
        </div>
         
         <div className=" mt-5 flex  gap-8 ">
        <div className="mt-6 relative ">
        <input
        placeholder=" Bank Name"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Bank Name</label>
        </div>

        <div className="mt-6 relative ">
        <input
        placeholder="Account No."
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Account No.</label>
        </div>
        </div>
         
         <div className=" mt-5 flex gap-8">
        <div className="mt-6 relative ">
        <input
        placeholder=" Bank Ifsc"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Bank Ifsc</label>
        </div>

        <div className="mt-6 relative ">
        <input
        placeholder="Address"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Address</label>
        </div>
        </div>

        <div  className=" flex justify-end">
      <button className="mt-8 items-center px-4 py-2 text-white rounded-md bg-customLightGreen">Save</button>
      </div>
    

        </form>
    </div>
  )
}

export default BankInfoForm