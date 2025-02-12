import React from "react";
import HeaderMenu from "../container/HeaderMenu";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = ()=>{
    localStorage.removeItem("SignUp")
    localStorage.setItem("SignIn", true)
    
  }
  const handleSignUp = ()=>{
    localStorage.removeItem("SignIn")
    localStorage.setItem("SignUp", true)
  }
  return (
    <>
      <div className="w-full h-max flex flex-col items-center justify-center bg-[#26211d]">
        <div className="w-[90%] h-[13vh] flex items-center justify-between text-white">
          <div className="text-2xl font-bold" onClick={() => navigate("/")}>
            NewLife
          </div>
          <div className="flex space-x-4">
            <div className="flex justify-center border w-[85px] h-[35px] items-center rounded cursor-pointer" onClick={handleSignIn}>
              Sign-in
            </div>
            <div className="border flex justify-center w-[85px] h-[35px] items-center rounded cursor-pointer " onClick={handleSignUp}>
              Sign-up
            </div>
          </div>
        </div>
        <div className="w-full h-max flex bg-[#ECC731] justify-center">
          <div className="w-[90%] h-[10vh] flex justify-between ">
            <div className="w-[50%] flex items-center ">
              <div className="hidden max-[700px]:w-8 max-[700px]:h-8 max-[700px]:flex max-[700px]:items-center ">
                {!show ? (
                  <img
                    src="/icons/menu.png"
                    alt=""
                    onClick={() => setShow(true)}
                  />
                ) : (
                  <IoMdClose className="text-3xl text-white" onClick={() => setShow(false)} />
                )}
              </div>
              <ul className="w-full flex justify-between items-center text-l font-semibold cursor-pointer text-[#26211D] uppercase max-[700px]:hidden">
                <li onClick={() => navigate("/")}>Home</li>
                {/* <li>Explore Faith</li> */}
                <li onClick={() => navigate("/bible")}>Read the Bible</li>
                <li onClick={() => navigate("/find")}>Find a Church</li>
                <li onClick={() => navigate("/request")}>Request a Prayer</li>
              </ul>
            </div>

            <div className="w-[50%] flex justify-end items-center space-x-1">
              <div
                onClick={() => navigate("/profile")}
                className="max-[700px]:text-white cursor-pointer"
              >
                UserName
              </div>
              <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full ">
                <CgProfile className="text-2xl max-[700px]:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <HeaderMenu />}
    </>
  );
};

export default Header;
