import DashboardButton from "./DashboardButton";
import DashboardGraphs from "./DashboardGraphs";
import DashboardMainRight from "./DashboardMainRight";


const DashboardMain = () => {
  return (
    <div className="mt-12 w-full flex ">
      <div className="flex w-auto flex-col">
       <DashboardButton/>
      <DashboardGraphs/>
     </div>
    
    <div className="w-auto ml-8 shadow-md">
    <DashboardMainRight/>
    </div>
    </div>
  )
}

export default DashboardMain