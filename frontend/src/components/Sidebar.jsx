import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import LogoutButton from "./LogoutButton";
import useSidebarStore from "../zustand/useSidebarStore";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { expandedItem, setExpandedItem } = useSidebarStore();

  const toggleItem = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  return (
    <div className="h-screen w-auto bg-customGreen pt-2 flex flex-col">
      <div className="flex items-center mb-6 ml-3 w-52">
        <img src="shop.png" alt="shop-image" className="w-9 h-9 mr-2 border rounded-full p-1" />
        <h1 className="text-white overflow-hidden ml-2">Famous Radiators</h1>
      </div>
      <ul className="text-white">
        <li className="flex items-center justify-between py-2 pl-4 hover:bg-customLightGreen hover:border-l-4 hover:border-white cursor-pointer">
        <Link to="/" className="w-full h-full flex items-center">
            <span>Home</span>
          </Link>
        </li>

        <li className="hover:bg-customLightGreen hover:border-l-4 hover:border-white py-2 pl-4">
          <button onClick={() => toggleItem('parties')} className="w-full h-full flex items-center justify-between">
            <span>Parties</span>
            {expandedItem === 'parties' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
          </button>
        </li>

        <li className="hover:bg-customLightGreen hover:border-l-4 hover:border-white py-2 pl-4">
          <Link to="/items" className="w-full h-full flex items-center justify-between">
            <span>Items</span>
            <FiPlus className="mr-2" />
          </Link>
        </li>

        <li className="hover:bg-customLightGreen hover:border-l-4 hover:border-white py-2 pl-4">
          <button onClick={() => toggleItem('sale')} className="w-full h-full flex items-center justify-between">
            <span>Sale</span>
            {expandedItem === 'sale' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
          </button>
        </li>

        <li className="hover:bg-customLightGreen hover:border-l-4 hover:border-white py-2 pl-4">
          <button onClick={() => toggleItem('purchase')} className="w-full h-full flex items-center justify-between">
            <span>Purchase</span>
            {expandedItem === 'purchase' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
          </button>
        </li>

        <li className="hover:bg-customLightGreen hover:border-l-4 hover:border-white py-2 pl-4">
          <button onClick={() => toggleItem('expenses')} className="w-full h-full flex items-center justify-between">
            <span>Expenses</span>
            {expandedItem === 'expenses' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
          </button>
        </li>

        <li className="hover:bg-customLightGreen hover:border-l-4 hover:border-white py-2 pl-4">
          <button onClick={() => toggleItem('cash')} className="w-full h-full flex items-center justify-between">
            <span>Cash & Bank</span>
            {expandedItem === 'cash' ? <IoIosArrowUp className="mr-2" /> : <IoIosArrowDown className="mr-2" />}
          </button>
        </li>

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
