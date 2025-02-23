import { useState } from "react";
import toast from "react-hot-toast";


const useGetChartData = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchChartData = async() => {
        setLoading(true)
        try {
            const res = await fetch(`${API_BASE_URL}/api/invoice/getchartdata`)
            const data  =  await res.json()

            if (data.error) {
                throw new Error(data.error || "Failed to fetch chart data");
              }
             
      
              console.log(data)
              setData(data)
        } catch (error) {
            toast.error(error.message);
        }finally {
            setLoading(false);
          }
    }

    return {fetchChartData, data, loading}
}

export default useGetChartData