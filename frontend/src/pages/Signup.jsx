

const Signup = () => {
  return (
    <div className="w-full">
    <form className="flex flex-col">
    <input type="text" placeholder="fullname" className="mt-6 mx-3 mb-3 py-2.5 px-4 bg-gray-200 rounded-xl
       placeholder:text-base  placeholder:text-black"/>
    <input type="text" placeholder="username" className=" mx-3 mb-3 py-2.5 px-4 bg-gray-200 rounded-xl
       placeholder:text-base  placeholder:text-black"/>
    <input type="password" placeholder="password" className=" mx-3 mb-3 py-2.5 px-4 bg-gray-200 rounded-xl
       placeholder:text-base  placeholder:text-black"/>
    <input type="text" placeholder="confirm password" className=" mx-3 mb-3 py-2.5 px-4 bg-gray-200 rounded-xl
       placeholder:text-base  placeholder:text-black"/>
    <input type="email" placeholder="email" className=" mx-3 mb-3 py-2.5 px-4 bg-gray-200 rounded-xl
       placeholder:text-base  placeholder:text-black"/>
    <button className="mx-3 mt-2 mb-3 py-2 px-5  bg-green-500 rounded-xl text-white text-base ">Sign Up</button>
    <p className="my-2 ml-16 cursor-pointer ">Already a member?Login Now </p>
    <div className="border-b-2 border-gray-300 mx-4 mt-2 mb-5"></div>
   </form>
    </div>
  )
}

export default Signup