import { useEffect, useState } from "react"
import useSidebarStore from "../../zustand/useSidebarStore";


const FirmLogo = () => {
   const {logo, setLogo} = useSidebarStore()
   const [displayedLogo, setDisplayedLogo] = useState("/shop.png");
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      if (logo) {
        const reader = new FileReader();
        reader.onload = () => {
          setDisplayedLogo(reader.result);
        };
        reader.readAsDataURL(logo);
      }
    }, [logo]);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setLogo(file); 
      }
    };
  
  return (
    <div className=" relative w-48 h-48   p-14 rounded-md flex items-center justify-center"
    onMouseEnter={()=> setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
        <img 
        src={displayedLogo}
        alt="company logo"
        className="w-full h-full rounded-md  "
        />
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