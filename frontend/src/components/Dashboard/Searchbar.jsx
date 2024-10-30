import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useSaleStore from "../../zustand/useSaleStore";
import usePurchaseStore from "../../zustand/usePurchaseStore";
import usePartyStore from "../../zustand/usePartyStore";
import useItemStore from "../../zustand/useItemStore";
import useGeneralStore from "../../zustand/useGeneralStore";



const Searchbar = () => {
  const navigate = useNavigate()
  const {setIsSaleForm} = useSaleStore()
  const {setIsPurchaseForm} = usePurchaseStore()
  const {setIsParty} = usePartyStore()
  const {setIsAddingItem} = useItemStore()
  const {dashBoardSearchInput, setDashBoardSearchInput} = useGeneralStore()

  const handleInput = (e) => {
    setDashBoardSearchInput(e.target.value)
    setTimeout(() => navigate("/sales"), 500);

  }
 

  return (
    <div className="flex items-center shadow-md w-auto bg-white  ">
       <IoSearch className="h-6 w-6 ml-5" />
       <input 
       value={dashBoardSearchInput}
       placeholder="Search Transactions" className="py-5 pl-4 pr-2 outline-none w-48" onChange={handleInput}/>
       <button className="flex items-center ml-4 py-2 px-3 rounded-3xl bg-customLightGreen text-white 
          transition duration-300 ease-in-out transform hover:scale-105" onClick={()=> {navigate("/sales"); setIsSaleForm(true) }}>
         <FaCirclePlus className="mr-1 text-base"  />
         Add Sale
       </button> 
       <button className="flex items-center ml-4 py-2 px-3 rounded-3xl bg-customLightGreen text-white 
        transition duration-300 ease-in-out transform hover:scale-105" onClick={()=> {navigate("/purchase"); setIsPurchaseForm(true) }}>
         <FaCirclePlus className="mr-1 text-base" />
         Add Purchase
       </button> 
       <button className="flex items-center ml-4 py-2 px-3 rounded-3xl bg-customLightGreen text-white 
        transition duration-300 ease-in-out transform hover:scale-105" onClick={()=> {navigate("/parties"); setIsParty(true) }}>
         <FaCirclePlus className="mr-1 text-base" />
         Add Party
       </button> 
       <button className="flex items-center ml-4 py-2 px-3 rounded-3xl bg-customLightGreen text-white 
        transition duration-300 ease-in-out transform hover:scale-105" onClick={()=> {navigate("/items"); setIsAddingItem(true)}}>
         <FaCirclePlus className="mr-1 text-base" />
         Add Item
       </button>
    </div>
  )
}

export default Searchbar;
