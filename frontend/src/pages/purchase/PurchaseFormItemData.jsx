import { IoMdTrash } from "react-icons/io"
import usePurchaseStore from "../../zustand/usePurchaseStore"
import TaxRateSale from "../../utils/sale/TaxRateSale"
import useGetItems from "../../hooks/useGetItems"
import { useState } from "react"
import useItemStore from "../../zustand/useItemStore"


const PurchaseFormItemData = () => {
  const {purchaseItems,  setPurchaseItems, grandTotal,setGrandTotal} = usePurchaseStore()
  const { items, fetchItems } = useGetItems();
  const [showFetchItems, setShowFetchItems] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showItemList, setShowItemList] = useState(false);
  const { setIsAddingItem, setIsUpdateForm, setItemInfo } = useItemStore();

  const safeParseFloat = (value) => {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
  };

  const handleItemChange = (index, field, value) => {
     
    if (field !== "itemName") {
      const isValidInput = field === "TaxInPercent" || value === "" || /^\d*\.?\d*$/.test(value);
      if (!isValidInput) return;
    } 
    const newItem = [...purchaseItems];
    newItem[index][field] = value;


    const qty = safeParseFloat(newItem[index].qty);
    let price = safeParseFloat(newItem[index].price);
    let discountPercent = safeParseFloat(newItem[index].discountPercent);
    let discountAmount = safeParseFloat(newItem[index].discountAmount);
    let taxInPercent = safeParseFloat(newItem[index].TaxInPercent);
    let taxInAmount = safeParseFloat(newItem[index].TaxInAmount);
    let amount = safeParseFloat(newItem[index].Amount);

    if (field === "Amount" && value ===""){
      newItem[index].discountPercent = "";
      newItem[index].discountAmount = 0;
      newItem[index].TaxInPercent = "";
      newItem[index].TaxInAmount = 0;
    }

    // Handle the case where price is removed
    if (field === "price" && value === "") {
      newItem[index].price = "";
      newItem[index].discountPercent = "";
      newItem[index].discountAmount = 0;
      newItem[index].TaxInPercent = "";
      newItem[index].TaxInAmount = 0;
      newItem[index].Amount = 0;
      setGrandTotal({ ...grandTotal, pandfAmount: 0 });

      

    } else {
      // If price is present, recalculate the other fields
      if (field === "Amount") {
        newItem[index].price = qty > 0 ? amount / qty : 0;
        price = newItem[index].price;
      }

      const total = qty * price;

      if (field === "discountPercent") {
        newItem[index].discountAmount = total > 0 ? parseFloat(((total * discountPercent) / 100).toFixed(2)) : 0;
        discountAmount = newItem[index].discountAmount;
      }

      if (field === "discountAmount") {
        newItem[index].discountPercent = total > 0 ? parseFloat(((discountAmount / total) * 100).toFixed(2)) : 0;
      }

      if (field === "TaxInPercent" || field === "Amount") {
        newItem[index].TaxInAmount = (value === "Select" || value === "Exempted" || total <= 0) ? 0 
          : parseFloat((((total - discountAmount) * taxInPercent) / 100).toFixed(2));
        taxInAmount = newItem[index].TaxInAmount;
      }

      

      if (field !== "discountAmount") {
        newItem[index].discountAmount = total > 0 ? parseFloat(((total * discountPercent) / 100).toFixed(2)) : 0;
        discountAmount = newItem[index].discountAmount;
      }

      if(field !=="TaxInAmount") {
       const selectedRate  =  newItem[index].TaxInPercent
       const match = selectedRate.match(/(\d+(\.\d+)?)%/);
       const taxInPercent = match ? parseFloat(match[1]) : 0;
       newItem[index].TaxInAmount = (value === "Select" || value === "Exempted" || total <= 0) ? 0 
          : parseFloat((((total - discountAmount) * taxInPercent) / 100).toFixed(2));
        taxInAmount = newItem[index].TaxInAmount;
      }
      if (field !== "Amount") {
        newItem[index].Amount = parseFloat((total - discountAmount + taxInAmount).toFixed(2));
      }

    }

    setPurchaseItems(newItem);

    if (field === "itemName") {
      setSearchKeyword(value);
    }
    //handling case where as soona s user enters input in itemName addition of extra row 
    if (index === purchaseItems.length - 1 && value && field === "itemName") {
      setPurchaseItems([
        ...purchaseItems,
        {
          id: purchaseItems.length + 1,
          itemName: "",
          qty: 0,
          price: 0,
          discountPercent: "",
          discountAmount: 0,
          TaxInPercent: "",
          TaxInAmount: 0,
          Amount: 0,
        },
      ]);
    }
  }

  const handleTaxRateChange = (index, event) => {
    const selectedRate = event.target.value;
    const match = selectedRate.match(/(\d+(\.\d+)?)%/);
    const taxInPercent = match ? parseFloat(match[1]) : 0;

    handleItemChange(index, "TaxInPercent", selectedRate); 
    handleItemChange(index, "TaxInAmount", parseFloat(((safeParseFloat(purchaseItems[index].qty) * safeParseFloat(purchaseItems[index].price) - safeParseFloat(purchaseItems[index].discountAmount)) * taxInPercent) / 100).toFixed(2)); 
  };

  const handleDeleteButton = (index) => {
    const updatedItems = [...purchaseItems];
    updatedItems.splice(index, 1);
    const resetIds = updatedItems.map((item, idx) => ({
      ...item,
      id: idx + 1,
    }));
    setPurchaseItems(resetIds);
  };

  const fetchItemList = async (index) => {
    await fetchItems();
    setShowFetchItems(index);
    setSearchKeyword("");
    setShowItemList(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowItemList(false), 200);
  };

  const filteredItems = items.filter(item => item.itemName.toLowerCase().includes(searchKeyword.toLowerCase()));

  const handleItemClick = (itemName, index, salePrice,item) => {
    const newItem = [...purchaseItems];
    newItem[index].itemName = itemName;
    newItem[index].price = salePrice || 0; 
    newItem[index].qty = 1;
    
    const total = newItem[index].qty * newItem[index].price;
    const discountAmount = safeParseFloat(newItem[index].discountAmount);
    const taxInAmount = safeParseFloat(newItem[index].TaxInAmount);
    
    newItem[index].Amount = parseFloat((total - discountAmount + taxInAmount).toFixed(2)) || 0;
    setPurchaseItems(newItem);
    setShowItemList(false);
    setPurchaseItems([
        ...purchaseItems,
        {
            id: purchaseItems.length + 1,
            itemName: "",
            qty: 0,
            price: 0,
            discountPercent: "",
            discountAmount: 0,
            TaxInPercent: "",
            TaxInAmount: 0,
            Amount: 0,
        },
    ]);
    setItemInfo(item)
};

const handleAddItemBtn = () => {
  setIsAddingItem(true);
  setIsUpdateForm(false);
};



  return (
    <div>
      {purchaseItems.map((item, index) => (
        <div className="flex h-10 border-2 border-gray-300 border-t-0 font-normal items-center justify-between" key={item.id}>
          <div className="w-1/12 bg-gray-50 flex gap-2 pl-1 justify-center border-r-2 h-full items-center">
            <div className='cursor-pointer' onClick={() => handleDeleteButton(index)} ><IoMdTrash /></div>
            {item.id}
          </div>

          <div className="w-2/4 relative">
            <input
              type='text'
              className="w-full py-2 pl-1 bg-gray-50 flex border-r-2 h-full items-center focus:outline-customLightGreen"
              value={item.itemName}
              onChange={(e) => handleItemChange(index, "itemName", e.target.value)}
             placeholder="enter Item Name"
             onFocus={() => fetchItemList(index)}
              onBlur={handleBlur}
              />
          {showItemList && showFetchItems === index && (
              <div className='absolute  bg-gray-100 rounded-md w-full mt-1 flex flex-col gap-1 p-1 overflow-y-scroll' style={{ zIndex: 10 }} >
                <div className="text-sm hover:bg-green-100 py-1 text-customLightGreen cursor-pointer" onClick={handleAddItemBtn}>
                  + Add Item
                </div>
                {filteredItems.map((item) => (
                  <div key={item._id} className='flex justify-between text-sm hover:bg-green-100 items-center pl-2 py-1 cursor-pointer'
                    onClick={() => handleItemClick(item.itemName, index, item.salePrice,item)}>
                    <div>{item.itemName}</div>
                    </div>
                ))}
              </div>
            )}
       </div>

          <input
            type='text'
            className="w-1/12 flex pr-1 bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen"
            value={item.qty}
            onChange={(e) => handleItemChange(index, "qty", e.target.value)}
          />
          <input
            type='text'
           className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen"
            value={item.price}
            onChange={(e) => handleItemChange(index, "price", e.target.value)}
         />
          <div className="w-1/6 flex bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen">
            <input
              type='text'
              className="w-1/2 pr-1 bg-gray-50 border-r-2 h-full text-right focus:outline-customLightGreen"
              value={item.discountPercent}
              onChange={(e) => handleItemChange(index, "discountPercent", e.target.value)}
              />
            <input
              type='text'
              className="w-1/2 pr-1 bg-gray-50 h-full text-right focus:outline-customLightGreen"
              value={item.discountAmount}
              onChange={(e) => handleItemChange(index, "discountAmount", e.target.value)}
              />
          </div>
          <div className="w-1/6 flex bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen">
            <TaxRateSale
              value={item.TaxInPercent}
              onChange={(e) => handleTaxRateChange(index, e)}
              />
            <input
              type='text'
             className="w-1/2 pr-1 bg-gray-50 h-full text-right focus:outline-customLightGreen"
              value={item.TaxInAmount}
              onChange={(e) => handleItemChange(index, "TaxInAmount", e.target.value)}
              />
          </div>
          <input
            type='text'
           className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen"
            value={item.Amount}
            onChange={(e) => handleItemChange(index, "Amount", e.target.value)}
          />
        </div>
      ))}
    </div>
  )
}

export default PurchaseFormItemData