import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { HiChevronDown, HiMenuAlt3, HiX } from "react-icons/hi";
import Midnav from './Midnav';

const Navbar = ({ onProfileClick }) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-full md:px-6 bg-[#ad819f] rounded-b-xl relative z-50 shadow-[0_8px_20px_rgba(8,_112,_184,_0.5)]">
            <div className="flex items-center justify-between h-14 md:h-17">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="src/assets/renusharma-logo.jpg" alt="renusharma_logo" className='h-30 md:h-40' />
                    <span className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-200  to-blue-600 bg-clip-text text-transparent">
                        InternLaunch
                    </span>
                </div>

                <Midnav />

                {/* Desktop Navigation */}
                <div className="hidden text-[#f3f1f1] lg:flex items-center gap-6 lg:gap-10 font-semibold text-base font-serif">
                    <Link to="/" className="relative group hover:text-[#41213f] transition duration-300">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#41213f] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link to="/signup" className="relative group hover:text-[#41213f] transition duration-300">
                        Create Account
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#41213f] group-hover:w-full transition-all duration-300"></span>
                    </Link>

                    <Link to="/login" className="relative group hover:text-[#41213f] transition duration-300">
                        Login
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#41213f] group-hover:w-full transition-all duration-300"></span>
                    </Link>

                    <CgProfile
                        // onClick={() => navigate('/profile')}
                        onClick={onProfileClick}
                        className="text-3xl hover:scale-110 hover:text-[#41213f] transition-transform duration-300 cursor-pointer"
                    />
                </div>

                {/* Menu Icon */}
                <div className="lg:hidden text-3xl text-[#fff] cursor-pointer mr-2" onClick={toggleMenu}>
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="lg:hidden h-[92vh] absolute top-full left-0 w-full py-4 px-6 z-40  bg-[#d1bcca] opacity-80  shadow-lg border border-gray-200 flex flex-col space-y-4">
                    <div
                        onClick={() => {
                            // navigate('/profile');
                            toggleMenu();
                            onProfileClick();
                        }}
                        className="w-full text-2xl py-2 px-3 rounded-md flex items-center gap-2 text-[#41213f] font-bold hover:bg-[#f7f7f7] hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                    >
                        <CgProfile
                            className="text-2xl text-[#41213f]" />
                        <span>Profile</span>
                    </div>


                    {/* other options */}
                    <div>
                        {/* Internships Dropdown */}
                        <div className="relative group">
                            <button className="w-full py-2 px-3 rounded-md flex items-center gap-2 text-[#41213f] text-xl font-medium hover:bg-[#f7f7f7] hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                            >
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
                            <button className="w-full py-2 px-3 rounded-md flex items-center gap-2 text-[#41213f] text-xl font-medium hover:bg-[#f7f7f7] hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                            >
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
                            <button className="w-full py-2 px-3 rounded-md flex items-center gap-2 text-[#41213f] text-xl font-medium hover:bg-[#f7f7f7] hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                            >
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
                    <Link
                        to="/"
                        onClick={toggleMenu}
                        className="w-full py-2 px-3 rounded-md text-[#41213f] text-xl font-medium hover:bg-[#f7f7f7] hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Home
                    </Link>
                    <Link
                        to="/signup"
                        onClick={toggleMenu}
                        className="w-full py-2 px-3 rounded-md text-[#41213f] text-xl font-medium hover:bg-[#f7f7f7] hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Create Account
                    </Link>

                    <Link
                        to="/login"
                        onClick={toggleMenu}
                        className="w-full py-2 px-3 rounded-md text-[#41213f] text-xl font-medium hover:bg-[#f7f7f7] hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
