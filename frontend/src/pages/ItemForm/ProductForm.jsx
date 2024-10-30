import SelectUnit from "../../utils/SelectUnit";
import TaxRate from "../../utils/TaxRate";
import { RxCross1 } from "react-icons/rx";
import useItemStore from "../../zustand/useItemStore";
import useAddItem from "../../hooks/useAddItem";
import LoadingSpinnerNew from "../../components/LoadingSpinnerNew";
import useUpdateItem from "../../hooks/useUpdateItem";

const ProductForm = () => {
  const { setIsAddingItem, setIsProducts, isUpdateForm,  itemData, setItemData} = useItemStore();
  const { addItem, loading } = useAddItem();
  const {updateItem, isLoading} = useUpdateItem()
  
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
      stockInHand: itemData.stockInHand ? parseFloat(itemData.stockInHand) : undefined,
      salePriceTax: itemData.salePriceTax === "none" ? undefined : itemData.salePriceTax,
      purchasePriceTax: itemData.purchasePriceTax === "none" ? undefined : itemData.purchasePriceTax,
      quantityUnit: itemData.quantityUnit === "none" ? undefined : itemData.quantityUnit
    };
    await addItem(formattedItemData);
    
  };

  const handleUpdateForm = async(e) => {
    e.preventDefault(); 
    const formattedItemData = {
      ...itemData,
      hsnCode: itemData.hsnCode ? parseInt(itemData.hsnCode, 10) : undefined,
      salePrice: itemData.salePrice ? parseFloat(itemData.salePrice) : undefined,
      purchasePrice: itemData.purchasePrice ? parseFloat(itemData.purchasePrice) : undefined,
      taxRate: itemData.taxRate === "none" ?  undefined : itemData.taxRate,
      openingQuantity: itemData.openingQuantity ? parseInt(itemData.openingQuantity, 10) : undefined,
      stockInHand: itemData.stockInHand ? parseFloat(itemData.stockInHand) : undefined,
      salePriceTax: itemData.salePriceTax === "none" ? undefined : itemData.salePriceTax,
      purchasePriceTax: itemData.purchasePriceTax === "none" ? undefined : itemData.purchasePriceTax,
      quantityUnit: itemData.quantityUnit === "none" ? undefined : itemData.quantityUnit
    };
    await updateItem (itemData._id,formattedItemData);
   
  }

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

    const isSaveDisabled = !itemData.itemName || itemData.itemName.trim()==="";

return (
    <div>
    {loading || isLoading ? (
     <LoadingSpinnerNew />
    ) : (
      <form className="px-10 py-5" onSubmit={isUpdateForm ? handleUpdateForm  : handleSubmit}>
      <div className="flex justify-between text-lg font-medium">
        <div className="">{isUpdateForm ? "Update Item" : "Add Item"}</div>
        <RxCross1 className="mr-3 cursor-pointer" onClick={closeProductForm} />
      </div>
      <div className="flex items-center gap-5 my-5">
      <div className="relative">
        <input
          name="itemName"
          placeholder="Item Name"
          className="py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
          value={itemData.itemName}
          onChange={handleChange}
        />
        {itemData.itemName && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">ItemName*</label>
          )}
        </div>
        <div className="relative">
        <input
          name="hsnCode"
          placeholder="Item HSN"
          className="py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
          value={itemData.hsnCode}
          onChange={handleChange}
        />
        {itemData.hsnCode && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2 left-2 ">Item HSN</label>
          )}
        </div>
        <SelectUnit value={itemData.quantityUnit} onChange={handleUnitChange} />
      </div>
      <div className="relative">
        <input
          name="category"
          placeholder="Category"
          className="py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
          value={itemData.category}
          onChange={handleChange}
        />
        {itemData.category && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white -top-2.5 left-2 ">Category</label>
          )}
      </div>
      <div className="mt-6 flex gap-28">
        <div>
          <div className="text-lg font-medium">Sale Price</div>
          <div className="flex">
          <div className="relative">
          <input
            name="salePrice"
            placeholder="Sale Price"
            className="my-3 py-1 px-2 border-2 border-gray-300 outline-none"
            value={itemData.salePrice}
            onChange={handleChange}
          />
          {itemData.salePrice && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white top-[3px] left-2 ">Sale Price</label>
          )}
          </div>
          <div className=" mt-3">
          <select
         name="salePriceTax"
            className=" py-1 border-2 border-gray-300 border-l-0"
            value={itemData.salePriceTax}
            onChange={handleChange}
          >
           <option value="none" className="bg-white">Select Unit</option>
            <option value="Without_tax" className="hover:bg-gray-300">Without Tax</option>
            <option value="with_tax" className="hover:bg-gray-300">With Tax</option>
          </select>
          </div>
          </div>
        </div>
        <div>
          <div className="text-lg font-medium">Tax Rate</div>
          <TaxRate value={itemData.taxRate} onChange={handleTaxRateChange} />
        </div>
      </div>
      <div className="mt-6">
        <div>
          <div className="text-lg font-medium">Purchase Price</div>
          <div className="flex">
          <div className="relative">
          <input
            name="purchasePrice"
            placeholder="Purchase Price"
            className="my-3 py-1 px-2 border-2 border-gray-300 outline-none"
            value={itemData.purchasePrice}
            onChange={handleChange}
          />
          {itemData.purchasePrice && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white top-[3px] left-2 ">Purchase Price</label>
          )}
          </div>
          <div className="mt-3">
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
        </div>
      </div>
      <div className="mt-6">
        <div className="text-lg font-medium">Stock</div>
        <div className="flex">
        <div className="relative">
        <input
          name="openingQuantity"
          placeholder="Opening Quantity"
          className="my-3 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
          value={itemData.openingQuantity}
          onChange={handleChange}
        />
        {itemData.openingQuantity && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white top-1 left-2 ">Opening Quantity</label>
          )}
        </div>
        <div className="relative">
        <input
          name="stockInHand"
          placeholder="Stock In Hand"
          className="my-3 mx-5 py-1 px-2 border-2 border-gray-300 rounded-md outline-none "
          value={itemData.stockInHand}
          onChange={handleChange}
        />
        {itemData.stockInHand && (
          <label className="absolute text-[11px] font-medium text-customLightGreen bg-white top-1 left-7 ">Stock In Hand</label>
          )}
        </div>
        </div>
      </div>
      <div className="text-end">
        <button className={`mt-8 items-center px-4 py-2 text-white rounded-md 
        ${isSaveDisabled ? "bg-gray-400" : "bg-customLightGreen"} `} disabled={isSaveDisabled} >
        {isUpdateForm ? "Update" : "Save"}
        </button>
      </div>
    </form>
    )}
     </div>
  );
};

export default ProductForm;

