import { FaRegTrashAlt } from "react-icons/fa"
import { FiBox } from "react-icons/fi"
import { LuPencil } from "react-icons/lu"
import usePartyStore from "../../zustand/usePartyStore"
import useGetParties from "../../hooks/parties/useGetParties"
import LoadingSpinnerNew from "../LoadingSpinnerNew"
import useDeleteParty from "../../hooks/parties/useDeleteParty"
import { useState } from "react";

const PartiesMainContainer = () => {
    const {setIsParty,  setIsUpdatePartyForm, setPartyData} = usePartyStore();
    const { parties, loading, fetchParties } = useGetParties();
    const { deleteParty, isLoading } = useDeleteParty()
    const [searchQuery,setSearchQuery] = useState("")

    const handleAddPartyButton = () => {
      setIsParty(true)
      setIsUpdatePartyForm(false)
    }

    const handleUpdatePartyButton = (party) => {
      setIsParty(true)
      setIsUpdatePartyForm(true)
       setPartyData(party)
    }

    const handleDeletePartyButton = async(partyId) => {
      if (window.confirm("Are you sure you want to delete this item?")) {
        try {
          await deleteParty(partyId);
          fetchParties(); 
        } catch (error) {
          console.error('Error deleting Party:', error);
        }
      }
    }
    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value)
    }

    const filteredItems = parties.filter(party => 
      party.partyName.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div>
   {loading || isLoading ? (
    <LoadingSpinnerNew />
    ) : (
      <div className="m-4">
    <div className="flex justify-between ">
          <div className="flex items-center gap-2 ">
            <FiBox className="text-customLightGreen bg-green-100 rounded-full" />
            <p className="font-medium">Parties List</p>
          </div>
          <div className="flex gap-5">
            <input type="search" placeholder="Search" className="py-1 pl-3 w-60 bg-gray-100 outline-none text-sm"
             value={searchQuery}
             onChange={handleSearchInputChange}
            />
            <button className="flex items-center px-2 py-1 bg-customLightGreen text-white rounded-md" onClick={handleAddPartyButton} >
              + Add Party
            </button>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex h-10 px-2 items-center bg-gray-100 border-2 border-gray-300 font-medium">
            <div className="w-1/4 text-center">Party Name</div>
             <div className="w-1/4 text-center">To Pay/Collect</div>
            <div className="w-1/4 text-center">Amount</div>
            <div className="w-1/4 text-center">Action</div>
            </div>

          { filteredItems &&
            filteredItems.map((party) => (
              <div className="flex h-10 px-2 items-center border border-b-2 border-x-2 border-gray-300" key={party._id}>
                <div className="w-1/4 text-center">{party.partyName}</div>
                <div className="w-1/4 text-center"> To Collect</div>
                <div className="w-1/4 text-center">{party.openingBalance}</div>
                <div className="w-1/4 h-full flex justify-center gap-3 text-center relative">
                  <button className="text-center group" onClick={() => handleUpdatePartyButton(party)} >
                    <LuPencil />
                    <span className="absolute hidden group-hover:block -bottom-4 left-24 bg-customLightGreen text-white text-xs rounded py-1 px-2">Edit</span>
                  </button>
                  <button className="text-center group" onClick={() => handleDeletePartyButton(party._id)} >
                    <FaRegTrashAlt />
                    <span className="absolute hidden group-hover:block -bottom-4 right-20 bg-customLightGreen text-white text-xs rounded py-1 px-2">Delete</span>
                  </button>
                </div>
                </div> 

            ))}
         
          </div>
</div>
    )}
    

</div>

  )
}

export default PartiesMainContainer