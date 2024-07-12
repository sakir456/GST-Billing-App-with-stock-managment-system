import SelectUnit from "../../utils/SelectUnit";
import TaxRate from "../../utils/TaxRate";
import { RxCross1 } from "react-icons/rx";
import useItemStore from "../../zustand/useItemStore";
import { useState } from "react";
import useAddItem from "../../hooks/useAddItem";
import LoadingSpinnerNew from "../../components/LoadingSpinnerNew";

const ProductForm = () => {
  const { setIsAddingItem, setIsProducts } = useItemStore();
  const { addItem, loading } = useAddItem();

  const [itemData, setItemData] = useState({
    itemName: "",
    hsnCode: "",
    category: "",
    salePrice: "",
    purchasePrice: "",
    taxRate: "none",
    openingQuantity: "",
    stockPrice: "",
    salePriceTax: "none",
    purchasePriceTax: "none",
    quantityUnit: "none"
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedItemData = {
      ...itemData,
      hsnCode: itemData.hsnCode ? parseInt(itemData.hsnCode, 10) : undefined,
      salePrice: itemData.salePrice ? parseFloat(itemData.salePrice) : undefined,
      purchasePrice: itemData.purchasePrice ? parseFloat(itemData.purchasePrice) : undefined,
      taxRate: itemData.taxRate === "none" ?  undefined : itemData.taxRate,
      openingQuantity: itemData.openingQuantity ? parseInt(itemData.openingQuantity, 10) : undefined,
      stockPrice: itemData.stockPrice ? parseFloat(itemData.stockPrice) : undefined,
      salePriceTax: itemData.salePriceTax === "none" ? undefined : itemData.salePriceTax,
      purchasePriceTax: itemData.purchasePriceTax === "none" ? undefined : itemData.purchasePriceTax,
      quantityUnit: itemData.quantityUnit === "none" ? undefined : itemData.quantityUnit
    };

    await addItem(formattedItemData);
  };

  const handleTaxRateChange = (value) => {
    setItemData({ ...itemData, taxRate: value });
  };

  const handleUnitChange = (value) => {
    setItemData({ ...itemData, quantityUnit: value });
  };

  const closeProductForm = () => {
    setIsAddingItem(false);
    setIsProducts("products");
  };


  
  return (
    <div>
    {loading ? (
     <LoadingSpinnerNew/>
    ) : (
      <form className="px-10 py-5" onSubmit={handleSubmit}>
      <div className="flex justify-between text-lg font-medium">
        <div className="">Add Item</div>
        <RxCross1 className="mr-3 cursor-pointer" onClick={closeProductForm} />
      </div>
      <div className="flex items-center gap-5 my-5">
        <input
          name="itemName"
          placeholder="Item Name"
          className="py-1 px-2 border-2 border-gray-300 rounded-md outline-none focus:outline-customLightGreen"
          value={itemData.itemName}
          onChange={handleChange}
        />
        <input
          name="hsnCode"
          placeholder="Item HSN"
          className="py-1 px-2 border-2 border-gray-300 rounded-md outline-none focus:outline-customLightGreen"
          value={itemData.hsnCode}
          onChange={handleChange}
        />
        <SelectUnit value={itemData.quantityUnit} onChange={handleUnitChange} />
      </div>
      <div>
        <input
          name="category"
          placeholder="Category"
          className="py-1 px-2 border-2 border-gray-300 rounded-md outline-none focus:outline-customLightGreen"
          value={itemData.category}
          onChange={handleChange}
        />
      </div>
      <div className="mt-6 flex gap-28">
        <div>
          <div className="text-lg font-medium">Sale Price</div>
          <input
            name="salePrice"
            placeholder="Sale Price"
            className="my-3 py-1 px-2 border-2 border-gray-300 outline-none"
            value={itemData.salePrice}
            onChange={handleChange}
          />
          <select
         
            name="salePriceTax"
            className="py-1 px-2 border-2 border-gray-300 border-l-0"
            value={itemData.salePriceTax}
            onChange={handleChange}
          >
           <option value="none" className="bg-white">Select Unit</option>
            <option value="Without_tax" className="hover:bg-gray-300">Without Tax</option>
            <option value="with_tax" className="hover:bg-gray-300">With Tax</option>
          </select>
        </div>
        <div>
          <div className="text-lg font-medium">Tax Rate</div>
          <TaxRate value={itemData.taxRate} onChange={handleTaxRateChange} />
        </div>
      </div>
      <div className="mt-6">
        <div>
          <div className="text-lg font-medium">Purchase Price</div>
          <input
            name="purchasePrice"
            placeholder="Purchase Price"
            className="my-3 py-1 px-2 border-2 border-gray-300 outline-none"
            value={itemData.purchasePrice}
            onChange={handleChange}
          />
          <select
            name="purchasePriceTax"
           
            className="py-1 px-2 border-2 border-gray-300 border-l-0"
            value={itemData.purchasePriceTax}
            onChange={handleChange}
          >
           <option value="none" className="bg-white">Select Unit</option>
            <option value="Without_tax">Without Tax</option>
            <option value="with_tax">With Tax</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-lg font-medium">Stock</div>
        <input
          name="openingQuantity"
          placeholder="Opening Quantity"
          className="my-3 py-1 px-2 border-2 border-gray-300 rounded-md outline-none focus:outline-customLightGreen"
          value={itemData.openingQuantity}
          onChange={handleChange}
        />
        <input
          name="stockPrice"
          placeholder="At Price"
          className="my-3 mx-5 py-1 px-2 border-2 border-gray-300 rounded-md outline-none focus:outline-customLightGreen"
          value={itemData.stockPrice}
          onChange={handleChange}
        />
      </div>
      <div className="text-end">
        <button className="mt-8 items-center px-4 py-2 bg-customLightGreen text-white rounded-md">Save</button>
      </div>
    </form>
    )}
    

    </div>
  );
};

export default ProductForm;

