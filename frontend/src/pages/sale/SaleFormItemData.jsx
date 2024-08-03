import  { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import TaxRateSale from "../../utils/sale/TaxRateSale";
import useSaleStore from "../../zustand/useSaleStore";
import useGetItems from '../../hooks/useGetItems';
import useItemStore from '../../zustand/useItemStore';

const SaleFormItemData = () => {
  const { saleItems, setSaleItems } = useSaleStore();
  const { items, fetchItems } = useGetItems();
  const [showFetchItems, setShowFetchItems] = useState(false);
  const [showItemList, setShowItemList] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const {setIsAddingItem, setIsUpdateForm} = useItemStore()

  const handleItemChange = (index, field, value) => {
    const newItem = [...saleItems];
    newItem[index][field] = value;

    const qty = parseFloat(newItem[index].qty) || 0;
    const price = parseFloat(newItem[index].price) || 0;
    const discountPercent = parseFloat(newItem[index].discountPercent) || 0;
    const discountAmount = parseFloat(newItem[index].discountAmount) || 0;
    const taxInPercent = parseFloat(newItem[index].TaxInPercent) || 0;

    const total = qty * price;

    if (field === "discountPercent") {
      newItem[index].discountAmount = (total * discountPercent) / 100;
    } else if (field === "discountAmount") {
      newItem[index].discountPercent = (discountAmount / total) * 100;
    }

    // Tax calculation only if TaxInPercent is not "Select" or "Exempted"
    if (field === "TaxInPercent") {
      if (value === "Select" || value === "Exempted") {
        newItem[index].TaxInAmount = 0;
      } else {
        newItem[index].TaxInAmount = ((total - newItem[index].discountAmount) * taxInPercent) / 100;
      }
    }

    newItem[index].Amount = (total - newItem[index].discountAmount + newItem[index].TaxInAmount).toFixed(2);

    setSaleItems(newItem);

    if (field === "itemName") {
      setSearchKeyword(value);
    }

    if (index === saleItems.length - 1 && value && field === "itemName") {
      setSaleItems([
        ...saleItems,
        {
         id: saleItems.length + 1,
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
  };

  const handleDeleteButton = (index) => {
    const updatedItems = [...saleItems];
    updatedItems.splice(index, 1);
    const resetIds = updatedItems.map((item, idx) => ({
      ...item,
      id: idx + 1,
    }));
    setSaleItems(resetIds);
  };

  const fetchItemList = async (index) => {
    await fetchItems();
    setShowFetchItems(index);
    setShowItemList(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowItemList(false), 200);
  };

  const handleItemClick = (itemName, index) => {
    const newItem = [...saleItems];
    newItem[index].itemName = itemName;
    setSaleItems(newItem);
    setShowItemList(false);
  };

  const filteredItems = items.filter(item => item.itemName.toLowerCase().includes(searchKeyword.toLowerCase()));

  const handleTaxRateChange = (index, event) => {
    const selectedRate = event.target.value;
    const match = selectedRate.match(/(\d+(\.\d+)?)%/);
    const taxInPercent = match ? parseFloat(match[1]) : 0;
  
    handleItemChange(index, "TaxInPercent", selectedRate); // Update with selected rate string
    handleItemChange(index, "TaxInAmount", ((parseFloat(saleItems[index].qty) * parseFloat(saleItems[index].price) - parseFloat(saleItems[index].discountAmount)) * taxInPercent) / 100); // Update TaxInAmount
  };

  const handleAddItemBtn = () => {
    setIsAddingItem(true)
    setIsUpdateForm(false)
  }
  return (
    <div>
      {saleItems.map((item, index) => (
        <div className="flex h-10 border-2 border-gray-300 border-t-0 font-normal items-center justify-between" key={item.id}>
          <div className="w-1/12 bg-gray-50 flex gap-2 pl-1 justify-center border-r-2 h-full items-center">
            <div className='cursor-pointer' onClick={() => handleDeleteButton(index)}><IoMdTrash /></div>
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
              <div className='absolute bg-gray-100 rounded-md w-full mt-1 flex flex-col gap-1 p-1' style={{ zIndex: 10 }}>
                <div className="text-sm hover:bg-green-100 py-1 text-customLightGreen cursor-pointer" onClick={handleAddItemBtn}>
                  + Add Item
                </div>
                {filteredItems.map((item) => (
                  <div key={item._id} className='flex justify-between text-sm hover:bg-green-100 items-center pl-2 py-1 cursor-pointer'
                    onClick={() => handleItemClick(item.itemName, index)}>
                    <div>{item.itemName}</div>
                    <div>85</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type='number'
            className="w-1/12 flex pr-1 bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen"
            value={item.qty}
            onChange={(e) => handleItemChange(index, "qty", parseFloat(e.target.value) || 0)}
          />
          <input
            type='number'
            className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen"
            value={item.price}
            onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value) || 0)}
          />
          <div className="w-1/6 flex bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen">
            <input
              className="w-1/2 pr-1 bg-gray-50 border-r-2 h-full text-right focus:outline-customLightGreen"
              value={item.discountPercent}
              onChange={(e) => handleItemChange(index, "discountPercent", parseFloat(e.target.value) || 0)}
            />
            <input
              type='number'
              className="w-1/2 pr-1 bg-gray-50 h-full text-right focus:outline-customLightGreen"
              value={item.discountAmount}
              onChange={(e) => handleItemChange(index, "discountAmount", parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="w-1/6 flex bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen">
          <TaxRateSale
             value={item.TaxInPercent}
             onChange={(e) => handleTaxRateChange(index, e)}
/>
            <input
              type='number'
              className="w-1/2 pr-1 bg-gray-50 h-full text-right focus:outline-customLightGreen"
              value={item.TaxInAmount}
              onChange={(e) => handleItemChange(index, "TaxInAmount", parseFloat(e.target.value) || 0)}
            />
          </div>
          <input
            type='number'
            className="w-1/6 flex pr-1 bg-gray-50 justify-center border-r-2 h-full items-center text-right focus:outline-customLightGreen"
            value={item.Amount}
            onChange={(e) => handleItemChange(index, "Amount", parseFloat(e.target.value) || 0)}
          />
        </div>
      ))}
    </div>
  );
}

export default SaleFormItemData


