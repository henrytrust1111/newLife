import React from "react";
import { RiEdit2Fill } from "react-icons/ri";

const EditProfile = () => {
  return (
    <div className="w-full h-max flex flex-col items-center">
      <div className="h-[30vh] w-full bg-hero1 bg-center flex items-center text-black font-bold text-5xl pl-11 space-x-6">
        {" "}
        <p className="font-[Roboto] max-[700px]:italic max-[700px]:text-white">Edit Profile</p> <RiEdit2Fill className="max-[700px]:text-white" />{" "}
      </div>
      <div className="w-[80%] h-max flex flex-col items-center mt-16 gap-10 py-10 max-[700px]:w-[90%] ">
        <p className="font-[Pacifico] font-thin text-5xl text-[#3e3c3c]  ">Profile Details</p>
        <div className="flex w-full h-max justify-between gap-10 max-[700px]:flex-col">
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase  text-[18px] font-semibold  text-[#323232] ">first name</label>
            <input type="text" name="firstName" placeholder="First Name" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none" />
          </div>
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase  text-[18px] font-semibold  text-[#323232] ">last name</label>
            <input type="text" name="firstName" placeholder="Last Name" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none" />
          </div>
        </div>
        <div className="flex w-full h-max justify-between gap-10 max-[700px]:flex-col ">
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase text-[18px] font-semibold  text-[#323232] ">Display Name</label>
            <select name="" id="" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none">
              <option value="" className="uppercase">UserName</option>
              <option value="" className="uppercase">UserName</option>
            </select>
          </div>
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase text-[18px] font-semibold text-[#323232] ">profile picture</label>
            <div className="h-[50px] w-[120px] flex justify-center items-center bg-[#2c2b2b] text-white uppercase text-lg font-semibold ">upload</div>
          </div>
        </div>
        <div className="flex w-full h-max justify-between gap-10 max-[700px]:flex-col-reverse ">
        <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase text-[18px] font-semibold text-[#323232] ">DAILY INSPIRATION EMAIL</label>
            <div className="w-full flex items-center gap-3"><input type="checkbox" name="check" className="w-7 h-7 outline-none"/>Send daily inspiration to my e-mail</div>
          </div>
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase text-[18px] font-semibold text-[#323232] ">timezone <span className="text-red-500 font-bold"> *</span></label>
            <select name="" id="" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none">
              <option value="" className="uppercase">(GMT -5:00) Eastern Time(Canada & US),Bogota, Lima</option>
              <option value="" className="uppercase">(GMT -5:00) Eastern Time(Canada & US),Bogota, Lima</option>
            </select>
          </div>
        </div>
        <div className="flex w-full h-max justify-between gap-10 max-[700px]:flex-col-reverse ">
        <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase text-[18px] font-semibold text-[#323232] ">EMAIL UPDATES</label>
            <div className="w-full flex items-center gap-3"><input type="checkbox" name="check" className="w-7 h-7"/>I want to stay up-to-date! Send me occasional email updates.</div>
          </div>
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase text-[18px] font-semibold text-[#323232] ">PREFERRED LANGUAGE <span className="text-red-500 font-bold"> *</span></label>
            <select name="" id="" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none">
              <option value="" className="uppercase">English</option>
              <option value="" className="uppercase">Spanish</option>
              <option value="" className="uppercase">France</option>
            </select>
          </div>
        </div>
        <p className="font-[Pacifico] font-thin text-5xl text-[#3e3c3c] italic ">My Faith</p>
        <div className="flex flex-col items-center gap-5">
        <p className="uppercase text-xl">Are you a Person of faith?</p>
        <div className="flex gap-4 items-center justify-center">
        <div className="flex gap-2 items-center justify-center"><input type="radio" name="" id="" className="w-[20px] h-[20px] " /> <span className="text-lg">Yes</span></div>
        <div className="flex gap-2 items-center justify-center"><input type="radio" name="" id="" className="w-[20px] h-[20px] " /> <span className="text-lg">No</span></div>
        </div>
        </div>
        <div className="w-full flex flex-col">
        <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase text-[18px] font-semibold  text-[#323232] ">I CONSIDER MYSELF A:</label>
            <select name="" id="" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none">
              <option value="Choose Your Faith" className="uppercase" defaultValue={"Choose Your Faith"}>Choose Your Faith</option>
              <option value="Christain" className="uppercase">Christain</option>
              <option value="Catholic" className="uppercase">Catholic</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
        <p className="uppercase text-xl text-center max-[700px]:w-[100%]">HOW ENGAGED ARE YOU IN YOUR FAITH?</p>
        <div className="flex gap-4 items-center justify-around flex-wrap ">
        <div className="flex gap-2 items-center justify-center"><input type="radio" name="" id="" className="w-[20px] h-[20px] " /> <span className="text-lg">Undefined</span></div>
        <div className="flex gap-2 items-center justify-center"><input type="radio" name="" id="" className="w-[20px] h-[20px] " /> <span className="text-lg">Non-practicing</span></div>
        <div className="flex gap-2 items-center justify-center"><input type="radio" name="" id="" className="w-[20px] h-[20px] " /> <span className="text-lg">Disillution</span></div>
        <div className="flex gap-2 items-center justify-center"><input type="radio" name="" id="" className="w-[20px] h-[20px] " /> <span className="text-lg">In the middle</span></div>
        <div className="flex gap-2 items-center justify-center"><input type="radio" name="" id="" className="w-[20px] h-[20px] " /> <span className="text-lg">Enthusiastic</span></div>
        <div className="flex gap-2 items-center justify-center"><input type="radio" name="" id="" className="w-[20px] h-[20px] " /> <span className="text-lg">Actively-involved</span></div>
        </div>
        </div>
        <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="uppercase text-[18px] font-semibold  text-[#323232] ">My Testimony</label>
            {/* <input type="text" name="firstName" placeholder="" className="px-3 text-black text-xl w-full h-[300px] border-2 border-[#4b4b4b] outline-none"></textarea> */}
            <textarea name="" id="" cols="30" rows="10" className="p-3 text-black text-xl w-full  border-2 border-[#4b4b4b] outline-none"></textarea>
        </div> 
        <p className="font-[Pacifico] font-thin text-5xl text-[#3e3c3c]  ">account Details</p>
        <div className="flex w-full h-max justify-between gap-10 max-[700px]:flex-col ">
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase  text-[18px] font-semibold  text-[#323232] ">username<span className="text-red-500 font-bold"> *</span></label>
            <input type="text" name="userName" placeholder="User Name" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none" />
            <p>Please use only alphanumeric characters and underscores.</p>
          </div>
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase  text-[18px] font-semibold  text-[#323232] ">email<span className="text-red-500 font-bold"> *</span></label>
            <input type="email" name="email" placeholder="Email" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none" />
          </div>
        </div>      
        <div className="flex w-full h-max justify-between gap-10 max-[700px]:flex-col ">
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase  text-[18px] font-semibold  text-[#323232] ">password<span className="text-red-500 font-bold"> *</span></label>
            <input type="password" name="firstName" placeholder="Password" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none" />
          </div>
          <div className="flex flex-col w-[50%] gap-2 max-[700px]:w-full">
            <label htmlFor="" className="uppercase  text-[18px] font-semibold  text-[#323232] ">confirm password<span className="text-red-500 font-bold"> *</span></label>
            <input type="password" name="firstName" placeholder="Confirm Password" className="px-3 text-black text-xl w-full h-[50px] border-2 border-[#4b4b4b] outline-none" />
          </div>
        </div>
        <div className="w-[140px] h-[70px] bg-[#333] flex items-center justify-center text-white font-semibold text-xl uppercase ">update</div>      
      </div>
    </div>
  );
};

export default EditProfile;
