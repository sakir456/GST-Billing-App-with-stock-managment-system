import ProductForm from "./ProductForm";

const AddItemForm = () => {
  return (
    <div className="w-full   ">
      <div className="flex justify-around h-10 font-semibold text-gray-500">
        <button className="bg-gray-100 w-full  border border-y-2 border-b-customGreen">
          Products{" "}
        </button>
      </div>
      <ProductForm />
    </div>
  );
};

export default AddItemForm;
