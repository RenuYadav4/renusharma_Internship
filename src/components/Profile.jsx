import React, { useEffect, useState } from 'react';
import { MdWork, MdAssignment, MdUpdate, MdLogout } from 'react-icons/md';
import { FaCrown } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';

const Profile = ({ isOpen }) => {

  return (
    <div
      className={`fixed top-0 right-0 w-[150px] md:w-[300px] h-screen bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] shadow-2xl p-2 md:p-6 flex flex-col justify-between font-serif transform transition-all duration-300 z-50 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      {/* Top Section */}
      <div>
        {/* Name */}
        <div className="mt-15 md:mt-25 mb-8 border-b pb-4 z-10">
          <h2 className="text-md md:text-2xl font-bold text-gray-600">Web Intern</h2>
        </div>


        {/* Options */}
        <div className='space-y-2 md:space-y-5'>

          {/* Internships */}
          <div className='flex items-center justify-between p-2 md:p-3 bg-white shadow hover:shadow-md rounded-md transition-all duration-300 cursor-pointer'>
            <div className="flex items-center gap-1 md:gap-3 text-gray-700 font-medium">
              <MdWork className="text-sm md:text-xl text-purple-600" />
              <span className='text-sm md:text-lg'>Internships</span>
            </div>
            <span className='bg-red-500 text-white text-xs font-semibold p-1 py-0 md:px-2 md:py-0.5 rounded-full'>3</span>
          </div>

          {/* Applications */}
          <div className='flex items-center gap-1 md:gap-3 p-2 md:p-3 bg-white shadow hover:shadow-md rounded-md transition-all duration-300 cursor-pointer text-gray-700 font-medium'>
            <MdAssignment className="text-sm md:text-xl text-blue-600" />
            <span className='text-sm md:text-lg'>Applications</span>
          </div>

          {/* Responses */}
          <div className='flex items-center gap-1 md:gap-3 p-2 md:p-3 bg-white shadow hover:shadow-md rounded-md transition-all duration-300 cursor-pointer text-gray-700 font-medium'>
            <BiMessageDetail className="text-sm md:text-xl text-green-600" />
            <span className='text-sm md:text-lg'>Responses</span>
          </div>

          {/* Update Resume */}
          <div className='flex items-center gap-1 md:gap-3 p-2 md:p-3 bg-white shadow hover:shadow-md rounded-md transition-all duration-300 cursor-pointer text-gray-700 font-medium'>
            <MdUpdate className="text-sm md:text-xl text-yellow-600" />
            <span className='text-sm md:text-lg'>Update Resume</span>
          </div>

          {/* Premium */}
          <div className='flex items-center gap-1 md:gap-3 p-2 md:p-3 bg-yellow-100 text-yellow-800 font-semibold shadow hover:shadow-md rounded-md cursor-pointer transition-all duration-300'>
            <FaCrown className="text-xl" />
            <span className='text-sm md:text-lg'>Go Premium – Stand out!</span>
          </div>
        </div>
      </div>

      {/* Logout - moved up */}
      <div className='mb-[-90px]'>
        <div className='flex items-center gap-3 p-3 bg-white hover:bg-red-100 text-red-600 font-semibold shadow hover:shadow-md rounded-md cursor-pointer transition-all duration-300'>
          <MdLogout className="text-xl" />
          <span>Logout</span>
        </div>
      </div>
      {/* bottom */}
      <span className='text-gray-400 text-sm'>@renuSharmafoundation</span>
    </div>


  );
};

export default Profile;
