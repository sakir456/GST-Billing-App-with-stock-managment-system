import { useState } from "react"
import { Link } from "react-router-dom"
import useSignup from "../hooks/useSignup"
import LoadingSpinner from "../components/LoadingSpinner"
import AppNameSection from "../components/AppNameSection"


const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmpassword: "",
        email: ""
    })
    const {loading, signup} =useSignup();

    

 const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
    

 }
    
  return (
    <div className=' w-screen h-screen flex flex-col justify-center items-center'>
    <AppNameSection/>
    <div className=" w-auto h-auto shadow-md bg-white">
    <form onSubmit={handleSubmit}>
    <h1 className=" mt-2 sm:mt-6 text-center font-semibold text-customGreen">User Signup</h1>

    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-14  flex flex-col sm:flex-row sm:items-center ">
      <label className=" font-normal text-customLightGreen">Full Name :</label>
      <input type="text" placeholder="Enter Fullname"  className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3
       py-1 pr-1 pl-1 sm:ml-28 mt-1  border border-gray-200  bg-gray-100 outline-gray-300 rounded-md" 
       value={inputs.fullName}  onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
       />
    </div>

    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-14  flex flex-col sm:flex-row sm:items-center ">
      <label className=" font-normal  text-customLightGreen">Username :</label>
      <input type="text" placeholder="Enter Username"  className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3
       py-1 pr-1 pl-1 sm:ml-28 mt-1  border border-gray-200  bg-gray-100 outline-gray-300 rounded-md"
        value={inputs.userName} onChange={(e) => setInputs({...inputs, userName: e.target.value})}
       />
    </div>

    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-14  flex flex-col sm:flex-row sm:items-center ">
      <label  className=" font-normal  text-customLightGreen">Password:</label>
      <input type="Password" placeholder="Enter Password" className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3
       py-1 pr-1 pl-1 sm:ml-[121px] mt-1 border border-gray-200  bg-gray-100 outline-gray-300 rounded-md" 
       value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}
        />
    </div>

    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-14  flex flex-col sm:flex-row sm:items-center ">
      <label className=" font-normal  text-customLightGreen">confirm password :</label>
      <input type="text" placeholder="Enter Confirm password "  className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3
       py-1 pr-1 pl-1 sm:ml-[56px] mt-1 border border-gray-200  bg-gray-100 outline-gray-300 rounded-md" 
       value={inputs.confirmpassword} onChange={(e) => setInputs({...inputs, confirmpassword: e.target.value})}
      />
    </div>

    <div className="text-center mt-2 mx-3 sm:mt-6 sm:ml-12 sm:mr-10  flex flex-col sm:flex-row sm:items-center ">
      <label className=" font-normal  text-customLightGreen">Email :</label>
      <input type="Email" placeholder="Enter Email"  className=" sm:w-80 sm:py-1 sm:pr-2 sm:pl-3
      py-1 pr-1 pl-1 sm:ml-36 mt-1 border border-gray-200  bg-gray-100 outline-gray-300 rounded-md" 
      value={inputs.email} onChange={(e) => setInputs({...inputs, email: e.target.value})}
      />
    </div>

    <div className="text-center  my-2 sm:my-4 ">
    <button className="bg-customGreen py-1 px-3 rounded-md hover:bg-customLightGreen text-white" disabled={loading} >
    {loading ? <LoadingSpinner/> : "Sign Up"}
    </button>
    </div>

    <p className="text-center mb-3 sm:text-base text-sm mx-3 text-customLightGreen">Already have an account? 
    <Link to={"/login"} className="font-medium text-customGreen hover:text-customLightGreen ">Click to Login</Link>
    </p>
    </form>
 


    </div>
    </div>
  )
}

export default SignUp