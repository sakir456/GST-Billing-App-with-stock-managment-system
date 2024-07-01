import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className='bg-green-200 w-screen h-screen flex justify-center items-center'>
    <div className=" w-auto h-auto shadow-md bg-white">
    <form>
    <h1 className=" mt-2 sm:mt-6 text-center font-semibold">User Login</h1>
    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-14  flex flex-col sm:flex-row sm:items-center ">
      <label className=" font-normal">Username :</label>
      <input type="text" placeholder="Enter Username"  className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3 py-1 pr-1 pl-1 sm:ml-12 mt-1 
       border border-gray-200  bg-gray-100 outline-gray-300 rounded-md"/>
    </div>
    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-14  flex flex-col sm:flex-row sm:items-center ">
      <label  className=" font-normal">Password:</label>
      <input type="Password" placeholder="Enter Password" className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3 py-1 pr-1 pl-1 sm:ml-14 mt-1 
       border border-gray-200  bg-gray-100 outline-gray-300 rounded-md" />
    </div>
    <div className="text-center  my-2 sm:my-4 ">
    <button className="bg-green-300 py-1 px-3 rounded-md hover:bg-green-400" >Login</button>
    </div>
    <p className="text-center mb-3 sm:text-base text-sm mx-3">{"Don't"} have an account? 
    <Link to={"/signup"} className="font-medium text-green-400 hover:text-green-500 ">Click to Sign Up</Link>
    </p>
    </form>
 


    </div>
    </div>
  )
}

export default Login