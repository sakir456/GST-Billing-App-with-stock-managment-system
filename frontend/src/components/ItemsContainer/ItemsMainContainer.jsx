import { useState } from "react"
import ProductsPage from "../../pages/ProductsPage";


const ItemsMainContainer = () => {
    const [isProducts, setIsProducts] = useState("products")

    const toggleButton = (button) => {
        if (isProducts !== button) {
          setIsProducts(button);
        }
      };

  return (
    <div className="w-full ">
    <div className="flex justify-around h-10 font-semibold text-gray-500">
     <button className={`bg-gray-100 w-1/2 ${isProducts === "products" ? "border border-y-2 border-b-customGreen" : ""}`}
     onClick={() => toggleButton("products")}>Products</button>
     <button className={`bg-gray-100 w-1/2 ${isProducts === "services"? "border border-y-2 border-b-customGreen" : ""}`}
     onClick={() => toggleButton("services")}>Services</button>
    </div>
    <ProductsPage/>
    
    
    </div>
  )
}

export default ItemsMainContainer