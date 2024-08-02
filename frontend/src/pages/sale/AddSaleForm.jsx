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



const AddSaleForm = () => {
const { saleItems,partyInfo,grandTotal,resetForm} = useSaleStore()
const {addInvoice, loading} = useAddInvoice()
const {isParty} = usePartyStore()
const {setIsSaleForm,isUpdateForm} = useSaleStore()
const {updateInvoice,isLoading,data} = useUpdateInvoice()
 
const handleSubmit = async(e) => {
  e.preventDefault()
  const invoiceData = {
    saleItems,
    partyInfo,
    grandTotal
  }
  await addInvoice(invoiceData)
   resetForm()
   
}

const handleUpdate  = async(e) => {
  e.preventDefault() 
  const updatedInvoiceData = {
    saleItems,
    partyInfo,
    grandTotal
  }
  await updateInvoice(saleItems._id,updatedInvoiceData)

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