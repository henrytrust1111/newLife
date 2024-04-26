import { useState } from "react";
import "./login.css";
import { FaApple } from "react-icons/fa";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

const LOGIN = () => {
  const [showpassword, setShowpassword] = useState(false);
  return (
    <div className="registerwrap">
      <div className="apple">
        <div className="applehold">
          <h3>Sign in with</h3>
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
  );
};

export default LOGIN;
