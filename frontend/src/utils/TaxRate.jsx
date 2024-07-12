const TaxRate = ({ value, onChange }) => {
  const taxRates = [
    "None",
    "IGST@0%",
    "GST@0%",
    "IGST@0.25%",
    "GST@0.25%",
    "IGST@3%",
    "GST@3%",
    "IGST@5%",
    "GST@5%",
    "IGST@12%",
    "GST@12%",
    "IGST@18%",
    "GST@18%",
    "IGST@28%",
    "GST@28%",
    "Exempted"
  ];

  return (
    <div className="my-3">
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="py-1 px-2 border-2 border-gray-300 focus:outline-customLightGreen"
      >
        {taxRates.map((rate, index) => (
          <option key={index} value={rate.toLowerCase().replace("@", "").replace(" ", "_")}>
            {rate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaxRate;

