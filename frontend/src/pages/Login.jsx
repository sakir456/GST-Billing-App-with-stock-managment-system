

const Login = () => {
  return (
    <div className="w-auto h-auto shadow-md bg-white">
    <form>
    <h1 className="mt-6 text-center font-semibold">User Login</h1>
    <div className="text-center mt-6 ml-12 mr-14 ">
      <label className=" font-normal">Username :</label>
      <input type="text" placeholder="Enter Username"  className="py-1 pr-28 pl-3 ml-12 
       border border-gray-200  bg-gray-100 outline-gray-300 rounded-md"/>
    </div>
    <div className="text-center mt-2 ml-12 mr-14 ">
      <label  className=" font-normal">Password:</label>
      <input type="Password" placeholder="Enter Password" className="py-1 pr-28 pl-3 ml-14 
       border border-gray-200  bg-gray-100 outline-gray-300 rounded-md" />
    </div>
    <div className="text-center my-4 ">
    <button className="bg-green-300 py-1 px-3 rounded-md hover:bg-green-400" >Login</button>
    </div>
    <p className="text-center mb-3">{"Don't"} have an account? 
    <button className="font-medium text-green-400 hover:text-green-500">Click to Sign Up</button>
    </p>
    </form>
 


    </div>
  )
}

export default Login