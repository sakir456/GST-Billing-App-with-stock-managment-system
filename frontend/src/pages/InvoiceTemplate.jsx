

const InvoiceTemplate = () => {
  return (
    <div className="p-3 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-5 rounded-md shadow-md">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">FAMOUS RADIATORS</h1>
            <p className="text-sm">04, shreeji complex beside ramada hotel NH no 8 asdeerhwar bharuch</p>
            <p className="text-sm">Phone: 9091719995/9094741661</p>
            <p className="text-sm">Email: famous.radiators@gmail.com</p>
            <p className="text-sm">GSTIN: 24AUGPS1596B1ZR</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">Tax Invoice</h2>
            <p className="text-sm">Invoice No: GST/2024-25/287</p>
            <p className="text-sm">Date: 20-08-2024</p>
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
                <th className="p-2 text-left text-sm font-semibold">#</th>
                <th className="p-2 text-left text-sm font-semibold">Item Name</th>
                <th className="p-2 text-left text-sm font-semibold">HSN/SAC</th>
                <th className="p-2 text-left text-sm font-semibold">Quantity</th>
                <th className="p-2 text-left text-sm font-semibold">Price/unit</th>
                <th className="p-2 text-left text-sm font-semibold">Discount</th>
                <th className="p-2 text-left text-sm font-semibold">Tax</th>
                <th className="p-2 text-left text-sm font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with dynamic rows */}
              <tr className="border-b">
                <td className="p-2 text-sm">1</td>
                <td className="p-2 text-sm">Item 1</td>
                <td className="p-2 text-sm">1234</td>
                <td className="p-2 text-sm">10</td>
                <td className="p-2 text-sm">₹100.00</td>
                <td className="p-2 text-sm">₹100.00</td>
                <td className="p-2 text-sm">₹100.00</td>
                <td className="p-2 text-sm">₹1000.00</td>
              </tr>
              {/* More rows... */}
            </tbody>
          </table>
        </div>

        {/* Total Section */}
        <div className="flex justify-end mt-6">
          <div className="w-1/2">
            <div className="flex justify-between py-1">
              <span className="font-semibold">Total:</span>
              <span>₹1000.00</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Invoice Amount in Words:</span>
              <span>Zero</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Payment Mode:</span>
              <span>Credit</span>
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
