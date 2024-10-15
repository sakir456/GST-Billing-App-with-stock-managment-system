

import useGeneralStore from "../../zustand/useGeneralStore";
import Searchbar from "../Dashboard/Searchbar";
import InvoicePrintPage from "./InvoicePrintPage";
import SalesMainContainer from "./SalesMainContainer";



const SalesContainer = () => {
   const {invoicePrintPage} = useGeneralStore();
   


 
   
return (
    <div>
      {invoicePrintPage ? (
        <InvoicePrintPage />
      ) : (
        <div>
        <div>
        <Searchbar/>
        <SalesMainContainer/>  
        </div>
        </div>
      )}
    </div>
    
  )
}

export default SalesContainer