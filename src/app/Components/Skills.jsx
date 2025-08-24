"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HTML from "../../../public/html.png";
import Css from "../../../public/Css.png";
import Javascript from "../../../public/Javascript.png";
import ReactJs from "../../../public/React.png";
import NextJs from "../../../public/nextjs.png";
import ExpressJS from "../../../public/express.png";
import Mongodb from "../../../public/mongodb.png";
import TailwindCss from "../../../public/tailwind.png";

const skills = [
  { title: "HTML5", image: HTML },
  { title: "CSS", image: Css },
  { title: "Javascript", image: Javascript },
  { title: "React JS", image: ReactJs },
  { title: "Next Js", image: NextJs },
  { title: "Mongo DB", image: Mongodb },
  { title: "Express JS", image: ExpressJS },
  { title: "Tailwind Css", image: TailwindCss },
];

const SkillsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const visibleSkills = isMobile && !showAll ? skills.slice(0, 5) : skills;

  return (
    <section
      id="skills"
      className="bg-black text-gray-100 py-16 px-6 sm:px-12 lg:px-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          My Skills
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
        {visibleSkills.map((skill, ind) => (
          <div
            key={ind}
            data-aos="fade-up"
            data-aos-delay={ind * 100}
            className="bg-gray-900 p-6 rounded-xl flex flex-col items-center 
                       shadow-md hover:shadow-blue-500/30 
                       transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-3">
              <Image src={skill.image} alt={skill.title} width={60} height={60} />
            </div>
            <h3 className="text-lg font-medium text-gray-300">{skill.title}</h3>
          </div>
        ))}
      </div>

      {isMobile && !showAll && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white 
                       font-semibold py-2 px-6 rounded-full hover:scale-105 
                       hover:shadow-lg transition-all duration-300"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
