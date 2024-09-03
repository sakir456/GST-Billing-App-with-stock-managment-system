import Searchbar from "../Dashboard/Searchbar";
import PartiesMainContainer from "./PartiesMainContainer";
import usePartyStore from "../../zustand/usePartyStore";
import AddPartyForm from "../../pages/AddPartyForm";


const PartiesContainer = () => {
  const {isParty} = usePartyStore();
  return (
    <div>
    {isParty ? (
      <AddPartyForm/>  
    ) : (
      <div>
          <Searchbar/>
         <PartiesMainContainer/>
    </div>
    )}
    
    </div>
  )
}

export default PartiesContainer