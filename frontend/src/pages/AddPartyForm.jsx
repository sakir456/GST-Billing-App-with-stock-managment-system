import { RxCross1 } from "react-icons/rx"
import usePartyStore from "../zustand/usePartyStore"



const AddPartyForm = () => {
  const {setIsParty} = usePartyStore()
  return (
    <form className= "px-10 py-5  ">
    <div className="flex justify-between text-lg font-medium  ">
    <div className="">Add Party</div>
    <RxCross1 className="mr-3 cursor-pointer"  onClick={() => setIsParty(false)}/>
    </div>
    <div className="flex items-center gap-5 my-5 ">
        <input placeholder="Party Name" className="py-1 px-2 border-2 border-gray-300
         rounded-md  outline-none focus:outline-customLightGreen"/>
        <input placeholder="GSTIN" className="py-1 px-2 border-2 border-gray-300 
        rounded-md outline-none focus:outline-customLightGreen "/>
    </div>
    
    <div className="mt-6 flex gap-28">
    <div className="flex">
    <div>
    <div className="text-lg font-medium ">Billing Address</div>
      <textarea placeholder="Billing Address" className=" h-32 w-80 mt-2 px-2  py-1 border-2 border-gray-300  
       outline-none  resize-none box-border focus:border-customLightGreen  rounded-md"/>
       </div>
       <div className="ml-5">
       <div className="text-lg font-medium  ">Shipping Address</div>
      <textarea placeholder="Shipping Address" className=" h-32 w-80 mt-2 px-2  py-1 border-2 border-gray-300  
       outline-none  resize-none box-border focus:border-customLightGreen  rounded-md "/>
       </div>
     </div>
   </div>
   <div className="text-lg font-medium mt-4">Opening Balance</div>
   <div className="flex items-center gap-5 my-5 ">
        <input placeholder="Amount" className="py-1 px-2 border-2 border-gray-300
         rounded-md  outline-none focus:outline-customLightGreen"/>
        <input placeholder="As Of Date" className="py-1 px-2 border-2 border-gray-300 
        rounded-md outline-none focus:outline-customLightGreen "/>
    </div>
    <div className="text-end mt-40">
      <button className="  items-center px-4 py-2  bg-customLightGreen text-white rounded-md">Save</button>
     </div>
     
    </form>
  )
}

export default AddPartyForm