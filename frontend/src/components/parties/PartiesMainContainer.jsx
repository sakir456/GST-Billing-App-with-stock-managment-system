import { FaRegTrashAlt } from "react-icons/fa"
import { FiBox } from "react-icons/fi"
import { LuPencil } from "react-icons/lu"
import usePartyStore from "../../zustand/usePartyStore"


const PartiesMainContainer = () => {
    const {setIsParty} = usePartyStore();
  return (
    <div className="m-4">
    <div className="flex justify-between ">
          <div className="flex items-center gap-2 ">
            <FiBox className="text-customLightGreen bg-green-100 rounded-full" />
            <p className="font-medium">Parties List</p>
          </div>
          <div className="flex gap-5">
            <input type="search" placeholder="Search" className="py-1 pl-3 bg-gray-100 outline-none text-sm"/>
            <button className="flex items-center px-2 py-1 bg-customLightGreen text-white rounded-md" onClick={() => setIsParty(true)} >
              + Add Party
            </button>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex h-10 px-2 items-center bg-gray-100 border-2 border-gray-300 font-medium">
            <div className="w-1/4 text-center">Party Name</div>
             <div className="w-1/4 text-center">To Pay/Collect</div>
            <div className="w-1/4 text-center">Amount</div>
            <div className="w-1/4 text-center">Action</div>

          </div>
          <div className="flex h-10 px-2 items-center border border-b-2 border-x-2 border-gray-300">
                <div className="w-1/4 text-center">Shree Raju Tractors</div>
                <div className="w-1/4 text-center"> To Collect</div>
                <div className="w-1/4 text-center">40000</div>
                <div className="w-1/4 h-full flex justify-center gap-3 text-center relative">
                  <button className="text-center group" >
                    <LuPencil />
                    <span className="absolute hidden group-hover:block -bottom-4 left-14 bg-customLightGreen text-white text-xs rounded py-1 px-2">Edit</span>
                  </button>
                  <button className="text-center group" >
                    <FaRegTrashAlt />
                    <span className="absolute hidden group-hover:block -bottom-4 right-9 bg-customLightGreen text-white text-xs rounded py-1 px-2">Delete</span>
                  </button>
                </div>
                </div> 
          </div>
</div>
  )
}

export default PartiesMainContainer