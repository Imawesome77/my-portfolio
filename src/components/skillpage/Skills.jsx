// components/Skills.jsx
import React from "react";
import SkillCategory from "./SkillCategory";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiRedux,
  SiSpring,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { DiVisualstudio } from "react-icons/di";

// Define the data here or import from another file
const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "SASS", icon: <FaSass className="text-pink-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-teal-400" /> },
      { name: "GSAP", icon: <MdOutlineSettingsApplications className="text-green-500" /> },
      { name: "Material UI", icon: <GiMaterialsScience className="text-blue-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-r from-[#011d1d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl text-gray-300 font-bold text-center mb-2">
          My <span className="text-outline stroke-text">Skills</span>
        </h2>

        <p className="text-slate-300 text-center mx-auto mb-12 text-sm">
          The tools and technologies I use to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {skillsData.map((item) => (
            <SkillCategory
              key={item.title}
              title={item.title}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
