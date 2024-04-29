import React, { useState } from "react";
import Register from "../SignUp/Register";
import Login from "../Login/LoginPage";
import images from "../../images";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useEffect } from "react";

const Heropage = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [count, setCount] = useState(0);
  // console.log(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [count]);

  const handleImages = () => {
    console.log("next");
    if (count <= images.length) {
      setCount((count + 1) % images.length);
    } else {
      setCount(count + 1);
    }
  };

  const handleImages2 = () => {
    console.log(images.length);
    if (count <= images.length) {
      setCount((count - 1 + images.length) % images.length);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      {show && <Register setShow={setShow} setShow1={setShow1} />}
      {show1 && <Login setShow={setShow} setShow1={setShow1} />}
      <div className="w-full h-[90vh] flex items-center justify-center max-[700px]:h-[50vh] relative">
        <div className="absolute h-full w-full bg-white ">
          <img
            src={images[count]}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-[98%] h-full flex-btw ">
          <div
            className="h-[50px] w-[50px] flex-center rounded-full bg-[#1c1b1b5a] cursor-pointer max-[700px]:hidden "
            onClick={handleImages2}
          >
            <GrFormPrevious className="text-3xl text-white " />
          </div>
          <div
            className="h-[50px] w-[50px] flex-center rounded-full bg-[#1c1b1b5a] cursor-pointer max-[700px]:hidden "
            onClick={handleImages}
          >
            <GrFormNext className="text-3xl text-white " />
          </div>
        </div>
        <div
          data-endspeed={1000}
          data-easing="easeOutCirc"
          data-start={1000}
          data-speed={700}
          data-y={244}
          data-x={152}
          className="w-[90%] absolute z-10 "
        >
          <div className="flex flex-col items-center space-y-4  w-[30%] max-[700px]:w-full">
            <p className=" font-[Pacifico] text-center text-5xl font-light max-[700px]:text-white max-[700px]:text-2xl">
              Daily Inspiration
            </p>
            <p className="text-center text-xl max-[700px]:text-white">
              O Israel, hope in the LORD; for with the LORD there is unfailing
              love. His redemption overflows.
            </p>
            <p className="text-center font-light max-[700px]:text-white italic">
              PSALMS 130:7
            </p>
            {/* <div className="flex space-x-1">
              <div className="w-[35px] h-[35px] rounded-full bg-black"></div>
              <div className="w-[35px] h-[35px] rounded-full bg-black"></div>
            </div> */}
            <div
              className="border border-black py-3 px-3 rounded font-semibold text-xl uppercase cursor-pointer max-[700px]:text-white max-[700px]:border-white max-[700px]:text-lg"
              onClick={() => setShow(true)}
            >
              Join Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heropage;
