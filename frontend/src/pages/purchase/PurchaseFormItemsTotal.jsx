import { useEffect } from "react";
import usePurchaseStore from "../../zustand/usePurchaseStore";


const PurchaseFormItemsTotal = () => {

  const {purchaseItems, setPurchaseItems, itemsTotal, setItemsTotal} = usePurchaseStore()

  useEffect(() => {
    const totalItemQuantity = purchaseItems.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.qty) || 0;
    }, 0).toFixed(2);
  
    const totalDiscountAmount = purchaseItems.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.discountAmount) || 0;
    }, 0).toFixed(2);
  
    const totalTaxAmount = purchaseItems.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.TaxInAmount) || 0;
    }, 0).toFixed(2);
  
    const totalAmount = purchaseItems.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.Amount) || 0;
    }, 0).toFixed(2);
  
    setItemsTotal({
      ...itemsTotal,
      totalQnty: totalItemQuantity,
      totalDiscountAmount: totalDiscountAmount,
      totalTaxAmount: totalTaxAmount,
      totalAmount: totalAmount,
    });
  
  }, [purchaseItems, setItemsTotal]);


  const handleAddRowButton = () => {
    setPurchaseItems([
      ...purchaseItems,
      {
        id:purchaseItems.length + 1,
        itemName: "",
        qty:0,
        price:0,
        discountPercent: "",
        discountAmount:0,
       TaxInPercent: "", 
       TaxInAmount:0,
        Amount: 0,
      },
    ]);
  };
  return (
    <div className="flex h-10 border-2 bg-gray-100 border-t-0  border-gray-300 font-normal items-center justify-between">
    <div className="w-1/12  flex gap-2 pl-1 justify-center border-r-2 h-full  items-center ">#</div>
                <div className="w-2/4 flex  h-full items-center justify-between   ">
                <div className=" rounded-md  border px-2 py-1 ml-2 border-customGreen
               hover:border-customLightGreen text-customLightGreen hover:text-green-800 cursor-pointer "
               onClick={handleAddRowButton} >
               Add row
               </div>
               <div className="pr-1 h-full flex items-center border-r-2  ">Total</div>
                </div>
                <input className="w-1/12 flex items-center justify-end text-right bg-gray-100 pr-1  h-full  border-r-2 outline-none"
                readOnly
                value={itemsTotal.totalQnty} />
                <div className="w-1/6 flex  items-center justify-end bg-gray-100   border-r-2 pl-1 h-full "></div>
                <input className=" w-1/6 flex  items-center justify-end bg-gray-100  border-r-2 h-full text-right pr-1 outline-none "
                readOnly
                value={itemsTotal.totalDiscountAmount}
                />
                <input className="w-1/6  flex  items-center justify-end border-t-2 bg-gray-100 text-right border-r-2 h-full pr-1 outline-none "
                readOnly
                value={itemsTotal.totalTaxAmount}
                />
                <input className="w-1/6   h-full pl-1 flex items-center   bg-gray-100 text-right justify-end pr-1 outline-none "
                readOnly
                value={itemsTotal.totalAmount}
                />
   </div>
  )
}

export default PurchaseFormItemsTotal