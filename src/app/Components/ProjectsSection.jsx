"use client";

import { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import EventsApp from "../../../public/Events-app.jpg";
import Furniture from "../../../public/Furniture1.png";
import ChatApp from "../../../public/Chat-App.png";
import WeatherApp from "../../../public/Weather1.jpeg";
import TodoApp from "../../../public/Todo-app.jpeg";

const projects = [
  {
    title: "Events App",
    description: "A modern fullstack app to discover, create, and manage events effortlessly.",
    image: EventsApp,
    demo: "https://findfriend.vercel.app/",
    github: "https://github.com/waseembaloch21/EventsApp",
    technologies: ["Next.js", "ShadCn"],
  },
  {
    title: "Todo-App",
    description: "A productivity-focused app with task creation, editing, filtering, and management.",
    image: TodoApp,
    demo: "https://todo-app-5tad.vercel.app/",
    github: "https://github.com/waseembaloch21/Todo-App",
    technologies: ["React.js", "CSS"],
  },
  {
    title: "Weather-App",
    description: "A responsive app providing real-time weather updates worldwide.",
    image: WeatherApp,
    demo: "https://weather-app-two-phi-91.vercel.app/",
    github: "https://github.com/waseembaloch21/Weather-App",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    title: "Furniture Web",
    description: "A modern e-commerce site for browsing and purchasing furniture online.",
    image: Furniture,
    demo: "https://furniture-web-beta.vercel.app/",
    github: "https://github.com/waseembaloch21/Furniture-Web",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    title: "Chat-App",
    description: "A real-time chat application built using React and Tailwind CSS, designed for smooth communication and a modern user experience. The app allows users to send and receive messages instantly, with an intuitive and responsive UI optimized for both desktop and mobile devices.",
    image: ChatApp,
    demo: "https://github.com/waseembaloch21/Chat-App",
    github: "https://github.com/waseembaloch21/Chat-App",
    technologies: ["React.js", "TailwindCSS"],
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      id="projects"
      className="bg-black text-white py-16 px-5 sm:px-20 md:px-32 font-sans"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <h2 className="relative text-5xl md:text-6xl font-extrabold mb-16 py-3 text-center tracking-tight 
          bg-gradient-to-r from-teal-400 via-sky-500 to-blue-500 bg-clip-text text-transparent"
        data-aos="fade-down">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden rounded-t-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[300px]">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-serif text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-medium py-1 px-3 rounded-full"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-2 rounded-lg font-serif hover:bg-cyan-500 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-700 text-white py-2 rounded-lg font-serif hover:bg-gray-600 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
