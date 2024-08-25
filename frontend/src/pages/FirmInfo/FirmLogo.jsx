import { useState } from "react"


const FirmLogo = () => {
    const [logo, setLogo] = useState("/shop.png");
    const [hovered, setHovered] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setLogo(reader.result);
          };
          reader.readAsDataURL(file);
        }
    }
  return (
    <div className=" relative w-48 h-48   p-14 rounded-md flex items-center justify-center"
    onMouseEnter={()=> setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
        <img 
        src={logo}
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