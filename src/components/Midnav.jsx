import React from 'react';
import { HiChevronDown } from 'react-icons/hi';

const Midnav = () => {
  return (
    <div className="hidden lg:flex items-center gap-10 text-[#f3f1f1]">
      {/* Internships Dropdown */}
      <div className="relative group">
        <button className="flex items-center gap-2 font-semibold hover:text-[#41213f]">
          Internships
          <HiChevronDown className="text-xl" />
        </button>
        <div className="absolute hidden group-hover:block  bg-gray-200 inset-shadow-sm inset-shadow-indigo-500 rounded-lg p-3 w-48 mt-2 border border-gray-100">
          <ul className="text-[#41213f]">
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">Technical</li>
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">Marketing</li>
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">Bussiness</li>
          </ul>
        </div>
      </div>

 {/* Resources Dropdown */}
 <div className="relative group">
        <button className="flex items-center gap-2 font-semibold hover:text-[#41213f]">
          Resources
          <HiChevronDown className="text-xl" />
        </button>
        <div className="absolute hidden group-hover:block bg-gray-200 inset-shadow-sm inset-shadow-indigo-500  rounded-lg p-3 w-48 mt-2 border border-gray-100">
          <ul className="text-[#41213f]">
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">Blog</li>
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">FAQ</li>
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">Help Center</li>
          </ul>
        </div>
      </div>

      {/* About Us Dropdown */}
      <div className="relative group">
        <button className="flex items-center gap-2 font-semibold hover:text-[#41213f]">
          About Us
          <HiChevronDown className="text-xl" />
        </button>
        <div className="absolute hidden group-hover:block bg-gray-200 inset-shadow-sm inset-shadow-indigo-500  rounded-lg p-3 w-48 mt-2 border border-gray-100">
          <ul className="text-[#41213f]">
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">Our Team</li>
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">Our Mission</li>
            <li className="py-2 px-4 hover:bg-[#e0f2f1]">Careers</li>
          </ul>
        </div>
      </div>

     
    </div>
  );
}

export default Midnav;
