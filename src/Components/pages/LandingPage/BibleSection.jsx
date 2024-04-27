import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import {
  PiCaretDownThin,
  PiCaretLeftLight,
  PiCaretRightThin,
} from "react-icons/pi";
import { RxCaretDown } from "react-icons/rx";
import { SlOptionsVertical } from "react-icons/sl";
import { TfiSearch } from "react-icons/tfi";
const BibleSection = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  return (
    <div className="w-full h-max flex justify-center mt-16">
      <div className="w-[90%] h-[95vh] border-4 flex max-[700px]:flex-col-reverse max-[700px]:h-max">
        <div className="w-[30%] h-full flex flex-col overflow-y-auto bg-[#efefef] max-[700px]:w-full ">
          <div className="min-h-[70px] w-full border-b-2 border-[#d1cfcf] flex justify-center ">
            <div
              className="w-[90%] flex items-center justify-between cursor-pointer"
              onClick={() => setShow(!show)}
            >
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
            <div
              className="w-full flex justify-center border-b-2 border-[#d1cfcf] cursor-pointer"
              onClick={() => setShow1(!show1)}
            >
              <div className="w-[90%] min-h-[70px] flex items-center justify-between ">
                <div className="uppercase text-xl text-[#3d3b3b] ">options</div>
                <div className="text-3xl text-[#3d3b3b] font-light">
                  <SlOptionsVertical className="text-[18px] " />
                </div>
              </div>
            </div>
            {show1 && (
              <div className="w-full h-max flex justify-center py-8">
                <div className="w-[90%] flex flex-col items-center">
                  <div className="flex h-[60px] w-36 bg-black text-white justify-center items-center space-x-3">
                    <div className="w-[25px] h-[35px] ">
                      <img src="/icons/tag.png" alt="" />
                    </div>
                    <div className="uppercase">John 1</div>
                  </div>
                  <div className="uppercase mt-1">remove</div>
                  <div className="flex items-center mt-7 space-x-2">
                    <input type="checkbox" className="w-[35px] h-[35px] " />
                    <p className="uppercase text-red-500">red letter</p>{" "}
                  </div>
                  <div className="flex items-center uppercase text-xl space-x-8 mt-7  ">
                    <p className="bg-[#333333d2] w-16 h-16 flex justify-center items-center rounded-full text-white">
                      A
                    </p>{" "}
                    <p>A</p> <p>A</p>
                  </div>
                </div>
              </div>
            )}
            <div
              className="min-h-[70px] w-full flex justify-center "
              onClick={() => setShow2(!show2)}
            >
              <div className="w-[90%] flex items-center justify-between cursor-pointer">
                <div className="uppercase text-xl">WHERE TO FIND...</div>
                <div className="text-3xl">
                  <RxCaretDown />
                </div>
              </div>
            </div>
            {show2 && (
              <>
                <div
                  className="min-h-[50px] bg-[#dcdcdc] w-full flex justify-center "
                  onClick={() => setShow3(!show3)}
                >
                  <div className="w-[90%] flex items-center justify-between cursor-pointer">
                    <div className="uppercase text-l">CHRISTMAS STORY</div>
                    <div className="text-3xl">
                      <RxCaretDown />
                    </div>
                  </div>
                </div>
                {show3 && (
                  <div className="h-max w-full flex flex-col items-center bg-[#efefef] py-5 space-y-4">
                    <div className="w-[90%] flex justify-center cursor-pointer text-center text-[#626161] hover:text-[#000] ">
                      MATTHEW 1:18-2:18
                    </div>
                  </div>
                )}
              </>
            )}
            <div
              className="min-h-[70px] w-full border-2 border-[#d1cfcf] flex justify-center "
              onClick={() => setShow4(!show4)}
            >
              <div className="w-[90%] flex items-center justify-between cursor-pointer">
                <div className="uppercase text-xl">highlight</div>
                <div className="text-3xl">
                  <RxCaretDown />
                </div>
              </div>
            </div>
            {show4 && (
              <>
                <div
                  className="min-h-[50px] bg-[#dcdcdc] w-full flex justify-center "
                  onClick={() => setShow5(!show5)}
                >
                  <div className="w-[90%] flex items-center justify-between cursor-pointer">
                    <div className="uppercase text-l">john</div>
                    <div className="text-3xl">
                      <RxCaretDown />
                    </div>
                  </div>
                </div>
                {show5 && (
                  <>
                    <div className="h-max w-full flex flex-col items-center border-b-2 border-[#d1cfcf] bg-[#ecf900] py-5 space-y-4">
                      <div className="w-[90%] h-max flex justify-between cursor-pointer hover:text-[#000] space-x-2 ">
                        <p className="w-full text-left space-x-2">
                          {" "}
                          <span className="border-2 border-[#3333] px-2 mr-1">
                            1:9
                          </span>
                          Uzziah was the father of Jotham. Jotham was the father
                          of Ahaz. Ahaz was the father of Hezekiah.
                        </p>
                        <MdOutlineCancel className="text-xl" />
                      </div>
                    </div>
                    <div className="h-max w-full flex flex-col items-center border-b-2 border-[#d1cfcf] bg-[#ecf900] py-5 space-y-4">
                      <div className="w-[90%] h-max flex justify-between cursor-pointer hover:text-[#000] space-x-2 ">
                        <p className="w-full text-left space-x-2">
                          {" "}
                          <span className="border-2 border-[#3333] px-2 mr-1">
                            1:9
                          </span>
                          Uzziah was the father of Jotham. Jotham was the father
                          of Ahaz. Ahaz was the father of Hezekiah.
                        </p>
                        <MdOutlineCancel className="text-xl" />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            <div
              className="min-h-[70px] w-full flex justify-center "
              onClick={() => setShow6(!show6)}
            >
              <div className="w-[90%] flex items-center justify-between cursor-pointer">
                <div className="uppercase text-xl">notes</div>
                <div className="text-3xl">
                  <RxCaretDown />
                </div>
              </div>
            </div>
            {show6 && (
              <>
                <div
                  className="min-h-[50px] bg-[#dcdcdc] w-full flex justify-center "
                  onClick={() => setShow7(!show7)}
                >
                  <div className="w-[90%] flex items-center justify-between cursor-pointer">
                    <div className="uppercase text-l">john</div>
                    <div className="text-3xl">
                      <RxCaretDown />
                    </div>
                  </div>
                </div>
                {show7 && (
                  <div className="h-max w-full flex flex-col items-center border-b-2 border-[#d1cfcf] bg-[#efefef] py-5 space-y-4">
                    <div className="w-[90%] h-max flex justify-between cursor-pointer hover:text-[#000] space-x-2 ">
                      <p className="w-full text-left space-x-2">
                        {" "}
                        <span className="border-2 border-[#3333] px-2 mr-1">
                          1:9
                        </span>
                        Test Note
                      </p>
                      <MdOutlineCancel className="text-xl" />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="w-[70%] h-full flex flex-col max-[700px]:w-full ">
          <div className="min-h-[70px] w-full border-2 static z-10 flex justify-center  ">
            <div className="w-[90%] flex items-center justify-between ">
              <div className="flex items-center space-x-1">
                <PiCaretLeftLight /> <p>2</p>
              </div>
              <div className="flex items-center space-x-7">
                <div className="flex items-center uppercase space-x-1">
                  <p>Matthew</p>
                  <PiCaretDownThin />
                </div>
                <div className="flex items-center space-x-1">
                  <p>3</p>
                  <PiCaretDownThin />
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <p>4</p>
                <PiCaretRightThin />
              </div>
            </div>
          </div>
          <div className="h-full w-full overflow-y-scroll ">
            <div className="h-max w-full flex justify-center">
              <div className="w-[90%] h-max flex flex-col items-center space-y-2 py-5">
                <p className="uppercase font-semibold text-l">
                  the temptation of jesus
                </p>
                <p className="">
                  1Then Jesus was led by the Spirit into the wilderness to be
                  tempted there by the devil. 2For forty days and forty nights
                  he fasted and became very hungry. 3During that time the devil
                  came and said to him, "If you are the Son of God, tell these
                  stones to become loaves of bread." 4But Jesus told him, "No!
                  The Scriptures say, 'People do not live by bread alone, but by
                  every word that comes from the mouth of God.'" 5Then the devil
                  took him to the holy city, Jerusalem, to the highest point of
                  the Temple, 6and said, "If you are the Son of God, jump off!
                  For the Scriptures say, 'He will order his angels to protect
                  you. And they will hold you up with their hands so you won't
                  even hurt your foot on a stone.'" 7Jesus responded, "The
                  Scriptures also say, 'You must not test the LORD your God.'"
                  8Next the devil took him to the peak of a very high mountain
                  and showed him all the kingdoms of the world and their glory.
                  9"I will give it all to you," he said, "if you will kneel down
                  and worship me." 10"Get out of here, Satan," Jesus told him.
                  "For the Scriptures say, 'You must worship the LORD your God
                  and serve only him.'" 11Then the devil went away, and angels
                  came and took care of Jesus. The Ministry of Jesus Begins
                  12When Jesus heard that John had been arrested, he left Judea
                  and returned to Galilee. 13He went first to Nazareth, then
                  left there and moved to Capernaum, beside the Sea of Galilee,
                  in the region of Zebulun and Naphtali. 14This fulfilled what
                  God said through the prophet Isaiah: 15"In the land of Zebulun
                  and of Naphtali, beside the sea, beyond the Jordan River, in
                  Galilee where so many Gentiles live, 16the people who sat in
                  darkness have seen a great light. And for those who lived in
                  the land where death casts its shadow, a light has shined."
                  17From then on Jesus began to preach, "Repent of your sins and
                  turn to God, for the Kingdom of Heaven is near."
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-[70px] w-full border-2  static z-10 flex justify-center items-center ">
            <div className="w-[90%] flex justify-between items-center ">
              <div className="flex items-center space-x-1">
                <PiCaretLeftLight />
                <p className="uppercase">matthew</p>
              </div>
              <div className="flex items-center space-x-1">
                <p className="uppercase"> matthew</p>
                <PiCaretRightThin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleSection;
