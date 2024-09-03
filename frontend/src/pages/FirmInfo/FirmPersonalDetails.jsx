import useSidebarStore from "../../zustand/useSidebarStore"


const FirmPersonalDetails = () => {
  const {isFirmPersonalData, setIsFirmPersonalData} = useSidebarStore()
   const handleInputChange = (field,value) => {

    if (field === "phoneNo") {
      value = value.replace(/[^0-9,]/g, ''); // Remove non-numeric characters
    }
    setIsFirmPersonalData({...isFirmPersonalData, [field]: value})
   }
  return (
    <div>
        <div className="mt-6 relative ">
        <input
        value={isFirmPersonalData.businessName}
        placeholder="Enter Business Name"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        onChange={(e)=> handleInputChange("businessName", e.target.value)}
        />
        {isFirmPersonalData.businessName !== "" &&(
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Business Name*</label>
        )}
       </div>
        <div className=" mt-6 relative ">
        <input
         value={isFirmPersonalData.gstin}
        placeholder="GSTIN"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        onChange={(e)=> handleInputChange("gstin", e.target.value)}
        />
        {isFirmPersonalData.gstin !== "" && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">GSTIN</label>
        )}
       
        </div>
        <div className=" mt-6 relative ">
        <input
         type='text'
        value={isFirmPersonalData.phoneNo}
        placeholder="Phone No."
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        onChange={(e)=> handleInputChange("phoneNo", e.target.value)}
        />
        {isFirmPersonalData.phoneNo !=="" && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Phone No.</label>
        )}
       
        </div>
        <div className=" mt-6 relative ">
        <input
         value={isFirmPersonalData.email}
        type="email"
        placeholder="Email"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
        onChange={(e)=> handleInputChange("email", e.target.value)}
        />
        {isFirmPersonalData.email !=="" && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Email</label>
        )}
       </div>
    </div>
  )
}

export default FirmPersonalDetails
