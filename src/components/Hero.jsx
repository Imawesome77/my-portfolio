import React from "react";
import AnimatedTitles from "../utils/AnimatedTitles";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 pb-20 bg-gradient-to-r from-[#011d1d] to-[#022c2b]"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011d1d] to-[#022c2b]"></div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011d1d] to-[#022c2b]"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-light capitalize tracking-wide text-indigo-400">
              I'm Vishal Parmar
            </h3>

            <AnimatedTitles />

            <p className="mt-4 text-gray-300 max-w-xl">
              I’m Vishal Parmar — a digital craftsman weaving together code and
              creativity to build web experiences that resonate. With every line
              of JavaScript and every database query, I tell a story of
              innovation, passion, and precision. From vibrant front-end designs
              that spark joy to powerful back-end engines that drive seamless
              functionality, I’m on a mission to transform ideas into living,
              breathing digital realities. Constantly curious and endlessly
              inspired, I thrive in bringing dreams to life, one pixel and one
              function at a time.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                Mern Stack Development
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                Frontend Development
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                BackEnd Development
              </span>
            </div>

            {/* Social Icons with hover effects */}
            <div className="flex gap-5 mt-8 justify-center md:justify-start">
              <button className="p-3 bg-white/10 rounded-full hover:bg-sky-400 hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-sky-400">
                <FaFacebook />
              </button>
              <button className="p-3 bg-white/10 rounded-full hover:bg-sky-400 hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-sky-400">
                <BsWhatsapp />
              </button>
              <button className="p-3 bg-white/10 rounded-full hover:bg-sky-400 hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-sky-400">
                <LiaLinkedin />
              </button>
              <button className="p-3 bg-white/10 rounded-full hover:bg-sky-400 hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-sky-400">
                <BsTwitter />
              </button>
            </div>

            {/* Action Buttons with hover & scale */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 cursor-pointer py-1 rounded-full bg-gradient-to-r from-indigo-500 to-sky-700 font-light text-white hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-indigo-700">
                View My Works
              </button>
              <button className="px-6 cursor-pointer py-1 rounded-full bg-gradient-to-r from-indigo-500 to-sky-700 font-light text-white hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-indigo-700">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
