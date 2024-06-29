

const Login = () => {
  return (
    <div className="w-full">
          {/* Log in Form */}
     <form className="flex flex-col">
      <input type="text" placeholder="Username" className="mt-6 mx-3 mb-3 py-2.5 px-4 bg-gray-200 rounded-xl
       placeholder:text-base  placeholder:text-black"/>
      <input type="password" placeholder="Password" className="mx-3 mb-3 py-2.5 px-4 bg-gray-200 rounded-xl
       placeholder:text-base placeholder:text-black"/>
     <button className="mx-3 mb-3 py-2 px-5  bg-green-500 rounded-xl text-white text-base ">Login</button>
     <p className="mt-3 mx-6 mb-3   cursor-pointer">Not part of Our community?? SignUp Now</p>
    <div className="border-b-2 border-gray-300 mx-4 mt-2 mb-5"></div>
   </form>
    </div>
  )
}

export default Login