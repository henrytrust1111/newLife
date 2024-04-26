import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { SlOptionsVertical } from "react-icons/sl";
import { TfiSearch } from "react-icons/tfi";
const BibleSection = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-max flex justify-center mt-16">
      <div className="w-[90%] h-[95vh] border-4 flex max-[700px]:flex-col-reverse max-[700px]:h-max">
        <div className="w-[30%] h-full flex flex-col overflow-y-auto bg-[#efefef]  ">
          <div className="min-h-[70px] w-full border-b-2 border-[#d1cfcf] flex justify-center ">
            <div className="w-[90%] flex items-center justify-between cursor-pointer" onClick={()=>setShow(!show)}>
              <div className="uppercase text-xl">SEARCH KEY WORDS/PHRASE</div>
              <div className="text-3xl">
                <RxCaretDown />
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col items-center">
            {show && (
              <div className="w-[90%] h-max flex flex-col py-7 space-y-5">
                <div className="h-[40px] w-full flex  border-black border-2 px-2 ">
                  <div className="max-w-[40px] flex items-center ">
                    <TfiSearch />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-transparent h-full outline-none "
                  />
                </div>
                <div className="w-full h-[55px] flex justify-center items-center cursor-pointer text-white uppercase bg-[#333333]">
                  search
                </div>
              </div>
            )}
            <div className="w-full flex justify-center border-b-2 border-[#d1cfcf]">
            <div className="w-[90%] min-h-[70px] flex items-center justify-between ">
              <div className="uppercase text-xl text-[#3d3b3b] ">options</div>
              <div className="text-3xl text-[#3d3b3b] font-light">
                <SlOptionsVertical className="" />
              </div>
            </div>
            </div>
            <div className="">Hello</div>
            <div className="">Hello</div>
            <div className="">Hello</div>
          </div>
        </div>
        <div className="w-[70%] h-full flex flex-col ">
          <div className="min-h-[70px] w-full bg-purple-500 static z-10 flex justify-center  ">
            <div className="w-[90%] flex items-center justify-between ">
              <div className="">left</div>
              <div className="">middle</div>
              <div className="">right</div>
            </div>
          </div>
          <div className="h-full w-full bg-yellow-900 overflow-y-scroll ">
            <div className="h-[5000px] bg-red-500"></div>
          </div>
          <div className="h-[70px] w-full bg-purple-500 static z-10  "></div>
        </div>
      </div>
    </div>
  );
};

export default BibleSection;
