import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import LogoutButton from "./LogoutButton";
import useSidebarStore from "../zustand/useSidebarStore";
import { Link } from "react-router-dom";
import useItemStore from "../zustand/useItemStore";
import usePartyStore from "../zustand/usePartyStore";
import useBankStore from "../zustand/useBankStore";
import useSettingsStore from "../zustand/useSettingsStore";



const Sidebar = () => {
  const { expandedItem, setExpandedItem, setIsFirmForm,  firmInfo } = useSidebarStore();
  const {setIsSettings} = useSettingsStore()
  const {setIsBankForm }  = useBankStore()
  const { setIsAddingItem} = useItemStore()
  const { setIsParty} = usePartyStore();


  const toggleItem = (item) => {
    
    if (expandedItem === item) {
      setExpandedItem(null);
    
    } else {
      setExpandedItem(item);
    }
  };

 


  return (
    <div className="h-screen w-auto bg-customGreen pt-2 flex flex-col  ">
   
      <div className="flex items-center mb-6 ml-3 w-52 cursor-pointer" onClick={() => setIsFirmForm(true)} >
        <img src={!firmInfo || !firmInfo.logo  ? "shop.png" : firmInfo.logo} alt="shop-image" className="w-10 h-10 mr-2  rounded-full p-1" />
        <h1 className="text-white overflow-hidden"> {firmInfo ? firmInfo.businessName : "your company Name"}</h1>
      </div>
    
      <ul className="text-white">
        <li className="flex items-center justify-between py-2 pl-4 hover:bg-customLightGreen
         hover:border-l-4 hover:border-white cursor-pointer" onClick={() =>setIsFirmForm(false) }>
        <Link to="/" 
        className="w-full h-full flex items-center" >
            <span>Home</span>
          </Link>
        </li>
        <Link to="/parties" 
         className="w-full  flex items-center py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen " onClick={() => setIsParty(false)} >
        <li className=" w-full h-full    ">
        <span className="w-full h-full">Parties</span>
        </li>
        </Link>
          
        <Link to="/items" 
        className="w-full flex items-center  py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen" onClick={()=> setIsAddingItem(false)}>
        <li className="w-full h-full flex  items-center">
           <span className="w-full h-full">Items</span>
            <FiPlus className="mr-2" />
          </li>
        </Link>
        
        <Link to="/sales" 
        className="w-full flex items-center  py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen">
        <li className="w-full h-full flex  items-center">
         <span className="w-full h-full">Sale</span>
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

        <div   onClick={()=> setIsBankForm(true)} 
        className="w-full flex items-center  py-2 pl-4 hover:border-l-4 hover:border-white hover:bg-customLightGreen cursor-pointer">
        <li className="w-full h-full flex  items-center">
         
        <span className="w-full h-full"> Bank</span>
            
        </li>
        </div>

        <li className="flex items-center justify-between py-2 pl-4 hover:bg-customLightGreen hover:border-l-4 hover:border-white cursor-pointer">
          <span>Reports</span>
        </li>
          
          <div onClick={()=> setIsSettings(true)}>
        <li className="flex items-center justify-between py-2 pl-4 hover:bg-customLightGreen hover:border-l-4 hover:border-white cursor-pointer">
          <span>Settings</span>
        </li>
        </div>
      </ul>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
