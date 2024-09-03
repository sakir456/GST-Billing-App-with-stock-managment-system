import useSidebarStore from "../../zustand/useSidebarStore"


const FirmAddress = () => {
  const {isFirmAddressData, setIsFirmAddressData} = useSidebarStore();
  const handleInputChange =  (field,value) => {
    if (field === "pincode") {
      value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    }
    setIsFirmAddressData({...isFirmAddressData,[field]: value})
  }
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
        value={isFirmAddressData.address}
         placeholder="Address"
          className=" h-20 w-64 mt-2 px-2  py-1 border-2 border-gray-300  
        outline-none  resize-none box-border   rounded-md"
        name="billingAddress"
        onChange={(e) => handleInputChange("address", e.target.value)}
         />
         {isFirmAddressData.address !=="" && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white top-0 left-2">Address</label>
         )}
        </div>

         <div className=" mt-6 relative ">
        <input
        type="text"
        value={isFirmAddressData.pincode}
       placeholder="Pincode"
        className=" w-64 py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        onChange={(e) => handleInputChange("pincode", e.target.value)}
        />
        {isFirmAddressData.pincode && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Pincode</label>
        )}
      </div>

        <div className=" mt-6 relative ">
        <input
        value={isFirmAddressData.state}
         placeholder="State"
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        onChange={(e) => handleInputChange("state", e.target.value)}
        />
        {isFirmAddressData.state && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">State</label>
        )}
       
        </div>

        <div className=" mt-6 relative ">
        <input
         value={isFirmAddressData.description}
         placeholder="Description"
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        onChange={(e) => handleInputChange("description", e.target.value)}
        />
        {isFirmAddressData.description  && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Description</label>
        )}
       </div>
        </div>
        <div>
        <div className=" mt-6 relative ">
        <input
         value={isFirmAddressData.businessType}
         placeholder="Bussiness Type"
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        onChange={(e) => handleInputChange("businessType", e.target.value)}
        />
        {isFirmAddressData.businessType && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Bussiness Type</label>
        )}
       
        </div>
        <div className=" mt-6 relative ">
        <input
        value={isFirmAddressData.businessCategory}
         placeholder="Bussiness category"
        className=" w-64  py-1 px-2 border-2 border-gray-300 rounded-md outline-none  "
        onChange={(e) => handleInputChange("businessCategory", e.target.value)}
        />
        {isFirmAddressData.businessCategory && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2">Business category</label>
        )}
     
        </div>


        </div>
        </div>
    </div>
  )
}

export default FirmAddress