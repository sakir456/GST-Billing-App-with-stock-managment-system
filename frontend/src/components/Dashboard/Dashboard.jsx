import { useEffect } from "react"
import useSaleStore from "../../zustand/useSaleStore"
import DashboardMain from "./DashboardMain"
import Searchbar from "./Searchbar"


const Dashboard = () => {
  const {resetForm} = useSaleStore()

  useEffect(()=> {
    resetForm()
  },[])
  
  return (
    <div className="w-auto">
    <Searchbar />
    <DashboardMain />
    </div>
  )
}

export default Dashboard