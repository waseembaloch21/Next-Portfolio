"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import HTML from "../../../public/html.png";
import Css from "../../../public/Css.png";
import Javascript from "../../../public/Javascript.png";
import ReactJs from "../../../public/React.png";
import NextJs from "../../../public/nextjs.png";
import ExpressJS from "../../../public/express.png";
import Mongodb from "../../../public/mongodb.png";
import Bootstrap from "../../../public/bootstrap.png";
import TailwindCss from "../../../public/tailwind.png";

const skills = [
  { title: "HTML5", image: HTML },
  { title: "CSS", image: Css },
  { title: "Javascript", image: Javascript },
    { title: "React JS", image: ReactJs },
    { title: "Next Js", image: NextJs },
    { title: "Mongo DB", image: Mongodb },
    { title: "Express JS", image: ExpressJS },
    { title: "Bootstrap", image: Bootstrap },
    { title: "Tailwind Css", image: TailwindCss },
  ];
  const SkillsSection = () => {
   const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm = 640px
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const visibleSkills = isMobile && !showAll ? skills.slice(0, 5) : skills;
  return (
    <div id="skills" className="bg-black text-gray-100 py-10 px-5 sm:px-20 md:px-32">
      <h2 className="text-3xl font-bold font-serif mb-8 text-center"data-aos="fade-up">My Skills</h2>
      <div className="card-box grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6  items-center justify-evenly ">
        {visibleSkills.map((skill, ind) => {
          return (
            <div
              key={ind}
               data-aos="fade-up"
              data-aos-delay={ind * 100}
              className=" bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl card">
              <Image src={skill.image} alt={skill.title} />
              <h1>{skill.title}</h1>
            </div>
          );
        })}
      </div>
       {isMobile && !showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="cv text-black font-semibold py-2 px-6 rounded-full transition-all duration-300"
            >
              See More
            </button>
          </div>
        )}
    </div>
  );
};

export default SkillsSection;
