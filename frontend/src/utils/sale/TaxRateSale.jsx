

const TaxRateSale = ({ onChange, value }) => {
  const taxRates = [
    "Select",
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
    <div className="w-1/2 flex justify-center border-r-2 h-full items-center text-right">
      <select
        className="w-full py-2"
        value={value} // Ensure this matches one of the option values
        onChange={onChange}
      >
        {taxRates.map((rate, index) => (
          <option key={index} value={rate} className="text-sm">
            {rate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaxRateSale;
