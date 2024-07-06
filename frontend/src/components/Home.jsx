import Dashboard from "./Dashboard/Dashboard"
import Sidebar from "./Sidebar"



const Home = () => {
  return (
    <div className="flex flex-row">
   <Sidebar/>
   <Dashboard />
  
    </div>
  )
}

export default Home