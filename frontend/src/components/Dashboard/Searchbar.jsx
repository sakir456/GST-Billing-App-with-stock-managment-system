import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="flex items-center shadow-md w-auto bg-white">
       <IoSearch className="h-6 w-6 ml-5" />
       <input placeholder="Search Transactions" className="py-5 pl-4 pr-2 outline-none w-48"/>
       <button className="flex items-center ml-4 py-2 px-3 rounded-3xl bg-customLightGreen text-white 
          transition duration-300 ease-in-out transform hover:scale-105">
         <FaCirclePlus className="mr-1 text-base" />
         Add Sale
       </button> 
       <button className="flex items-center ml-4 py-2 px-3 rounded-3xl bg-customLightGreen text-white 
        transition duration-300 ease-in-out transform hover:scale-105">
         <FaCirclePlus className="mr-1 text-base" />
         Add Purchase
       </button> 
       <button className="flex items-center ml-4 py-2 px-3 rounded-3xl bg-customLightGreen text-white 
        transition duration-300 ease-in-out transform hover:scale-105">
         <FaCirclePlus className="mr-1 text-base" />
         Add Party
       </button> 
    </div>
  )
}

export default Searchbar;
