import Dashboard from "./Dashboard"
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