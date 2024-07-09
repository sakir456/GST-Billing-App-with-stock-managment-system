import { FiBox } from "react-icons/fi";

const ProductsPage = () => {
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
         <button className="flex items-center px-2 py-1  bg-customLightGreen text-white rounded-md">+ Add Item</button>
       </div>
      </div>

      <div className="mt-3 ">
        <div className="flex h-10  px-2   items-center bg-gray-100   border-t-2 border-b-2  border-gray-300 font-medium ">
        <div className="w-1/6 ">Name</div>
        <div className="w-1/6">Category</div>
        <div className="w-1/6">Purchase price</div>
         <div className="w-1/6">Opening Stock</div>
        <div className="w-1/6">In Hand</div>
        <div className="w-1/6">Actions</div>

        </div>

       
      </div>

      </div>
    </div>
  )
}

export default ProductsPage