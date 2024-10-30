const SelectUnit = ({ value, onChange }) => {
  const listOfUnits = [
    "PIECES(Pcs)",
    "KILOGRAMS(Kgs)",
    "GRAMS(Grms)",
    "BOTTLE",
    "BAGS",
    "METRICS",
    "TONS",
    "METRE",
    "CENTIMETER",
    "MILLIMETRE"
  ];

  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-green-200 py-1 px-2 rounded-md"
      >
        <option value="none" className="bg-white">Select Unit</option>
        {listOfUnits.map((unit, index) => (
          <option key={index} value={unit.toLowerCase().replace(/[\s()]/g, "_")} className="bg-white">
            {unit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectUnit;


