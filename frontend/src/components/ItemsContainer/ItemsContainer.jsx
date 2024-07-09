import Searchbar from "../Dashboard/Searchbar"
import ItemsMainContainer from "./ItemsMainContainer"


const ItemsContainer = () => {
  return (
    <div className="w-auto flex flex-col  ">
      <Searchbar/>
      <ItemsMainContainer/>
      
    </div>
  )
}

export default ItemsContainer