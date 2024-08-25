

const FirmAddress = () => {
  return (
    <div className="mt-4">
    <div className="flex">
        <span className="  border-b-4 border-b-customGreen px-4 ">Business details </span>
        <span className=" w-[420px]  border-b border-b-gray-300  " ></span>
        </div>
        <div className="flex gap-12">
        <div >
        <div className="mt-6 relative">
        <textarea
         placeholder="Address"
          className=" h-20 w-64 mt-2 px-2  py-1 border-2 border-gray-300  
        outline-none  resize-none box-border   rounded-md"
        name="billingAddress"
         />
         <label className="absolute text-[11px] font-medium text-customLightGreen bg-white top-0 left-2">Address</label>
         </div>

         <div className=" mt-6 relative ">
        <input
       placeholder="Pincode"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Pincode</label>
        </div>

        <div className=" mt-6 relative ">
        <input
         placeholder="State"
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">State</label>
        </div>

        <div className=" mt-6 relative ">
        <input
         placeholder="Description"
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Description</label>
        </div>
        </div>
        <div>
        <div className=" mt-6 relative ">
        <input
         placeholder="Bussiness Type"
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Bussiness Type</label>
        </div>
        <div className=" mt-6 relative ">
        <input
         placeholder="Bussiness category"
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Bussiness category</label>
        </div>


        </div>
        </div>
    </div>
  )
}

export default FirmAddress