import useLogout from "../hooks/useLogout";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  const { logout } = useLogout();
  return (
    <div className="mt-auto mb-2">
      <button
        className="flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
        onClick={logout}
      >
        <BiLogOut className="w-7 h-7 text-white mr-2 transition 
        duration-300 ease-in-out transform hover:text-red-500" />
        <div className="bg-white py-1 px-5 rounded-md text-base transition duration-300 
         transform hover:bg-customLightGreen hover:text-white ">
          Logout
        </div>
      </button>
    </div>
  );
};

export default LogoutButton;