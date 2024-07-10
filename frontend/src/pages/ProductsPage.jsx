
import { FiBox } from "react-icons/fi";
import useItemStore from "../zustand/useItemStore";

const ProductsPage = () => {
  const {isAddingItem,  setIsAddingItem} = useItemStore();
  

  
  return (
    <div className="">
      <div className="m-4">
      <div className="flex justify-between">
       <div className="flex items-center gap-2 ">
       <FiBox className="text-customLightGreen bg-green-100 rounded-full"/>
       <p className="font-medium">Inventory Managment</p>
       </div>
       <div className="flex gap-5">
         <input type="text" placeholder="Search" className="py-1 pl-3  bg-gray-100 outline-none text-sm"/>
         <button className="flex items-center px-2 py-1  bg-customLightGreen text-white rounded-md"
          onClick={()=> setIsAddingItem(true)}>
          + Add Item

          </button>
       </div>
      </div>

      <div className="mt-3 ">
        <div className="flex h-10  px-2   items-center bg-gray-100   border-2 border-gray-300 font-medium ">
        <div className="w-1/6 text-center ">Item Name</div>
        <div className="w-1/6 text-center">Category</div>
        <div className="w-1/6 text-center">Purchase price</div>
         <div className="w-1/6 text-center">Opening Stock</div>
        <div className="w-1/6 text-center">In Hand</div>
        <div className="w-1/6 text-center">Actions</div>

        </div>

        <div className="flex h-10  px-2   items-center border  border-b-2 border-x-2  border-gray-300  ">
        <div className="w-1/6 text-center ">G1001-5</div>
        <div className="w-1/6 text-center">cores</div>
        <div className="w-1/6 text-center">5000000.00</div>
         <div className="w-1/6 text-center">500</div>
        <div className="w-1/6 text-center">200</div>
        <div className="w-1/6 text-center">Actions</div>

        </div>

       
      </div>

      </div>
    </div>
  )
}

export default ProductsPage