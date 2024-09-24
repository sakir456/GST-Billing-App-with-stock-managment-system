import { RxCross1 } from "react-icons/rx";
import useGeneralStore from "../../zustand/useGeneralStore";
import InvoiceTemplate from "../../pages/InvoiceTemplate";
import { BsArrowDownCircle } from "react-icons/bs";
import { LuPrinter } from "react-icons/lu";

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
    <div className="flex items-center justify-evenly   ">
      <InvoiceTemplate/>
      <div className=" flex justify-end gap-5 bg-gray-200 ml-5 ">
      <div >
      <BsArrowDownCircle className="h-7 w-7" />
      </div>
      <div>
      <LuPrinter className="h-7 w-7" />
      </div>
      
      </div>
    </div>
   

   </div>
   
  );
};


  

export default InvoicePrintPage