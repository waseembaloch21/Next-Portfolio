"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-14 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          
          {/* Branding */}
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-3 font-serif bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Waseem Baloch
            </h2>
            <p className="text-gray-400 font-serif leading-relaxed">
              I am a passionate Front-End Developer specialized in creating
              responsive and user-friendly web interfaces.
            </p>
          </div>

          {/* Quick Links & Resources */}
          <div className="flex md:w-1/3 justify-center gap-16">
            <div>
              <h3 className="text-lg font-semibold font-serif mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white hover:underline underline-offset-4 transition-all duration-200 font-serif"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold font-serif mb-4">Resources</h3>
              <ul className="text-gray-400 space-y-2">
                {["Privacy Policy", "Terms & Conditions", "Blog", "FAQs"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white hover:underline underline-offset-4 transition-all duration-200 font-serif cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold font-serif mb-4">
              Subscribe to my updates
            </h3>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white p-3 font-serif rounded-full outline-none w-full focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full py-2 px-5 hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t border-gray-800 pt-6">
          <p className="text-gray-500 font-serif text-sm">
            &copy; {new Date().getFullYear()} Waseem Baloch. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/waseembaloch21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/waseem-rauf-6076172b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
