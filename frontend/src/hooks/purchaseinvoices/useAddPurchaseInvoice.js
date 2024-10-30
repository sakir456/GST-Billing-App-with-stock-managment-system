import { useState } from "react";
import toast from "react-hot-toast";
import usePurchaseStore from "../../zustand/usePurchaseStore";

const useAddPurchaseInvoice = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const {
    setIsPurchaseForm,
    setSavedInvoiceData,
    setInvoiceId,
    setIsPurchase,
  } = usePurchaseStore();
  const addPurchaseInvoice = async (invoiceData) => {
    if (!invoiceData.partyInfo.partyName) {
      toast.error("Party Name is required to create invoice");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/purchaseinvoice/createinvoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoiceData),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setData(data);
      setSavedInvoiceData(data);
      setInvoiceId(data._id);
      console.log(data);
      toast.success("Invoice created Successfully");
      setIsPurchaseForm(false);
      setIsPurchase(true);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { addPurchaseInvoice, data, loading };
};

export default useAddPurchaseInvoice;
