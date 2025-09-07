import React from 'react';
import PersonalInfo from './PersonalInfo';
import EducationCard from './EducationCard';

const AboutContent = () => (
  <div className="box bg-[#02302c] px-10 py-10 border border-gray-700 h-[75%] w-[80%] rounded-md flex">
    <div className="box-left h-full w-1/2 pr-6">
      <div className="left-box-upper">
        <h4 className="text-white font-bold text-xl">Who am I?</h4>
        <p className="text-white/40 text-sm mt-3">
          I'm a passionate Full Stack Developer with a strong foundation in JavaScript, React, and Node.js. <br /> <br /> I specialize in building responsive web applications using modern technologies like Tailwind CSS, MongoDB, and Redux Toolkit. I enjoy solving real-world problems, writing clean code, and constantly learning new tools and frameworks to grow as a developer.
        </p>
      </div>
      <PersonalInfo />
    </div>
    <div className="box-right h-full flex w-1/2 flex-col items-start px-5">
      <h2 className="h-[20%] w-full text-xl text-white font-semibold mb-5">My Education</h2>
      <div className="flex flex-col h-[80%] gap-5 w-full">
        <EducationCard course="Diploma" branch="Computer Science" year="2018 - 2021" />
        <EducationCard course="Bachelor of Technology (B.Tech)" branch="Computer Science" year="2021 - 2025" />
      </div>
    </div>
  </div>
);

export default AboutContent;
