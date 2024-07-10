import SelectUnit from "../../utils/SelectUnit";
import TaxRate from "../../utils/TaxRate";
import { RxCross1 } from "react-icons/rx";


const ProductForm = () => {
  return (

    <form className= "px-10 py-5 ">
    <div className="flex justify-between text-lg font-medium  ">
    <div className="">Add Item</div>
    <RxCross1 className="mr-3 cursor-pointer"/>
    </div>
    <div className="flex items-center gap-5 my-5 ">
        <input placeholder="Item Name " className="py-1 px-2 border-2 border-gray-300
         rounded-md  outline-none focus:outline-customLightGreen"/>
        <input placeholder="Item HSN" className="py-1 px-2 border-2 border-gray-300 
        rounded-md outline-none focus:outline-customLightGreen "/>
        <SelectUnit/>
        
    </div>
    <div>
    <input placeholder="Category"  className="py-1 px-2 border-2 border-gray-300
     rounded-md outline-none focus:outline-customLightGreen "/>
    </div>
    <div className="mt-6 flex gap-28">
    <div>
    <div className="text-lg font-medium">Sale Price</div>
      <input placeholder="Sale Price" className="my-3 py-1 px-2 border-2 border-gray-300  outline-none "/>
      <select defaultValue="Without Tax" className="py-1 px-2 border-2 border-gray-300 border-l-0  ">
      <option value="" className="hover:bg-gray-300">Without Tax</option>
      <option value="" className="hover:bg-gray-300">With Tax</option>
      </select>
      </div>
      <div>
    <div className="text-lg font-medium">Tax Rate</div>
    <TaxRate />
     </div>
    </div>

    <div className="mt-6">
    <div>
    <div className="text-lg font-medium">Purchase Price</div>
      <input placeholder="Purchase Price" className="my-3 py-1 px-2 border-2 border-gray-300 outline-none "/>
      <select defaultValue="Without Tax" className="py-1 px-2 border-2 border-gray-300 border-l-0 ">
      <option value="">Without Tax</option>
      <option value="">With Tax</option>
      </select>
      </div>
     
    </div>
    
     <div className="mt-6  ">
     <div className="text-lg font-medium">Stock</div>
     <input placeholder="Opening Quantity" className="my-3 py-1 px-2 border-2 border-gray-300 rounded-md  
     outline-none focus:outline-customLightGreen"/>
     <input placeholder="At Price" className="my-3 mx-5 py-1 px-2 border-2 border-gray-300 rounded-md   
     outline-none focus:outline-customLightGreen"/>
     </div>
     <div className="text-end">
      <button className=" mt-8 items-center px-4 py-2  bg-customLightGreen text-white rounded-md">Save</button>
     </div>
     
    </form>

  )
}

export default ProductForm