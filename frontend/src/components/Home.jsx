
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
import FirmInfoForm from "../pages/FirmInfo/FirmInfoForm";
import BankInfoForm from "../pages/BankInfoForm";



const Home = () => {
  const { isSaleForm, saleInvoicePrintPage} = useSaleStore()
  const {isAddingItem, isUpdateForm} = useItemStore()
  return (
    <div>
      {isAddingItem && !isUpdateForm ? (
        <ProductForm /> 
      ) : (
        <div>
    {isSaleForm ?
    (
   <AddSaleForm/>
    ) : (
      <div className="flex flex-row ">
    
     {!saleInvoicePrintPage && (
      <Sidebar />
      )} 
<div className="flex-1">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/FirmInfo" element={<FirmInfoForm/>} />
        <Route path="/items" element={<ItemsContainer />} />
        <Route path="/parties" element={<PartiesContainer />} />
        <Route path="/sales" element={<SalesContainer />} />
        <Route path="/bank" element={<BankInfoForm />} />
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