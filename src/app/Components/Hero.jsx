"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';

export default function Hero() {
  const roles = [
    "Web Developer 🌐",
    "Problem Solver 🧠",
    "Creative Thinker ✨",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-black h-screen flex items-center justify-center">

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-black rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-black rounded-full blur-3xl animate-pulse"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        <div className="w-2 h-2 bg-black rounded-full absolute top-1/4 left-1/3 animate-bounce"></div>
        <div className="w-2 h-2 bg-black rounded-full absolute bottom-1/4 right-1/3 animate-ping"></div>
        <div className="w-2 h-2 bg-black rounded-full absolute top-1/2 right-1/4 animate-bounce"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl" data-aos="fade-up">
        <h1
          className="mt-6 text-5xl text-white sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          data-aos="fade-down"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Waseem Baloch
          </span>
        </h1>

        {/* Rotating Roles */}
        <p
          className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-300 h-10 transition-all duration-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {roles[currentRole]}
        </p>

        {/* Sub Text */}
        <p
          className="mt-4 text-lg text-gray-400 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I build sleek, modern, and scalable digital experiences that inspire, connect, and leave a lasting impact.
        </p>

        {/* Call-to-action Buttons */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <a
            href="Waseem Baloch resume.pdf"
            download
            className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-7 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-sky-500/50 hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-gray-400 px-7 py-3 text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            🤝 Let’s Connect
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 flex justify-center w-full animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-sky-400 transition">
          ↓ Scroll Down
        </a>
      </div>

    </div>
  );
}
