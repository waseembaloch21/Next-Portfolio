'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-[#121212] text-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex justify-center lg:justify-start" data-aos="zoom-in">
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center 
                          bg-black
                          rounded-full border-4 border-gray-800 shadow-2xl overflow-hidden">
            <Image
              src="/WaseemB.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="text-center lg:text-left space-y-6" data-aos="fade-left">
          <h2 className="text-sm font-semibold tracking-widest uppercase 
                         bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Who Am I?
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold leading-snug">
            A Developer who <span className="text-indigo-400">builds ideas</span> into reality
          </h3>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I’m not just a coder – I’m a <span className="text-pink-400 font-semibold">problem solver</span>.
            From building smooth web apps to crafting engaging mobile experiences,
            my journey is about <span className="text-indigo-400 font-semibold">creating value</span> that inspires and connects.
          </p>

        </div>
      </div>
    </section>
  );
}
