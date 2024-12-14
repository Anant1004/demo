import React, { useState } from 'react';
import image from './assets/image.jpg'
import { FaRandom } from 'react-icons/fa';
import { GoChevronDown } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { TbFileDescription } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { LuTicketSlash } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineFileUpload } from "react-icons/md";
import PopUp from './components/PopUp';
import Navbar from './components/Navbar';
import { MdModeEdit } from "react-icons/md";

const App = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [themeColor, setThemeColor] = useState('#6a0dad');
  const handleThemeClick = () => {
    setPopUpVisible(!isPopUpVisible);
  };
  const getRandomColor = () => {
    const colors = [
      '#FF5733', '#33FF57', '#3357FF', '#FFD700', '#8A2BE2', '#FF1493', '#00FFFF', '#8B0000', '#32CD32', '#FF6347'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const handleShuffleClick = () => {
    setThemeColor(getRandomColor());
  };
  return (
    <div style={{ backgroundColor: themeColor }}>
      <Navbar themeColor={themeColor}/>
      <div className='w-full h-lvh flex text-white relative'>
      {isPopUpVisible && <PopUp />}
        <div className='imagediv w-[40%] flex flex-col items-end pr-10 pt-10'>
          <div className='flex w-[60%] h-full  rounded-lg flex-col'>
            <div className='w-full h-[50%] glassmorphism  rounded-xl mb-7 overflow-hidden'>
              <img className=" object-cover w-full h-full" src={image} alt="image" />
            </div>
            <div className='flex  h-14 justify-between'>
              <div className='w-[77%] themeDiv glassmorphism  rounded-md flex items-center justify-start pl-2 gap-2 cursor-pointer'onClick={handleThemeClick}>
                <div className='w-12 h-10 rounded-md bg-white '></div>
                <div className='w-14 h-10 font-bold leading-tight '>
                  <p className='text-sm text-gray-400'>Theme</p>
                  <p>Minimal</p>
                </div>
              </div>
              <div className='w-[20%] glassmorphism  rounded-md flex items-center justify-center cursor-pointer' onClick={handleShuffleClick}>
                <FaRandom size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className='w-[60%] pl-2 pr-44 pt-10 flex '>
          <div className='w-full flex flex-col'>
            <div className='flex w-full justify-between h-[5%]'>
              <div className='glassmorphism  w-[35%] text-center rounded-md flex items-center justify-between p-1 pl-2 cursor-pointer'>
                <div className='rounded-full h-5 w-5 bg-white cursor-pointer'></div>
                Personal calender
                <GoChevronDown size={20} color="white" />
              </div>
              <div className='glassmorphism  w-[17%] text-center rounded-md flex items-center justify-center gap-1 cursor-pointer'>
                <TbWorld size={20} color="white" />
                Public
                <GoChevronDown size={20} color="white" />
              </div>
            </div>
            <div className='w-full h-[15%]'>
              <textarea className='w-full h-full text-[5rem] outline-none pl-1 overflow-hidden bg-inherit text-black -translate-y-4' placeholder='Event Name'></textarea>
            </div>
            <div className='w-full h-[40%] flex flex-col gap-2'>
              <div className='w-full h-[30%] rounded-xl flex items-center justify-between cursor-pointer'>
                <div className='h-full glassmorphism  w-[70%] rounded-xl flex justify-end'>
                  <div className='w-7 h-full flex flex-col items-center justify-between p-3 '>
                    <div className='w-4 h-5 bg-white rounded-full '></div>
                    <div className='h-6 border-dashed outline-dashed outline-1'></div>
                    <div className='w-4 h-5 border border-white rounded-full '></div>
                  </div>
                  <div className='w-20 h-full flex flex-col justify-between p-2 font-semibold'>
                    <p>Start</p>
                    <p>End</p>
                  </div>
                  <div className='w-[70%] h-full pl-24 py-1'>
                    <div className='w-full h-1/2 flex items-center justify-center cursor-pointer'>
                      <span className='p-1  border-r-[1px] border-white border-b-[1px]'>Sat, Dec 14</span>
                      <span className='p-1 border-b-[1px] border-white'>07:00 PM</span>
                    </div>
                    <div className='w-full h-1/2 flex items-center justify-center'>
                      <span className='p-1 border-r-[1px] border-white '>Sat, Dec 14</span>
                      <span className='p-1 '>07:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className='h-full glassmorphism  w-[28%] rounded-xl flex flex-col justify-center p-1 pl-5 font-semibold'>
                  <div className=' w-[60%] h-[30%]'><TbWorld size={20} color="white" /></div>
                  <div className=' w-[60%] h-[30%]'>GMT+5:30</div>
                  <div className=' w-[60%] h-[30%]'>kolkata</div>
                </div>
              </div>
              <div className='w-full h-[25%] glassmorphism  rounded-xl flex flex-col items-start pl-2 font-semibold cursor-pointer'>
                <div className='w-full h-1/2 flex items-center text-lg '>
                  <CiLocationOn size={20} />
                  Add event location
                </div>
                <div className='w-full h-1/2 pl-5 text-sm'>Offline location or Virtual Link</div>
              </div>
              <div className='w-full h-[15%] glassmorphism  rounded-xl flex items-center jusitfy-center pl-2 gap-2 cursor-pointer'>
                <TbFileDescription size={25} color='white' />
                <p className='font-semibold '>Add Description</p>
              </div>
            </div>
            <label className=' font-bold pl-2 -translate-y-10' htmlFor="">Event options</label>
            <div className='w-full h-[20%] glassmorphism  rounded-xl -translate-y-9'>
              <div className='h-10 w-full flex items-center gap-3  pl-3 cursor-pointer'>
                <div className='flex w-full justify-between'>
                  <div className='w-1/2 flex items-center gap-3'>
                  <LuTicketSlash size={20} />
                  <p className='font-semibold text-lg'>Tickets</p>
                  </div>
                  <div className='font-semibold flex items-center gap-2'>
                    Free
                    <MdModeEdit />
                  </div>
                </div>
                <div></div>

              </div>
              <div className='h-10 w-full font-semibold pl-2 flex items-center justify-between text-lg gap-4 pr-2 cursor-pointer '>
                <div className='flex w-[50%] items-center gap-4'>
                  <RxAvatar size={20} />
                  Require Approval
                </div>

                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                </label>

              </div>
              <div className='h-10 w-full flex items-center justify-between pl-2 cursor-pointer'>
                <div className='flex w-[50%] items-center gap-4 font-semibold text-lg'>
                  <MdOutlineFileUpload size={20} />
                  Capacity
                </div>
                <div className='pr-3 font-bold text-lg flex items-center gap-2'>
                  unlimited
                  <MdModeEdit />
                </div>
              </div>
            </div>
            <button className='font-bold h-[8%] w-full bg-white text-black my-5 rounded-xl text-xl -translate-y-9'>Create Event</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
