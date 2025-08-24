"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Saif from "../../../public/Saif.jpeg";
import Adnan from "../../../public/Adnan.jpeg";
import Noman from "../../../public/NomanV2.png";

const testimonials = [
  {
    name: "Saif",
    role: "Web & App Developer",
    message:
      "I specialize in building interactive and user-friendly websites. My goal is to help businesses establish a strong online presence through modern and scalable web solutions.",
    img: Saif,
  },
  {
    name: "Adnan",
    role: "Web & App Developer",
    message:
      "Web and mobile development enthusiast, deeply involved in building impactful applications using React and modern web technologies. Continuously learning and leveling up my skills.",
    img: Adnan,
  },
  {
    name: "Noman Amman",
    role: "IT Service Analyst | Innovator | Problem Solver",
    message:
      "Bridging technology and strategy to create efficient, secure, and scalable IT solutions. I specialize in elevating digital infrastructures and service management.",
    img: Noman,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#121212] py-20">
      <div
        className="container mx-auto px-6 text-center text-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-4xl font-bold text-center mb-14">
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            What My Friends Say
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-gray-900/80 backdrop-blur-lg border border-gray-700 
                         p-8 rounded-2xl shadow-md hover:shadow-blue-500/30 
                         transition-all duration-300 hover:-translate-y-2"
            >
              <Image
                src={testimonial.img}
                alt={testimonial.name}
                width={96}
                height={96}
                className="rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-md"
              />
              <p className="text-gray-300 italic mb-4">
                "{testimonial.message}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
