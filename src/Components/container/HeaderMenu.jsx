import React from "react";

const HeaderMenu = () => {
  return (
    <div className="hidden max-[700px]:w-full max-[700px]:h-full max-[700px]:flex max-[700px]:justify-center max-[700px]:bg-[#ECC731]">
      <div className="w-[90%] py-5">
      <ul className="text-[#333333] uppercase font-medium space-y-3 text-[18px] ">
        <li>Explore Faith</li>
        <li>Read the Bible</li>
        <li>Find a Church</li>
        <li>Request a Prayer</li>
      </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
