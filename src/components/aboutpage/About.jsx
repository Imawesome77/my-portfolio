import React from 'react';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';

const About = () => (
  <section id="about" className="bg-gradient-to-r from-[#011d1d] to-[#022c2b] relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20">
    <AboutHeader />
    <div className="Bottom-box h-[75%] w-full bg-gradient-to-r from-[#011d1d] to-[#022c2b] flex items-center justify-center">
      <AboutContent />
    </div>
  </section>
);

export default About;
