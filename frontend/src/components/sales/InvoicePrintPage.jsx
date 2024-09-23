import { RxCross1 } from "react-icons/rx";
import useGeneralStore from "../../zustand/useGeneralStore";
import InvoiceTemplate from "../../pages/InvoiceTemplate";

const InvoicePrintPage = () => {
 const {setInvoicePrintPage} = useGeneralStore();

   const handleCrossButton = () => {
    setInvoicePrintPage(false)
   }
   return (
    <div>
   <div className="flex justify-end">
    <button onClick={handleCrossButton} className="mt-4 mr-4">
      <RxCross1 
      />
    </button>
    </div>
    <div>
      <InvoiceTemplate/>
    </div>
   

   </div>
   
  );
};


  

export default InvoicePrintPage