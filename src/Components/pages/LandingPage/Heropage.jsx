import React from 'react'

const Heropage = () => {
  return (
    <div className="w-full h-[80vh] bg-hero bg-center flex items-center justify-center max-[700px]:h-[50vh]">
    <div className="w-[90%] ">
      <div className="flex flex-col items-center space-y-4  w-[30%] max-[700px]:w-full">
        <p className="text-center text-3xl font-bold max-[700px]:text-white">
          Daily Inspiration
        </p>
        <p className="text-center text-xl max-[700px]:text-white">
          O Israel, hope in the LORD; for with the LORD there is unfailing
          love. His redemption overflows.
        </p>
        <p className="text-center font-light max-[700px]:text-white">
          PSALMS 130:7
        </p>
        <div className="flex space-x-1">
          <div className="w-[35px] h-[35px] rounded-full bg-black"></div>
          <div className="w-[35px] h-[35px] rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Heropage
