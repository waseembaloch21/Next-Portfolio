"use client";

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';

import Typed from 'typed.js';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const typedElementRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const typed = new Typed(typedElementRef.current, {
            strings: ["FrontEnd Developer", "Web Developer", "Responsive Designer",],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-between items-center font-poppins gap-5 md:gap-20 px-5'>

            <div className='text-center md:text-left' data-aos="zoom-out">
                <h1 className='text-3xl md:text-5xl font-serif font-bold mb-2 md:mb-4'>👋 Hi, I'm</h1>
                <span className='sm:text-5xl text-cyan-300 font-bold font-serif md:text-5xl'>Waseem Baloch</span><br />

                <h1 className='font-serif text-3xl'>Passionate About</h1><span ref={typedElementRef} className='sm:text-4xl text-cyan-300 font-serif md:text-4xl font-semibold'></span>
                <p className='text-gray-400 font-serif leading-7 mb-6'>I design a beautiful, responsive, and user-friendly web interfaces with modern frontend technologies.</p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="cv"
                >
                    About Me
                </button>
                <a href="Waseem Baloch resume.pdf" download>
                    <button
                        className="cv"
                    >
                        Download CV
                    </button>
                </a>
            </div>

             <div className="relative w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] aspect-square rounded-full border-4  border-cyan-400 overflow-hidden animate-float transition-transform duration-500"    data-aos="fade-up">
            <Image
              src="/Logo.jpeg"
              alt="Waseem Baloch"
              fill
              priority
              className="object-cover"
            />
          </div>
            <div className="flex flex-row md:flex-col items-center gap-5 text-gray-400">
                <a href="https://www.linkedin.com/in/waseem-rauf-6076172b5/">
                    <TiSocialLinkedin />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 cursor-pointer transition transform hover:scale-110">
                    <FaTwitter />
                </a>

                <a href="https://github.com/waseembaloch21" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300 cursor-pointer transition transform hover:scale-110">
                    <ImGithub />
                </a>
            </div>

          {/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-8 w-11/12 md:w-3/4 lg:w-2/3 relative">
      
      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl"
      >
        &times;
      </button>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left - Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Logo.jpeg"
            width={220}
            height={220}
            alt="Waseem Baloch"
            className="rounded-full border-4 border-cyan-400 shadow-lg"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold font-serif text-cyan-300">About Me</h2>
          <p className="text-gray-300 font-serif">
            I’m a passionate <span className="text-cyan-300">Front-End Developer</span> 
            who loves building responsive, user-friendly, and visually stunning web experiences.  
            Always eager to learn and grow with modern web technologies.
          </p>

          {/* Skills Grid */}
          <h3 className="text-xl font-semibold mt-6">Core Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <FaReact className="text-blue-400 text-2xl" /> React.js
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <SiTailwindcss className="text-cyan-400 text-2xl" /> Tailwind CSS
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <SiJavascript className="text-yellow-400 text-2xl" /> JavaScript
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <SiHtml5 className="text-orange-500 text-2xl" /> HTML5
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <SiCss3 className="text-blue-500 text-2xl" /> CSS3
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <FaFigma className="text-purple-500 text-2xl" /> Figma
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <SiBootstrap className="text-indigo-500 text-2xl" /> Bootstrap
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
              <FaGit className="text-red-500 text-2xl" /> Git & GitHub
            </div>
          </div>

          {/* Education */}
          <p className="mt-6 text-gray-300">
            🎓 <strong>Education:</strong> BS in Information Technology, Self-Learning Web Development.
          </p>
        </div>
      </div>
    </div>
  </div>
)}
        </div>
    );
}
export default Hero;