
import Dashboard from "./Dashboard/Dashboard";
import ItemsContainer from "./ItemsContainer/ItemsContainer";
import PartiesContainer from "./parties/PartiesContainer";
import SalesContainer from "./sales/SalesContainer";
import Sidebar from "./Sidebar"

import AddSaleForm from "../pages/sale/AddSaleForm";
import { Routes, Route } from 'react-router-dom';
import useSaleStore from "../zustand/useSaleStore";

import FirmInfoForm from "../pages/FirmInfo/FirmInfoForm";
import BankInfoForm from "../pages/BankInfoForm";
import useSidebarStore from "../zustand/useSidebarStore";



const Home = () => {
  const { isSaleForm} = useSaleStore()
 const {isFirmForm} = useSidebarStore()
  return (
  <div>
    {isSaleForm ?
    (
   <AddSaleForm/>
    ) : (
      
      <div className="flex flex-row ">
    <Sidebar />
       
      {isFirmForm ? (
        <div className="flex-1">
        <FirmInfoForm/>
        </div>
      ) : (
        <div className="flex-1">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/items" element={<ItemsContainer />} />
        <Route path="/parties" element={<PartiesContainer />} />
        <Route path="/sales" element={<SalesContainer />} />
        <Route path="/bank" element={<BankInfoForm />} />
      </Routes>
    </div>
      )}


  </div>
 
     )}
    
    </div>
    

    
  );
};

export default Home