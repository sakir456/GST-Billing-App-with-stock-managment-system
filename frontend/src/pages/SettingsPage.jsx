import { RxCross1 } from "react-icons/rx"
import useSettingsStore from "../zustand/useSettingsStore"
import useSaveSetting from "../hooks/settings/useSaveSetting";
import useUpdateSetting from "../hooks/settings/useUpdateSetting";


const SettingsPage = () => {
    const {setIsSettings, setTermsAndConditions, termsAndConditions, termsAndConditionsData} = useSettingsStore();
    const {saveSetting} = useSaveSetting()
    const {updateSetting} = useUpdateSetting()

    const handleInputChange = (e)=> {
      setTermsAndConditions(e.target.value)
    }

    const handleSubmit  = async(e)=> {
        e.preventDefault()
        const TermsAndConditions = termsAndConditions

        if(termsAndConditionsData){
           updateSetting(termsAndConditionsData._id, TermsAndConditions)
        }else{
          await saveSetting(TermsAndConditions)
        }
       
        
    }
    
    const handleCross = () => {
       setIsSettings(false)
    }

    const isSaveDisabled = !termsAndConditions || termsAndConditions.trim()===""
  return (
    <form className="px-10 py-5" onSubmit={handleSubmit}>
    <div className="flex justify-between text-lg font-medium">
        <div className=" ml-3 text-customGreen">Settings</div>
        <RxCross1 className="mr-3 cursor-pointer" onClick={handleCross}  />
        </div>
        <div className="mt-5 ml-2 flex  gap-8">
            <div className="flex gap-2 items-center relative">
              <textarea
              value={termsAndConditions}
                placeholder="Terms & Conditions"
                className=" h-20 w-96 mt-2 px-2  py-1 border-2 border-gray-300  
                outline-none  resize-none box-border   rounded-md"
                onChange={ handleInputChange}
              />
              {termsAndConditions && (
                <label className="absolute text-[11px] font-medium text-customLightGreen bg-white top-0 left-2">Terms & Conditions</label>
              )}
              
            </div>
        </div>
        
        <div  className=" flex gap-3 justify-end">
        <button className="mt-8 items-center px-4 py-2 text-customLightGreen rounded-md 
       border border-customLightGreen hover:bg-customGreen hover:text-white " onClick={handleCross}>Cancel</button>
      <button className={`mt-8 items-center px-4 py-2 text-white rounded-md 
      ${isSaveDisabled ? "bg-gray-400": "bg-customLightGreen"} `} disabled={isSaveDisabled}  >
      {termsAndConditionsData ? "Update" : "Save"} </button>
      </div>
        </form>
   
  )
}

export default SettingsPage