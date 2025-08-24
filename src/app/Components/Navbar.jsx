"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className='flex justify-between items-center px-5 py-3 shadow-md'>
            <a href="#home" className='flex items-center gap-3'>
<div className='relative rounded-full w-14 md:w-16 h-14 md:h-16 border-2 border-cyan-300 overflow-hidden'>
                            <Image
                              src="/Logo2.jpg"
                              alt="Waseem Baloch"
                              fill
                              priority
                              className="object-cover"
                            />
                          </div>
            
                <span className=' bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-serif text-lg md:text-xl font-semibold '>Waseem Baloch</span>
            </a>

            <nav>
                <ul className='hidden md:flex gap-6 font-serif text-base'>
                    <li>
                        <a href="#home" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-serif font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'>Home</a>
                    </li>
                    <li>
                        <a href="#projects" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-serif font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'>Projects</a>
                    </li>

                    <li>
                        <a href="#services" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-serif font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'>Services</a>
                    </li>
                    <li>
                        <a href="#skills" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-serif font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'>Skills</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:text-blue-600 hover:underline cursor-pointer text-xl font-serif font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'>Contact</a>
                    </li>
                </ul>
            </nav>

            <div className='md:hidden'>
                <button className='text-2xl focus:outline-none' onClick={toggleMenu} aria-label="Toggle Navigation Menu"> ☰ </button>
            </div>

            {isMenuOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50'>

                    <button
                        className='absolute top-5 right-5 text-3xl text-white focus:outline-none'
                        onClick={toggleMenu}
                        aria-label="Close Navigation Menu"
                    >
                        ✖
                    </button>

                    <ul className='flex flex-col gap-6 font-poppins text-xl  text-center'>
                        <li>
                            <a href="#home" className='hover:text-gray-400 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-serif cursor-pointer' onClick={toggleMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#projects" className='hover:text-gray-400 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-serif cursor-pointer' onClick={toggleMenu}>Projects</a>
                        </li>
                        <li>
                            <a href="#services" className='hover:text-gray-400 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-serif cursor-pointer' onClick={toggleMenu}>Services</a>
                        </li>
                        <li>
                            <a href="#skills" className='hover:text-gray-400 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-serif cursor-pointer' onClick={toggleMenu}>Skills</a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:text-gray-400 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-serif cursor-pointer' onClick={toggleMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;