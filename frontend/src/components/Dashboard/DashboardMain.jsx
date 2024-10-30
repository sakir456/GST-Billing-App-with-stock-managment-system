import DashboardButton from "./DashboardButton";
import DashboardGraphs from "./DashboardGraphs";
import DashboardMainRight from "./DashboardMainRight";


const DashboardMain = () => {
  return (
    <div className="mt-8 w-full flex ">
      <div className="flex w-3/4 flex-col">
       <DashboardButton/>
      <DashboardGraphs/>
     </div>
    
    
    <DashboardMainRight/>
    
    </div>
  )
}

export default DashboardMain