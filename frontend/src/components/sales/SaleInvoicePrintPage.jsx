import { RxCross1 } from "react-icons/rx";
import useSaleStore from "../../zustand/useSaleStore";

const SaleInvoicePrintPage = () => {
  const {setSaleInvoicePrintPage}  = useSaleStore()
   const handleCrossButton = () => {
       setSaleInvoicePrintPage(false)
   }
   return (
   <div>
   PrintPAge
    <button onClick={handleCrossButton}>
      <RxCross1/>
    </button>
   </div>
   
  );
};


  

export default SaleInvoicePrintPage