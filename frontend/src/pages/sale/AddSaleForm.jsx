import SaleFormPartyData from "./SaleFormPartyData";
import SaleFormTableHeader from "./SaleFormTableHeader";
import SaleFormManualData from "./SaleFormManualData";
import SaleFormTableTotalValue from "./SaleFormTableTotalValue";
import SaleFormGrandTotal from "./SaleFormGrandTotal";




const AddSaleForm = () => {

  
  return (
    <form className="m-2">
    <div className="flex justify-between mx-2 ">
    <div className="text-xl font-medium text-customGreen">Sale Invoice</div>
    <div className="text-xl font-medium text-customGreen">A to Z Billing App</div>
    </div>
    <SaleFormPartyData/>
    <div className="mt-16" >
    <SaleFormTableHeader />
    <SaleFormManualData />
    <SaleFormTableTotalValue />
    </div>
      <SaleFormGrandTotal />
 </form>
  )
}

export default AddSaleForm