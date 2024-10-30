
import ProductsPage from "../../pages/ProductsPage";


const ItemsMainContainer = () => {
   

   

  return (
    <div className="w-auto ">
    <div className="flex justify-around h-10 font-semibold text-gray-500">
     <button className="bg-gray-100 w-full border border-y-2 border-b-customGreen"
     >Products</button>
    </div>
    <ProductsPage/>
   </div>
  )
}

export default ItemsMainContainer