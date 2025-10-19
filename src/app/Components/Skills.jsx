"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="text-blue-500 text-7xl" />,
    topics: {
      Learned: {
        "Core Concepts": ["JSX", "Components", "Props & State"],
        "Advanced Topics": ["Hooks", "Routing"],
      },
      Learning: { "Performance Optimization": ["Code Splitting", "Lazy Loading"] },
    },
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-7xl" />,
    topics: {
      Learned: { Backend: ["Express.js", "REST APIs", "Middleware"] },
      Learning: { Advanced: ["GraphQL", "Microservices"] },
    },
  },
  {
    name: "MongoDB",
    icon: <FaDatabase className="text-yellow-500 text-7xl" />,
    topics: {
      Learned: { Database: ["CRUD Operations", "Aggregation Pipeline"] },
      Learning: { Optimization: ["Indexing & Performance Optimization"] },
    },
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-7xl" />,
    topics: {
      Learned: { Basics: ["Elements", "Attributes", "Forms"] },
      Learning: { SEO: ["Semantic HTML", "Accessibility"] },
    },
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-7xl" />,
    topics: {
      Learned: { Styling: ["Selectors", "Flexbox", "Grid"] },
      Learning: { Animations: ["Transitions", "Keyframes"] },
    },
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-7xl" />,
    topics: {
      Learned: { Fundamentals: ["Variables", "Functions", "ES6+"] },
      Learning: { Advanced: ["Async/Await", "Web APIs"] },
    },
  },
];

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    if (selectedSkill) {
      // Fade-in effect for overlay
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
    }
  }, [selectedSkill]);

  return (
    <section id="skills" className="py-20 bg-[#0d0d0d] text-white text-center">
      <h2
        className="text-6xl font-extrabold mb-12 bg-gradient-to-r from-teal-400 via-sky-500 to-blue-500 bg-clip-text text-transparent"
        data-aos="fade-down"
      >
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col items-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-gray-700 transform transition-transform duration-500 hover:scale-110 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedSkill(skill)}
          >
            {skill.icon}
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl max-w-lg w-full text-left relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setSelectedSkill(null)}
            >
              <MdClose size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedSkill.name}</h3>
            {Object.entries(selectedSkill.topics).map(([category, topics]) => (
              <div key={category} className="mb-4">
                <h4 className="text-lg font-semibold text-cyan-400">{category}</h4>
                <motion.div
                  className="mt-2 pl-4 border-l-2 border-cyan-500 space-y-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 },
                    },
                  }}
                >
                  {Object.entries(topics).map(([subCategory, subTopics]) => (
                    <div key={subCategory}>
                      <p className="text-white font-semibold">{subCategory}</p>
                      {subTopics.map((topic, index) => (
                        <motion.div
                          key={index}
                          className="text-gray-300 text-sm pl-4 border-l-2 border-cyan-400"
                          variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                        >
                          {topic}
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}