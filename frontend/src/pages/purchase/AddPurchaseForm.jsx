import { RxCross1 } from "react-icons/rx"
import PurchaseFormPartyData from "./PurchaseFormPartyData"
import PurchaseFormTableHeader from "./PurchaseFormTableHeader"
import PurchaseFormItemData from "./PurchaseFormItemData"
import PurchaseFormItemsTotal from "./PurchaseFormItemsTotal"
import PurchaseFormGrandTotal from "./PurchaseFormGrandTotal"
import usePartyStore from "../../zustand/usePartyStore"
import AddPartyForm from "../AddPartyForm"
import useItemStore from "../../zustand/useItemStore"
import ProductForm from "../ItemForm/ProductForm"
import useAddPurchaseInvoice from "../../hooks/purchaseinvoices/useAddPurchaseInvoice"
import useUpdatePurchaseInvoice from "../../hooks/purchaseinvoices/useUpdatePurchaseInvoice"
import LoadingSpinnerNew from "../../components/LoadingSpinnerNew"
import usePurchaseStore from "../../zustand/usePurchaseStore"
import useGeneralStore from "../../zustand/useGeneralStore"

const AddPurchaseForm = () => {
  const {isParty} = usePartyStore()
  const {isAddingItem, isUpdateForm:isItemUpdateForm} = useItemStore();
  const {loading, addPurchaseInvoice} = useAddPurchaseInvoice()
  const {isLoading, updatePurchaseInvoice} = useUpdatePurchaseInvoice()
  const {isUpdateForm, purchaseItems, partyInfo, grandTotal, invoiceId, resetForm, setIsPurchaseForm} = usePurchaseStore()
  const {setInvoicePrintPage} = useGeneralStore();
  



  const handleSubmit = async(e) => {
    e.preventDefault()
    const invoiceData = {
      purchaseItems,
      partyInfo,
      grandTotal
    }
    await addPurchaseInvoice(invoiceData)
    
     await resetForm()
     setInvoicePrintPage(true)
     
    }


  const handleUpdate  = async(e) => {
    e.preventDefault() 
    const updatedInvoiceData = {
      purchaseItems,
      partyInfo,
      grandTotal
    }
     await updatePurchaseInvoice(invoiceId,updatedInvoiceData)
     await resetForm()
  }
    


  return (
    <div>
    {isParty ? (
      <AddPartyForm />
     ) :   isAddingItem && !isItemUpdateForm ? (
           <ProductForm />
      ) :  (
      <div>
    {loading || isLoading ? (
      <LoadingSpinnerNew  />
    ):(
    <form className="m-2" onSubmit={isUpdateForm ? handleUpdate : handleSubmit} >
    <div className="flex justify-between mx-2 ">
    <div className="text-xl font-medium text-customGreen">{isUpdateForm ? "Update Invoice" : "Purchase Invoice"}</div>
    <div>
    <RxCross1 className="cursor-pointer" onClick={() => setIsPurchaseForm(false)}  />
    </div>
    </div>
    <PurchaseFormPartyData/>
    <div className="mt-16" >
    <PurchaseFormTableHeader/>
    <PurchaseFormItemData/>
    <PurchaseFormItemsTotal/>
    </div>
    <PurchaseFormGrandTotal />
   
 </form>
    )}

    </div>
  )}
  </div>
  )
}

export default AddPurchaseForm