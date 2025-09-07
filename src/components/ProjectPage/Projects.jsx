// src/components/Projects.jsx
import React from "react";
import projects from "./projectsData"; // ✅ fixed path
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-r from-[#011d1d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-2 text-white"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          My <span className="text-teal-400 stroke-text">Projects</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-10"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Some of the projects I've built using modern technologies.
        </motion.p>

        <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-1 hidden md:block bg-teal-800 transform -translate-x-1/2" />

          <div className="space-y-16">
            {projects.map((proj, index) => {
              const isLeft = proj.position === "left";
              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center w-full ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } justify-center`}
                  variants={fadeIn(isLeft ? "left" : "right", index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 md:left-1/2 hidden md:flex h-10 w-10 rounded-full bg-teal-600 shadow-lg items-center justify-center transform -translate-x-1/2">
                    <span className="text-2xl text-white">📌</span>
                  </div>

                  {/* Project Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full md:w-[45%] p-6 rounded-xl shadow-lg border border-teal-900 bg-teal-950/50 cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold text-gray-100 mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{proj.period}</p>

                    {/* ✅ Added description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                      {proj.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="px-3 py-1 rounded-md text-sm font-medium bg-teal-700/30 text-teal-200 shadow-md shadow-teal-400/30 hover:shadow-teal-500/60 hover:bg-teal-600/40 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
