
import AddItemForm from "../../pages/ItemForm/AddItemForm";
import useItemStore from "../../zustand/useItemStore";
import Searchbar from "../Dashboard/Searchbar"
import ItemsMainContainer from "./ItemsMainContainer"


const ItemsContainer = () => {
  const {isAddingItem } = useItemStore();

  return (
    <div className="w-auto flex flex-col  ">
      <Searchbar/>
      {isAddingItem ? <AddItemForm /> : <ItemsMainContainer/>}
      
      
    </div>
  )
}

export default ItemsContainer