

const TaxRateSale = ({onChange, value}) => {

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
        <div className="w-1/6 flex  justify-center border-r-2 h-full  items-center text-right focus:outline-customLightGreen">
          <select 
           
           
            className="w-full py-2 px-5   focus:outline-customLightGreen" 
            value={value}

            onChange={onChange}
          >
            {taxRates.map((rate, index) => (
              <option key={index} value={rate.toLowerCase().replace("@", "").replace(" ", "_")} className="focus:outline-customLightGreen">
                {rate}
              </option>
            ))}
          </select>
        </div>
      );
}

export default TaxRateSale