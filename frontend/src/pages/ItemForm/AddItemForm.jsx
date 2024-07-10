
import useItemStore from "../../zustand/useItemStore";
import ProductForm from "./ProductForm";

import ServicesForm from "./ServicesForm";


const AddItemForm = () => {
  const {isProductForm, setIsProductForm} = useItemStore()


  
  return (
    <div className="w-full   ">

    <div className="flex justify-around h-10 font-semibold text-gray-500">
     <button className={`bg-gray-100 w-1/2 ${isProductForm === "products" ? "border border-y-2 border-b-customGreen" : ""}`}
      onClick={() => setIsProductForm("products")}
    >Products </button>
     <button className={`bg-gray-100 w-1/2 ${isProductForm === "services" ? "border border-y-2 border-b-customGreen" : ""}`}
      onClick={() => setIsProductForm("services")}
     >Services</button>
    </div>
    {isProductForm === "products" ? <ProductForm/> : <ServicesForm/>}

   


    </div>

  )
}

export default AddItemForm