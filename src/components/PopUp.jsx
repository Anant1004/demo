import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { IoMdContrast } from "react-icons/io";
import minimal from "../assets/minimal.png";
import quantam from "../assets/quantam.png";
import wrap from "../assets/wrap.png";
import emoji from "../assets/emoji.png";
import Confitti from "../assets/conf.png";
import patten from "../assets/patten.png";
import newtheme from "../assets/new.png";

const popUp = () => {
  return (
    <div className="themeLayout absolute bottom-0 left-0 flex flex-col gap-1 bg-[#640D5F]/70 backdrop-blur-md p-2 rounded-t-[100px] shadow-lg h-[30%] w-full  text-white z-50 -translate-y-10">
      <div className="section1 h-[68%] w-full flex justify-center items-center gap-2 font-semi-bold ">
        <div className="theme1 h-full w-[8%] p-4 flex flex-col items-center gap-1">
          <img
            src={minimal}
            className="img h-[60%] w-full bg-purple-300 active:border active:border-white rounded-md "
            alt=""
          />
          <h2>Minimal</h2>
        </div>
        <div className="theme1 h-full w-[8%] p-4 flex flex-col items-center gap-1">
          <img
            src={quantam}
            className="img h-[60%] w-full bg-purple-300 active:border active:border-white rounded-md "
            alt=""
          />
          <h2>Quantum</h2>
        </div>
        <div className="theme1 h-full w-[8%] p-4 flex flex-col items-center gap-1">
          <img
            src={wrap}
            className="img h-[60%] w-full bg-purple-300 active:border active:border-white rounded-md "
            alt=""
          />
          <h2>wrap</h2>
        </div>
        <div className="theme1 h-full w-[8%] p-4 flex flex-col items-center gap-1">
          <img
            src={emoji}
            className="img h-[60%] w-full bg-purple-300 active:border active:border-white rounded-md "
            alt=""
          />
          <h2>Emoji</h2>
        </div>
        <div className="theme1 h-full w-[8%] p-4 flex flex-col items-center gap-1">
          <img
            src={Confitti}
            className="img h-[60%] w-full bg-purple-300 active:border active:border-white rounded-md "
            alt=""
          />
          <h2>Confitti</h2>
        </div>
        <div className="theme1 h-full w-[8%] p-4 flex flex-col items-center gap-1">
          <img
            src={patten}
            className="img h-[60%] w-full bg-purple-300 active:border active:border-white rounded-md "
            alt=""
          />
          <h2>Patten</h2>
        </div>
        <div className="theme1 h-full w-[8%] p-4 flex flex-col items-center gap-1">
          <img
            src={newtheme}
            className="img h-[60%] w-full bg-purple-300 active:border active:border-white rounded-md "
            alt=""
          />
          <h2>seasonal</h2>
        </div>
      </div>
      <div className="section2 h-[30%] flex justify-center items-center gap-2 w-full  ">
        <div className="firstDiv w-[20%] h-[70%] rounded-lg  flex justify-between items-center px-3 bg-gray-600/40 backdrop-blur-md shadow-lg">
          <div className="min1 h-full w-[30%] flex justify-center items-center gap-2 font-medium ">
            <div className="circle w-6 h-6 bg-purple-700 rounded-full "></div>
            <h1>Color</h1>
          </div>
          <div className="min1 h-full w-[70%] flex items-center justify-end gap-2">
              <h2>Custom</h2>
              <div className="arrow h-[80%]">
              <BiChevronUp />
              <BiChevronDown />
              </div>
          </div>

        </div>
        <div className="firstDiv w-[20%] h-[70%] rounded-lg  flex justify-between items-center px-3 bg-gray-600/40 backdrop-blur-md shadow-lg">
          <div className="min1 h-full w-[30%] flex justify-center items-center gap-2 font-medium ">
            <div className="circle w-6 h-6 bg-gray-600 rounded-full "></div>
            <h1>Style</h1>
          </div>
          <div className="min1 h-full w-[70%] flex items-center justify-end gap-2">
              <h2>--</h2>
              <div className="arrow h-[80%]">
              <BiChevronUp />
              <BiChevronDown />
              </div>
          </div>

        </div>
        <div className="firstDiv w-[20%] h-[70%] rounded-lg  flex justify-between items-center px-3  bg-gray-600/40 backdrop-blur-md shadow-lg">
          <div className="min1 h-full w-[30%] flex justify-center items-center gap-2 font-medium ">
            <div className="circle w-6 h-6 rounded-full ">Ag</div>
            <h1>Font</h1>
          </div>
          <div className="min1 h-full w-[70%] flex items-center justify-end gap-2">
              <h2>Snpro</h2>
              <div className="arrow h-[80%]">
              <BiChevronUp />
              <BiChevronDown />
              </div>
          </div>

        </div>
        <div className="firstDiv w-[20%] h-[70%] rounded-lg  flex justify-between items-center px-3 bg-gray-600/40 backdrop-blur-md shadow-lg ">
          <div className="min1 h-full w-[30%] flex justify-center items-center gap-2 font-medium ">
            <div className="circle w-6 h-6 rounded-full ">
            <IoMdContrast size={25} />
            </div>
            <h1>Display</h1>
          </div>
          <div className="min1 h-full w-[70%] flex items-center justify-end gap-2">
              <h2>Auto</h2>
              <div className="arrow h-[80%]">
              <BiChevronUp />
              <BiChevronDown />
              </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default popUp;
