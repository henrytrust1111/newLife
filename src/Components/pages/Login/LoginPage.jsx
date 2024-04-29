import { useState } from "react";
import "./login.css";
import { FaApple } from "react-icons/fa";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({setShow1,setShow}) => {
  const handleSignUp = ()=>{
    setShow1(false)
    setShow(true)
  }
  const handleClose = ()=>{
    // localStorage.setItem("SignIn", false)
    localStorage.removeItem("SignIn")
    setShow1(false)
  }
  const [showpassword, setShowpassword] = useState(false);
  return (
    <div className="registerContainer">
      <div className="registerwrap">
        <div className="apple">
          <div className="w-full flex justify-end p-2">
            <IoCloseSharp
              className="text-4xl cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <div className="w-[90%] flex justify-between mb-2 px-4">
            <p className="w-[50%]">Sign in with</p>
            <p className="w-[50%] text-right">
              If you are not a member?
              <span className="text-blue-500 cursor-pointer" onClick={handleSignUp}> Signup</span>
            </p>
          </div>
          <div className="applehold">
            <div className="appleitself">
              <FaApple />
            </div>
          </div>
        </div>
        <div className="inputhold">
          <p>USERNAME OR EMAIL</p>
          <input type="text" className="email" />
        </div>
        <div className="inputhold">
          <p>PASSWORD</p>
          <div className="email">
            <input
              type={showpassword ? "text" : "password"}
              className="password"
            />
            {showpassword ? (
              <IoIosEyeOff onClick={() => setShowpassword(!showpassword)} />
            ) : (
              <IoMdEye onClick={() => setShowpassword(!showpassword)} />
            )}
          </div>
        </div>
        <div className="remember">
          <input type="checkbox" />
          <p>REMEMBER ME</p>
        </div>
        <div className="signupbutt">
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
