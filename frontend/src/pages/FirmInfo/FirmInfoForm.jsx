
import FirmLogo from "./FirmLogo";
import { RxCross1 } from "react-icons/rx";
import FirmPersonalDetails from "./FirmPersonalDetails";
import FirmAddress from "./FirmAddress";


const FirmInfoForm = () => {
  
  return (
    <div className="">
    <form className="px-10 py-5">
    <div className="flex justify-between text-lg font-medium">
    <div>Enter Firm Details</div>
    <RxCross1 className="mr-3 cursor-pointer"  />
    </div>
     <div className="flex items-center gap-28 ">
      <FirmLogo/>
      <FirmPersonalDetails/>
      </div>
      <FirmAddress/>
      <div  className=" flex justify-end">
      <button className="mt-8 items-center px-4 py-2 text-white rounded-md bg-customLightGreen">Save</button>
      </div>
      </form>
    </div>
  );
};

export default FirmInfoForm