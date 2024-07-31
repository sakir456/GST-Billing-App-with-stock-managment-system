import SaleFormPartyData from "./SaleFormPartyData";
import SaleFormTableHeader from "./SaleFormTableHeader";
import SaleFormGrandTotal from "./SaleFormGrandTotal";
import SaleFormItemData from "./SaleFormItemData";
import SaleFormItemsTotal from "./SaleFormItemsTotal";
import useSaleStore from "../../zustand/useSaleStore";
import useAddInvoice from "../../hooks/invoices/useAddInvoice";
import LoadingSpinnerNew from "../../components/LoadingSpinnerNew";
import usePartyStore from "../../zustand/usePartyStore";
import AddPartyForm from "../AddPartyForm";



const AddSaleForm = () => {
const { saleItems,partyInfo,grandTotal,resetForm,setIsSaleForm} = useSaleStore()
const {addInvoice, loading} = useAddInvoice()
const {isParty} = usePartyStore()
 
const handleSubmit = async(e) => {
  e.preventDefault()
  const invoiceData = {
    saleItems,
    partyInfo,
    grandTotal
  }
  await addInvoice(invoiceData)
   resetForm()
   setIsSaleForm(false)
}
  
  return (
    <div>
    {isParty ? (
      <AddPartyForm />
    ) :  (
      <div>
    {loading ? (
      <LoadingSpinnerNew  />
    ):(
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
    )}
    
    
 </div>

    )}
    </div>
    
  )
}

export default AddSaleForm