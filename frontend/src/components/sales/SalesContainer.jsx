
import useSaleStore from "../../zustand/useSaleStore";
import Searchbar from "../Dashboard/Searchbar";
import SaleInvoicePrintPage from "./SaleInvoicePrintPage";
import SalesMainContainer from "./SalesMainContainer";

const SalesContainer = () => {

  const {saleInvoicePrintPage} = useSaleStore()
  return (
    <div>
      {saleInvoicePrintPage ? (
        <SaleInvoicePrintPage />
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