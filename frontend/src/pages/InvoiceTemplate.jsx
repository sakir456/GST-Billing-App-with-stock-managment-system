

import useGetInvoice from "../hooks/invoices/useGetInvoice";
import { numberToWords } from "../utils/ConvertToWord";
import useBankStore from "../zustand/useBankStore";
import useSettingsStore from "../zustand/useSettingsStore";
import useSidebarStore from "../zustand/useSidebarStore";


const InvoiceTemplate = () => {
  const {firmInfo} = useSidebarStore();
  const {bankData} = useBankStore()
  const { fetchInvoice, invoice} = useGetInvoice()
  const {termsAndConditionsData} = useSettingsStore()
  

  const formatInvoiceDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

   function extractNumberAndFormat(inputString) {
    
      const number = inputString.replace(/\D/g, ''); 
    return number ? `(${parseInt(number)}%)` : '';
   }

  const getHSNCode = (itemName) => {
    const item = invoice?.itemDetails?.find((itemDetail) => itemDetail.itemName ===itemName)
    return item ? item.hsnCode : ""
  }

  const saleItems = invoice?.invoice?.saleItems || []
  
  const TotalTaxInAmount  = saleItems.reduce((sum,item) => {
    return sum + (item?.TaxInAmount || 0)
  }, 0)
  const formattedTotalTaxInAmount =  (TotalTaxInAmount).toFixed(2)

  const TotalAmount = saleItems.reduce((sum, item) => {
    return sum + ((item?.Amount -item?.TaxInAmount) || 0)
  }, 0)

  const shipDetails = invoice?.partyDetails?.shippingAddress



  
  
  return (
    <div className="  p-1 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-5 rounded-md shadow-md">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4">
        {firmInfo?.logo && (
        <div>
          <img src={firmInfo?.logo} className="w-20 h-20"/>
        </div>
      )}
          <div>
            <h1 className="text-3xl font-bold text-customLightGreen">{firmInfo?.businessName || "Your Company Name"}</h1>
            <p className="text-sm">{firmInfo?.address || "Your Company Address"}</p>
            <p className="text-sm">{firmInfo?.phoneNo || "PhoneNo"}</p>
            <p className="text-sm">{firmInfo?.email || "Email"}</p>
            <p className="text-sm">{firmInfo?.gstin }</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">Tax Invoice</h2>
            <div className="flex justify-center items-center">
            <p>Invoice No:</p>
            <p className="text-sm">{invoice?.invoice?.invoiceNo}</p>
            </div>
            <div className="flex justify-center items-center">
            <p>Date:</p>
            <p className="text-sm">{invoice?.invoice?.invoiceDate ? formatInvoiceDate(invoice?.invoice?.invoiceDate )
            : formatInvoiceDate(new Date())}</p>
            </div>
          </div>
        </div>

        {/* Bill To Section */}
        <div className="mt-6 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">Bill To:</h3>
          <p className="text-sm">{invoice?.partyDetails?.partyName}</p>
          <p className="text-sm ">{invoice?.partyDetails?.GSTIN}</p>
          <p className="text-sm">{invoice?.partyDetails?.billingAddress}</p>
          </div>
          <div>
        { shipDetails && (
          <div>
          <h3 className="text-lg font-semibold">Ship To:</h3>
          <p className="text-sm">{invoice?.partyDetails?.shippingAddress}</p>
          </div>
        )}
          
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-2 text-sm font-semibold ">#</th>
                <th className="p-2  text-sm font-semibold">Item Name</th>
                <th className="p-2  text-sm font-semibold">HSN/SAC</th>
                <th className="p-2  text-sm font-semibold">Quantity</th>
                <th className="p-2  text-sm font-semibold">Price/unit</th>
                <th className="p-2  text-sm font-semibold">Discount</th>
                <th className="p-2  text-sm font-semibold">GST</th>
                <th className="p-2  text-sm font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              
              {saleItems.map((saleItem, index)=> (
                <tr className="border-b" key={index}>
                <td className="p-2 text-sm text-center ">{index+1}</td>
                <td className="p-2 text-sm text-center">{saleItem?.itemName}</td>
                <td className="p-2 text-sm text-center">{getHSNCode(saleItem?.itemName)}</td>
                <td className="p-2 text-sm text-center">{saleItem?.qty || ""}</td>
                <td className="p-2 text-sm text-center">{saleItem?.price || ""}</td>
                <td className="p-2 text-sm text-center">{saleItem?.discountAmount || ""}</td>
                <td className="p-2 text-sm flex items-center">
                {saleItem?.TaxInAmount || ""}
                <div className="">{extractNumberAndFormat(saleItem?.TaxInPercent) || ""}</div>
                </td>
                <td className="p-2 text-sm text-center">{saleItem?.Amount || ""}</td>
              </tr>
              ))}
              
              {/* More rows... */}
            </tbody>
          </table>
        </div>

        {/* Total Section */}
        <div className="flex justify-end mt-6">
          <div className="w-1/2">
          <div className="flex justify-between py-1">
              <span className="font-semibold">Total Amount:</span>
              <span>{TotalAmount}</span>
            </div>
          <div className="flex justify-between py-1">
              <span className="font-semibold">SGST</span>
              <span>{((formattedTotalTaxInAmount )/2) || ""}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">CGST</span>
              <span>{((formattedTotalTaxInAmount )/2) || ""}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">P&F</span>
              <span>{invoice?.invoice?.pandfAmount || 0.00 }</span>
            </div>

            <div className="flex justify-between py-1">
              <span className="font-semibold">Total:</span>
              <span>{invoice?.invoice?.grandTotal || ""}(Rounded off)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Invoice Amount in Words:</span>
              <span>{numberToWords(invoice?.invoice?.grandTotal) || ""}</span>
            </div>
            
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8 border-t pt-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-semibold">Bank Details:</p>
              <div className="flex items-center gap-1">
              <p>Bank Name:</p>
              <p className="text-sm">{bankData.bankName}</p>
              </div>
              <div className="flex items-center gap-1">
              <p>Account No:</p>
              <p className="text-sm">{bankData.accountNO}</p>
              </div>
              <div className="flex items-center gap-1">
              <p>Bank Ifsc:</p>
              <p className="text-sm">{bankData.bankIfsc}</p>
              </div>
              <div className="flex items-center gap-1">
              <p>Branch:</p>
              <p className="text-sm">{bankData.address}</p>
              </div>
              </div>
            <div className="text-right">
              <p className="text-sm">Authorized Signatory</p>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p >Terms and Conditions:</p>
            <p className="w-1/3" >{termsAndConditionsData?.termsAndConditions}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
