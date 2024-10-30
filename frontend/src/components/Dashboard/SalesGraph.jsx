import { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useGetChartData from "../../hooks/chart/useGetChartData";



const SalesGraph = () => {
 const {fetchChartData, data} = useGetChartData()

  useEffect(() => {
    fetchChartData();  
  }, []);

  const placeholderData = [
    { date: "No Data", amount: 0 },
    { date: "", amount: 1 }, // Additional points to give some structure to the graph
  ];

  const chartData = data.length > 0 ? data : placeholderData;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis
          tickFormatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#308760"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
