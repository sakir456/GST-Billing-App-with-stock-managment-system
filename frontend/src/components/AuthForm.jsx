import { useState } from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Initialize as a boolean

  const handleLoginbtn = () => {
    setIsLogin(true); // Toggle the boolean value
  };

  const handleSignupbtn = () => {
    setIsLogin(false)
  }

  return (
   
  
    
    <div className="absolute left-[596px] top-44 w-auto h-auto flex flex-col shadow-xl   ">
      <div className="w-full h-full flex justify-center">
        <button
          className={`px-16 py-3 ${isLogin ? "bg-green-500 rounded-xl text-white" : ""}`}
          onClick={handleLoginbtn}
        >
          Log In
        </button>
        <button
          className={`px-16 py-3 ${!isLogin ? "bg-green-500 rounded-xl text-white" : ""}`}
          onClick={handleSignupbtn}
        >
          Sign Up
        </button>
      </div>
      {isLogin ? <Login /> : <Signup /> }
      
    </div>
    
  );
};

export default AuthForm;
