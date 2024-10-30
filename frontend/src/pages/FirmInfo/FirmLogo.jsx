import { useEffect, useState } from "react"
import useSidebarStore from "../../zustand/useSidebarStore";


const FirmLogo = () => {
   const {logo, setLogo,displayedLogo, setDisplayedLogo, firmInfo } = useSidebarStore()
   
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      if (logo && logo instanceof File) {
        const reader = new FileReader();
        reader.onload = () => {
          setDisplayedLogo(reader.result);
        };
        reader.readAsDataURL(logo);
      } else if (typeof logo === "string") {
        // If logo is a string (e.g., a URL), set it directly as the displayed image
        setDisplayedLogo(logo);
      }
    }, [logo]);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setLogo(file); 
        firmInfo.logo = null
      }
    };
  
  return (
    <div className=" relative w-48 h-48   p-14 rounded-md flex items-center justify-center"
    onMouseEnter={()=> setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
    {firmInfo?.logo ? 
    <img src={firmInfo.logo} alt=""/> :
    <img 
        src={displayedLogo}
        alt="company logo"
        className="w-full h-full rounded-md  "
        />
    }
       
       { hovered && (
        <div className=" absolute w-full  bottom-0 bg-black bg-opacity-50 flex
        items-center justify-center rounded-md rounded-t-none cursor-pointer ">
            <label className="text-white cursor-pointer"
            htmlFor="logo-upload"
            >
            Change
            </label>
            <input
               id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />

        </div>

       ) }
       
    </div>
  )
}

export default FirmLogo