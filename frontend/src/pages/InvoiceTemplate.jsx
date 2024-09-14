

import { numberToWords } from "../utils/ConvertToWord";
import useItemStore from "../zustand/useItemStore";
import useSaleStore from "../zustand/useSaleStore";
import useSidebarStore from "../zustand/useSidebarStore";


const InvoiceTemplate = () => {
  const {firmInfo} = useSidebarStore();
  const { savedInvoiceData, itemsTotal} = useSaleStore();
  const {  itemInfo } = useItemStore();

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

  const invoiceItems = savedInvoiceData?.saleItems
  
  return (
    <div className="p-3 bg-gray-50">
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
            <p className="text-sm">{savedInvoiceData?.invoiceNo}</p>
            </div>
            <div className="flex justify-center items-center">
            <p>Date:</p>
            <p className="text-sm">{savedInvoiceData?.invoiceDate ? formatInvoiceDate(savedInvoiceData?.invoiceDate)
            : formatInvoiceDate(new Date())}</p>
            </div>
          </div>
        </div>

        {/* Bill To Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Bill To:</h3>
          <p className="text-sm">AAKASH</p>
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
              
              {invoiceItems.map((item)=> (
                <tr className="border-b" key={item.index}>
                <td className="p-2 text-sm text-center ">1</td>
                <td className="p-2 text-sm text-center">{item?.itemName || ""}</td>
                <td className="p-2 text-sm text-center">8708</td>
                <td className="p-2 text-sm text-center">{item?.qty || ""}</td>
                <td className="p-2 text-sm text-center">{item?.price || ""}</td>
                <td className="p-2 text-sm text-center">{item?.discountAmount || ""}</td>
                <td className="p-2 text-sm flex items-center">
                {item?.TaxInAmount || ""}
                <div className="">{extractNumberAndFormat(item?.TaxInPercent) || ""}</div>
                </td>
                <td className="p-2 text-sm text-center">{item?.Amount || ""}</td>
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
              <span>{itemsTotal.totalAmount}</span>
            </div>
          <div className="flex justify-between py-1">
              <span className="font-semibold">SGST%</span>
              <span>{((itemsTotal.totalTaxAmount)/2) || ""}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">CGST%</span>
              <span>{((itemsTotal.totalTaxAmount)/2) || ""}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">P&F</span>
              <span>{savedInvoiceData?.pandfAmount || 0.00 }</span>
            </div>

            <div className="flex justify-between py-1">
              <span className="font-semibold">Total:</span>
              <span>{savedInvoiceData?.grandTotal || ""}(Rounded off)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Invoice Amount in Words:</span>
              <span>{numberToWords(savedInvoiceData?.grandTotal) || ""}</span>
            </div>
            
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8 border-t pt-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-semibold">Bank Details:</p>
              <p className="text-sm">ICICI BANK LIMITED, BHARUCH</p>
              <p className="text-sm">Account No.: 017805601706</p>
              <p className="text-sm">IFSC Code: ICIC0000176</p>
              <p className="text-sm">Account Holders Name: FAMOUS RADIATORS</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Authorized Signatory</p>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p>Terms and Conditions:</p>
            <p> Subject to Bharuch Jurisdiction only.</p>
            <p>2 Any complaint of the goods should be informed within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
