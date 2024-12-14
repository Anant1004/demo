import React from 'react'
import { FaStarAndCrescent } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";

const navbar = ({ themeColor }) => {
    return (
        <div>
            <div style={{ backgroundColor: themeColor }} className='h-10 w-full flex items-center justify-between pr-2'>
                <div className='w-[10%] h-full pl-5 flex items-end realtive'><span className='absolute font-bold left-12 text-white'>Luma</span><FaStarAndCrescent size={25} color='white'/></div>
                <div className='flex  gap-6 w-[30%] h-full items-end text-white ml-14'>
                    <div className='flex gap-2 items-center'><FaRegCalendar size={15} color='white'/>calendar</div>
                    <div className='flex gap-2 items-center '><MdEmojiEvents size={15} color='white'/>Events</div>
                    <div className='flex gap-2 items-center'><RiCompassDiscoverLine size={15} color='white' />Discover</div>
                </div>
                <div>
                    <div className="timzone flex items-end h-full gap-4 text-white ">
                        <p>9:44 PM GMT+ 5:30</p>
                        <button>Create Event</button>
                        <CiSearch size={25} color='white'/>
                        <CiBellOn size={25} color='white' />
                        <div className='w-8 h-8 bg-white rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar
