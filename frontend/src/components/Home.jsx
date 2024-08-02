
import Dashboard from "./Dashboard/Dashboard";
import ItemsContainer from "./ItemsContainer/ItemsContainer";
import PartiesContainer from "./parties/PartiesContainer";
import SalesContainer from "./sales/SalesContainer";
import Sidebar from "./Sidebar"

import AddSaleForm from "../pages/sale/AddSaleForm";
import { Routes, Route } from 'react-router-dom';
import useSaleStore from "../zustand/useSaleStore";
import useItemStore from "../zustand/useItemStore";
import ProductForm from "../pages/ItemForm/ProductForm";


const Home = () => {
  const { isSaleForm} = useSaleStore()
  const {isAddingItem, isUpdateForm} = useItemStore()
  return (
    <div>
      {isAddingItem && !isUpdateForm ? (
        <ProductForm /> 
      ) : (
        <div>
    {isSaleForm ?
    (<AddSaleForm/>) : 
     (
      <div className="flex flex-row ">
    
    <Sidebar />
<div className="flex-1">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/items" element={<ItemsContainer />} />
        <Route path="/parties" element={<PartiesContainer />} />
        <Route path="/sales" element={<SalesContainer />} />
      </Routes>
    </div>
  </div>
     )}
    
    </div>
      )}
    </div>
    
  );
};

export default Home