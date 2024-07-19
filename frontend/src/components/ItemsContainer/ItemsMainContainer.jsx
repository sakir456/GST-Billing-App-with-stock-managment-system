
import ProductsPage from "../../pages/ProductsPage";
import ServicesPages from "../../pages/ServicesPages";
import useItemStore from "../../zustand/useItemStore";


const ItemsMainContainer = () => {
    const {isProducts, setIsProducts} = useItemStore();

   

  return (
    <div className="w-auto ">
    <div className="flex justify-around h-10 font-semibold text-gray-500">
     <button className={`bg-gray-100 w-1/2 ${isProducts === "products" ? "border border-y-2 border-b-customGreen" : ""}`}
     onClick={() => setIsProducts("products")}>Products</button>
     <button className={`bg-gray-100 w-1/2 ${isProducts === "services"? "border border-y-2 border-b-customGreen" : ""}`}
     onClick={() => setIsProducts("services")}>Services</button>
    </div>
    {isProducts === "products" ? <ProductsPage/>: <ServicesPages/> }
    
    
    
    </div>
  )
}

export default ItemsMainContainer