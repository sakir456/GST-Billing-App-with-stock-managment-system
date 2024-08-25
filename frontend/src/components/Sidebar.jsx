import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import LogoutButton from "./LogoutButton";
import useSidebarStore from "../zustand/useSidebarStore";
import { Link } from "react-router-dom";
import useItemStore from "../zustand/useItemStore";
import usePartyStore from "../zustand/usePartyStore";

const Sidebar = () => {
  const { expandedItem, setExpandedItem  } = useSidebarStore();
  const {isAddingItem} = useItemStore()
  const {isParty} = usePartyStore();

  const toggleItem = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    
    } else {
      setExpandedItem(item);
    }
  };

  return (
    <div className="h-screen w-auto bg-customGreen pt-2 flex flex-col  ">
    <Link to="/FirmInfo">
      <div className="flex items-center mb-6 ml-3 w-52" >
        <img src="shop.png" alt="shop-image" className="w-9 h-9 mr-2 border rounded-full p-1" />
        <h1 className="text-white overflow-hidden ml-2">Famous Radiators</h1>
      </div>
      </Link>
      <ul className="text-white">
        <li className="flex items-center justify-between py-2 pl-4 hover:bg-customLightGreen hover:border-l-4 hover:border-white cursor-pointer">
        <Link to="/" 
        className="w-full h-full flex items-center" onClick={() => isParty(false)}>
            <span>Home</span>
          </Link>
        </li>
        <Link to="/parties" 
         className="w-full  flex items-center py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen " >
        <li className=" w-full h-full    ">
        <span className="w-full h-full">Parties</span>
        </li>
        </Link>
          
        <Link to="/items" 
        className="w-full flex items-center  py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen" onClick={()=> isAddingItem(false)}>
        <li className="w-full h-full flex  items-center">
           <span className="w-full h-full">Items</span>
            <FiPlus className="mr-2" />
          </li>
        </Link>
        
        <Link to="/sales" onClick={() => toggleItem('sale')} 
        className="w-full flex items-center  py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen">
        <li className="w-full h-full flex  items-center">
         <span className="w-full h-full">Sale</span>
            {expandedItem === 'sale' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
        </li>
        </Link>
         
        <Link to="/purchase" onClick={() => toggleItem('purchase')} 
         className="w-full flex items-center  py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen">
        <li className="w-full h-full flex  items-center">
         
            <span className="w-full h-full">Purchase</span>
            {expandedItem === 'purchase' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
         
        </li>
        </Link>
          
        <Link to="/expenses" onClick={() => toggleItem('expenses')}
         className="w-full flex items-center  py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen">
        <li className="w-full h-full flex  items-center">
           <span className="w-full h-full">Expenses</span>
            {expandedItem === 'expenses' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
         </li>
        </Link>

        <Link to="/cash&bank" onClick={() => toggleItem('cash')} 
        className="w-full flex items-center  py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen">
        <li className="w-full h-full flex  items-center">
         
<span className="w-full h-full">Cash & Bank</span>
            {expandedItem === 'cash' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
        </li>
        </Link>

        <li className="flex items-center justify-between py-2 pl-4 hover:bg-customLightGreen hover:border-l-4 hover:border-white cursor-pointer">
          <span>Reports</span>
        </li>

        <li className="flex items-center justify-between py-2 pl-4 hover:bg-customLightGreen hover:border-l-4 hover:border-white cursor-pointer">
          <span>Settings</span>
        </li>
      </ul>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
