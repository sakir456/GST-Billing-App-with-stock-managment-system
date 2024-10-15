
import useGeneralStore from "../../zustand/useGeneralStore";
import Searchbar from "../Dashboard/Searchbar";
import InvoicePrintPage from "../sales/InvoicePrintPage";
import PurchaseMainContainer from "./PurchaseMainContainer";




const PurchaseContainer = () => {

  const {invoicePrintPage} = useGeneralStore();


  return (
    <div>
      {invoicePrintPage ? (
       <InvoicePrintPage />
      ) : (
        <div>
        <div>
        <Searchbar/>
        <PurchaseMainContainer/>
        </div>
        </div>
      )}
    </div>
    
  )
}

export default PurchaseContainer