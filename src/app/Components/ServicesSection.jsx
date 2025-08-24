"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaMobileAlt, FaChartBar } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and user-friendly web applications using modern frontend technologies like React.js and Tailwind CSS.",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
  },
  {
    title: "Responsive Design",
    description:
      "Ensuring your website looks great on all devices with fully responsive and mobile-first design principles.",
    icon: <FaMobileAlt className="text-green-400 text-3xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed and performance to provide a seamless user experience.",
    icon: <FaChartBar className="text-yellow-400 text-3xl" />,
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="services"
      className="bg-black text-gray-100 py-16 px-6 sm:px-12 lg:px-24"
    >
      <h2 className="text-4xl font-bold text-center mb-14">
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          My Services
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="relative bg-gray-900 rounded-2xl p-8 text-center shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gray-800">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
