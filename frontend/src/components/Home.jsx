
import Dashboard from "./Dashboard/Dashboard";
import ItemsContainer from "./ItemsContainer/ItemsContainer";
import PartiesContainer from "./parties/PartiesContainer";
import SalesContainer from "./sales/SalesContainer";
import Sidebar from "./Sidebar"
import { Routes, Route } from 'react-router-dom';



const Home = () => {
  return (
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
  );
};

export default Home