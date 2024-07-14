import { FiBox } from "react-icons/fi";
import useItemStore from "../zustand/useItemStore";
import useGetItems from "../hooks/useGetItems";
import LoadingSpinnerNew from "../components/LoadingSpinnerNew";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const ProductsPage = () => {
  const { setIsAddingItem, setIsProductForm, setIsUpdateForm, setItemData, resetItemData } = useItemStore();
  const { items, loading } = useGetItems();

  const handleAddItemButton = () => {
    setIsAddingItem(true);
    setIsUpdateForm(false);
    resetItemData(); 
  };

  const handleUpdateButton = (item) => {
    setIsAddingItem(true);
    setIsProductForm("products");
    setIsUpdateForm(true);
    setItemData(item); 
  };

  return (
    <div className="relative ">
      {loading ? (
        <LoadingSpinnerNew />
      ) : (
        <div className="">
          <div className="m-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <FiBox className="text-customLightGreen bg-green-100 rounded-full" />
                <p className="font-medium">Inventory Management</p>
              </div>
              <div className="flex gap-5">
                <input type="text" placeholder="Search" className="py-1 pl-3 bg-gray-100 outline-none text-sm" />
                <button className="flex items-center px-2 py-1 bg-customLightGreen text-white rounded-md" onClick={handleAddItemButton}>
                  + Add Item
                </button>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex h-10 px-2 items-center bg-gray-100 border-2 border-gray-300 font-medium">
                <div className="w-1/6 text-center">Item Name</div>
                <div className="w-1/6 text-center">Category</div>
                <div className="w-1/6 text-center">Purchase Price</div>
                <div className="w-1/6 text-center">Opening Stock</div>
                <div className="w-1/6 text-center">In Hand</div>
                <div className="w-1/6 text-center">Actions</div>
              </div>

              {items &&
                items.map((item) => (
                  <div className="flex h-10 px-2 items-center border border-b-2 border-x-2 border-gray-300" key={item._id}>
                    <div className="w-1/6 text-center">{item.itemName}</div>
                    <div className="w-1/6 text-center">{item.category}</div>
                    <div className="w-1/6 text-center">{item.purchasePrice}</div>
                    <div className="w-1/6 text-center">{item.openingQuantity}</div>
                    <div className="w-1/6 text-center">2</div>
                    <div className="w-1/6 h-full flex justify-center gap-3 text-center relative">
                      <button className="text-center group" onClick={() => handleUpdateButton(item)}>
                        <LuPencil />
                        <span className="absolute hidden group-hover:block -bottom-4 left-14 bg-customLightGreen text-white text-xs rounded py-1 px-2">Edit</span>
                      </button>
                      <button className="text-center group">
                        <FaRegTrashAlt />
                        <span className="absolute hidden group-hover:block -bottom-4 right-9 bg-customLightGreen text-white text-xs rounded py-1 px-2">Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
