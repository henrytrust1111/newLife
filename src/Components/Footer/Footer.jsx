import React from "react";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiMailFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="h-max w-full flex flex-col items-center justify-center bg-[#32302f]">
      <div className="w-[90%] h-max flex justify-between space-x-8  py-10 max-[700px]:flex-col max-[700px]:space-x-0 max-[700px]:space-y-8">
        <div className="flex flex-col space-y-7 w-[33%] max-[700px]:w-full">
          <p className="text-white text-3xl">NewLife</p>
          <p className="text-[#ffffff5d]">
            It is a fundraising association that works globally to provide
            support in education via charity. Their members have spread
            worldwide to ensure that fundraising amount to delivering at the
            right place and for the right purposes
          </p>
          <div className="flex flex-col w-full space-y-2">
            <div className="flex w-full space-x-2 text-[#ffffff5d] items-center">
              <FaHouseChimneyWindow />{" "}
              <p className="w-full">A-105, Sector-82, Agra, 282001, India</p>
            </div>
            <div className="flex w-full space-x-2 text-[#ffffff5d] items-center">
              <PiPhoneCallFill /> <p className="w-full">+234 231 564 64</p>
            </div>
            <div className="flex w-full space-x-2 text-[#ffffff5d] items-center">
              <RiMailFill /> <p className="w-full">contact@newlifeBible.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-7 w-[33%] max-[700px]:w-full">
          <p className="text-white text-3xl">Twitter Feed</p>
          <p className="text-[#ffffff5d]">
            <span className="text-yellow-500 ">@charity</span> We are a charity
            trust that dedicatedly work for several countries around the globe.
            Twitter Alerts will provide your some critical information about
            those people that need help of yours.
          </p>
          <p className="text-[#ffffff5d]">
            <span className="text-yellow-500 ">@charity</span> We are a charity
            trust that dedicatedly work for several countries around the globe.
            Twitter Alerts will provide your some critical information about
            those people that need help of yours.
          </p>
        </div>
        <div className="flex flex-col space-y-7 w-[33%] max-[700px]:w-full">
          <p className="text-white text-3xl">Newsletter SignUp</p>
          <p className="text-[#ffffff5d]">
            Sign up your account to check our newsletter that will undoubtedly
            help you acquainted with current scenario.
          </p>
          <div className="w-full flex h-[50px] justify-between ">
            <input
              type="text"
              placeholder="Email"
              className="h-full w-full px-2 text-[#ffffff5d] border-y-2 border-l-2 border-[#ffffff5d] outline-none bg-transparent "
            />{" "}
            <div className="border-2 border-yellow-500 min-w-[120px] h-full flex items-center justify-center text-yellow-500 uppercase font-semibold text-lg cursor-pointer ">
              submit
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex text-center px-12 items-center justify-center text-[#ffffff5d] py-5 bg-[#2a2928]">
        © Copyright 2014, All Rights Reserved by Charity Theme.
      </div>
    </div>
  );
};

export default Footer;
