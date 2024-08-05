import { FaRegTrashAlt } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import useSaleStore from "../../zustand/useSaleStore";
import useGetInvoices from "../../hooks/invoices/useGetInvoices";
import LoadingSpinnerNew from "../LoadingSpinnerNew";
import useDeleteInvoice from "../../hooks/invoices/useDeleteInvoice";

const SalesMainContainer = () => {
  const { setIsSaleForm, setIsUpdateForm, setSaleItems, setPartyInfo, setGrandTotal, setInvoiceId } = useSaleStore();
  const { invoices, loading, fetchInvoices } = useGetInvoices();
  const { deleteInvoice, isLoading } = useDeleteInvoice();

  const formatInvoiceDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleUpdateBtn = (invoice) => {
    setIsSaleForm(true);
    setIsUpdateForm(true);
    setSaleItems(invoice.saleItems);
    setPartyInfo(invoice);
    setGrandTotal(invoice);
    setInvoiceId(invoice._id);
  };

  const handleDeleteBtn = async (invoiceId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteInvoice(invoiceId);
        await fetchInvoices(); // Fetch invoices after deletion
      } catch (error) {
        console.error('Error deleting invoice:', error);
      }
    }
  };

  const handleAddSaleBtn = () => {
    setIsSaleForm(true);
    setIsUpdateForm(false);
    setSaleItems([{ id: 1, itemName: "", qty: 0, price: 0, discountPercent: "", discountAmount: 0, TaxInPercent: "", TaxInAmount: 0, Amount: 0 }]); // Reset sale items when adding a new sale
  };

  return (
    <div>
      {loading || isLoading ? (
        <LoadingSpinnerNew />
      ) : (
        <div className="m-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FiBox className="text-customLightGreen bg-green-100 rounded-full" />
              <p className="font-medium">Sales Invoices</p>
            </div>
            <div className="flex gap-5">
              <input
                type="search"
                placeholder="Search"
                className="py-1 pl-3 w-60 bg-gray-100 outline-none text-sm"
              />
              <button
                className="flex items-center px-2 py-1 bg-customLightGreen text-white rounded-md"
                onClick={handleAddSaleBtn}
              >
                + Add Sale
              </button>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex h-10 px-2 items-center bg-gray-100 border-2 border-gray-300 font-medium">
              <div className="w-1/5 text-center">Date</div>
              <div className="w-1/5 text-center">Invoice No.</div>
              <div className="w-1/5 text-center">Party Name</div>
              <div className="w-1/5 text-center">Amount</div>
              <div className="w-1/5 text-center">Action</div>
            </div>

            {invoices.map((invoice) => (
              <div
                className="flex h-10 px-2 items-center border border-b-2 border-x-2 border-gray-300"
                key={invoice._id}
              >
                <div className="w-1/5 text-center">
                  {formatInvoiceDate(invoice.invoiceDate)}
                </div>
                <div className="w-1/5 text-center">{invoice.invoiceNo}</div>
                <div className="w-1/5 text-center">{invoice.partyName}</div>
                <div className="w-1/5 text-center">{invoice.grandTotal}</div>
                <div className="w-1/5 h-full flex justify-center gap-3 text-center relative">
                  <button
                    className="text-center group"
                    onClick={() => handleUpdateBtn(invoice)}
                  >
                    <LuPencil />
                    <span className="absolute hidden group-hover:block -bottom-4 left-24 bg-customLightGreen text-white text-xs rounded py-1 px-2">
                      Edit
                    </span>
                  </button>
                  <button
                    className="text-center group"
                    onClick={() => handleDeleteBtn(invoice._id)}
                  >
                    <FaRegTrashAlt />
                    <span className="absolute hidden group-hover:block -bottom-4 right-20 bg-customLightGreen text-white text-xs rounded py-1 px-2">
                      Delete
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesMainContainer;
