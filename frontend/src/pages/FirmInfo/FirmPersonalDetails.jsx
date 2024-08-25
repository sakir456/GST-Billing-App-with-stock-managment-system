

const FirmPersonalDetails = () => {
   
  return (
    <div>
        <div className="mt-6 relative ">
        <input
        placeholder="Enter Business Name"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Bussiness Name*</label>
        </div>
        <div className=" mt-6 relative ">
        <input
        placeholder="GSTIN"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">GSTIN</label>
        </div>
        <div className=" mt-6 relative ">
        <input
        placeholder="Phone No."
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Phone No.</label>
        </div>
        <div className=" mt-6 relative ">
        <input
        type="email"
        placeholder="Email"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        />
       <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Email</label>
        </div>
    </div>
  )
}

export default FirmPersonalDetails
