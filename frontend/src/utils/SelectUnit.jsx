

const SelectUnit = () => {
    const listOfUnits= ["PIECES(Pcs)","KILOGRAMS(Kgs)","GRAMS(Grms)","BOTTLE","BAGS","METRICS","TONS","METRE","CENTIMETER","MILLIMETRE"]
  return (
    <div className="">
    <select defaultValue="" className="bg-green-200 py-1 px-2 rounded-md">
          <option value="" className="bg-white" >Select Unit</option>
          {listOfUnits.map((unit, index) => (
            <option key={index} value={unit.toLowerCase().replace(" ", "_")} className="bg-white ">{unit}</option>
          ))}
        </select>

    </div>
  )
}

export default SelectUnit