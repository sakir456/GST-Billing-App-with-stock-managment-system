import { RxCross1 } from "react-icons/rx";
import useGeneralStore from "../../zustand/useGeneralStore";
import InvoiceTemplate from "../../pages/InvoiceTemplate";
import html2pdf from "html2pdf.js";


const InvoicePrintPage = () => {
 const {setInvoicePrintPage} = useGeneralStore();

   const handleCrossButton = () => {
    setInvoicePrintPage(false)
   }

   const handlePrint = () => {
    window.print(); 
  };

  const handleDownloadPDF = async () => {
    const invoiceElement = document.getElementById("invoice-template"); 

    const adjustedWidth = invoiceElement.offsetWidth * 0.82;
  
    const options = {
      margin: [0, 0.2, 0, 0.2],
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 1.0 }, 
      html2canvas: {
        scale: 2, 
        width: adjustedWidth,
        logging: true,
        useCORS: true, 
      },
      jsPDF: {
        unit: 'in', 
        format: 'a4', 
        orientation: 'landscape', 
      },
    };
  
    setTimeout(() => {
      html2pdf()
        .from(invoiceElement)
        .set(options)
        .save()
        .catch((error) => console.error("PDF generation failed: ", error));
    }, 500); 
  }
   return (
    <div>
   <div className="flex justify-end">
    <button onClick={handleCrossButton} className="mt-4 mr-4">
      <RxCross1 
      />
    </button>
    </div>
    <div className="flex items-end">
    
      <InvoiceTemplate/>
      
      <div className=" flex gap-5  ">
      <button className="bg-customGreen px-8 py-2 text-white rounded-md hover:bg-customLightGreen" onClick={handlePrint}>Print</button>
      <button className="bg-customGreen px-8 py-2 text-white rounded-md hover:bg-customLightGreen" onClick={handleDownloadPDF} >Download as PDf</button>
      
       </div>
    </div>


   </div>
   
  );
};


  

export default InvoicePrintPage


