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
import { RxCross1 } from "react-icons/rx";
import useUpdateInvoice from "../../hooks/invoices/useUpdateInvoice";
import ProductForm from "../ItemForm/ProductForm";
import useItemStore from "../../zustand/useItemStore";




const AddSaleForm = () => {
const { saleItems,partyInfo,grandTotal,resetForm, setSaleInvoicePrintPage} = useSaleStore()
const {addInvoice, loading} = useAddInvoice()
const {isParty} = usePartyStore()
const {isAddingItem, isUpdateForm:isItemUpdateForm} = useItemStore();
const {setIsSaleForm,isUpdateForm, invoiceId} = useSaleStore()
const {updateInvoice,isLoading} = useUpdateInvoice()

 
const handleSubmit = async(e) => {
  e.preventDefault()
  const invoiceData = {
    saleItems,
    partyInfo,
    grandTotal
  }
  await addInvoice(invoiceData)
   await resetForm()
   setSaleInvoicePrintPage(true)
   
}

const handleUpdate  = async(e) => {
  e.preventDefault() 
  const updatedInvoiceData = {
    saleItems,
    partyInfo,
    grandTotal
  }
   await updateInvoice(invoiceId,updatedInvoiceData)
  await resetForm()
}
  
  return (
    <div>
    {isParty ? (
      <AddPartyForm />
     ) :   isAddingItem && !isItemUpdateForm ? (
           <ProductForm/>
      ) :  (
      <div>
    {loading || isLoading ? (
      <LoadingSpinnerNew  />
    ):(
      <form className="m-2" onSubmit={isUpdateForm ? handleUpdate : handleSubmit}>
    <div className="flex justify-between mx-2 ">
    <div className="text-xl font-medium text-customGreen">{isUpdateForm ? "Update Invoice" : "Sale Invoice"}</div>
    <div>
    <RxCross1 className="cursor-pointer" onClick={() => setIsSaleForm(false)} />
    </div>
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