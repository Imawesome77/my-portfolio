// components/SkillCategory.jsx
import React from "react";
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills }) => {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/10"
    >
      <h3 className="text-2xl font-semibold mb-4 text-teal-400">{title}</h3>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0px 10px 20px rgba(0, 225, 200, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg cursor-pointer"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-sm text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
