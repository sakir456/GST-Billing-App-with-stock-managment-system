import SalesGraph from "./SalesGraph"


const DashboardGraphs = () => {
  return (
    <div className="w-auto mt-[50px] ml-4">
    <div className="mb-2 ml-3 font-medium text-customGreen">Sales Graph</div>
      <SalesGraph />
     
    </div>
  )
}

export default DashboardGraphs