import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin";
import LoadingSpinner from "../components/LoadingSpinner";
import AppNameSection from "../components/AppNameSection";


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {loading, login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)

}
  return (
    <div className=' w-screen h-screen flex flex-col  justify-center items-center'>
    <AppNameSection />
    <div className=" w-auto h-auto shadow-md bg-white">
    <form onSubmit={handleSubmit}>
    <h1 className=" mt-2 sm:mt-6 text-center font-semibold text-customGreen">User Login</h1>
    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-14  flex flex-col sm:flex-row sm:items-center ">
      <label className=" font-normal text-customLightGreen">Email :</label>
      <input type="email" placeholder="Enter Email"  className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3 py-1 
      pr-1 pl-1 sm:ml-20 mt-1 border border-gray-200  bg-gray-100 outline-gray-300 rounded-md"
      value={email}  onChange={(e) => setEmail(e.target.value)}

       />
    </div>
    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-14  flex flex-col sm:flex-row sm:items-center ">
      <label  className=" font-normal text-customLightGreen">Password:</label>
      <input type="Password" placeholder="Enter Password" className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3 py-1 
      pr-1 pl-1 sm:ml-14 mt-1 border border-gray-200  bg-gray-100 outline-gray-300 rounded-md" 
      value={password} onChange={(e) => setPassword(e.target.value)}

      />

    </div>
    <div className="text-center  my-2 sm:my-4 ">
    <button className="bg-customGreen py-1 px-3 rounded-md hover:bg-customLightGreen text-white" disabled={loading} >
    {loading ? <LoadingSpinner/> : "Login"}
    </button>
    </div>
    <p className="text-center mb-3 sm:text-base text-sm mx-3 text-customLightGreen">{"Don't"} have an account? 
    <Link to={"/signup"} className="font-medium text-customGreen hover:text-customLightGreen ">Click to Sign Up</Link>
    </p>
    </form>
 


    </div>
    </div>
  )
}

export default Login