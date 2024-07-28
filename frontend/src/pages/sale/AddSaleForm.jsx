import SaleFormPartyData from "./SaleFormPartyData";
import SaleFormTableHeader from "./SaleFormTableHeader";
import SaleFormGrandTotal from "./SaleFormGrandTotal";
import SaleFormItemData from "./SaleFormItemData";
import SaleFormItemsTotal from "./SaleFormItemsTotal";
import useSaleStore from "../../zustand/useSaleStore";
import useAddInvoice from "../../hooks/invoices/useAddInvoice";




const AddSaleForm = () => {
const { saleItems,partyInfo,grandTotal} = useSaleStore()
const {addInvoice} = useAddInvoice()
 
const handleSubmit = async(e) => {
  e.preventDefault()
  const invoiceData = {
    saleItems,
    partyInfo,
    grandTotal
  }
  await addInvoice(invoiceData)
}
  
  return (
    <form className="m-2" onSubmit={handleSubmit}>
    <div className="flex justify-between mx-2 ">
    <div className="text-xl font-medium text-customGreen">Sale Invoice</div>
    <div className="text-xl font-medium text-customGreen">A to Z Billing App</div>
    </div>
    <SaleFormPartyData/>
    <div className="mt-16" >
    <SaleFormTableHeader />
    <SaleFormItemData />
    <SaleFormItemsTotal />
    </div>
      <SaleFormGrandTotal />
 </form>
  )
}

export default AddSaleForm