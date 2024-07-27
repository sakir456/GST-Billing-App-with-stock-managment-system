import { FaRegTrashAlt } from "react-icons/fa"
import { FiBox } from "react-icons/fi"
import { LuPencil } from "react-icons/lu"
import useSaleStore from "../../zustand/useSaleStore"


const SalesMainContainer = () => {  
      const {setIsSaleForm} = useSaleStore()
  return (
 
         <div className="m-4">
    <div className="flex justify-between ">
          <div className="flex items-center gap-2 ">
            <FiBox className="text-customLightGreen bg-green-100 rounded-full" />
            <p className="font-medium">Sales Invoices</p>
          </div>
          <div className="flex gap-5">
            <input type="search" placeholder="Search" className="py-1 pl-3 w-60 bg-gray-100 outline-none text-sm"
            
             
            />
            <button className="flex items-center px-2 py-1 bg-customLightGreen text-white rounded-md" onClick={() => setIsSaleForm(true) }  >
              + Add Sale
            </button>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex h-10 px-2 items-center bg-gray-100 border-2 border-gray-300 font-medium">
            <div className="w-1/5 text-center">Date</div>
             <div className="w-1/5 text-center">Invoice No.</div>
            <div className="w-1/5 text-center">Party Name</div>
            <div className="w-1/5 text-center">Amount</div>
            <div className="w-1/5 text-center">Action</div>
            </div>

    
           
              <div className="flex h-10 px-2 items-center border border-b-2 border-x-2 border-gray-300" >
                <div className="w-1/5 text-center">1/5/24</div>
                <div className="w-1/5 text-center">405</div>
                <div className="w-1/5 text-center">shree raju tractor</div>
                <div className="w-1/5 text-center">5000</div>
                <div className="w-1/5 h-full flex justify-center gap-3 text-center relative">
                  <button className="text-center group"  >
                    <LuPencil  />
                    <span className="absolute hidden group-hover:block -bottom-4 left-24 bg-customLightGreen text-white text-xs rounded py-1 px-2">Edit</span>
                  </button>
                  <button className="text-center group"  >
                    <FaRegTrashAlt />
                    <span className="absolute hidden group-hover:block -bottom-4 right-20 bg-customLightGreen text-white text-xs rounded py-1 px-2">Delete</span>
                  </button>
                </div>
                </div> 

            
         
          </div>
</div>
    
  )
}

export default SalesMainContainer