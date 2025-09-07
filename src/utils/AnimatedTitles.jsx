import React, { useState, useEffect } from 'react';

const AnimatedTitles = () => {
  const roles = [
    'Web Developer',
    'Full Stack Developer',
    'FrontEnd Developer',
    'Backend Developer',
    'Software Developer',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(150);
        } else {
          setTypingSpeed(150);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        } else {
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <div className="text-center md:text-start">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        <span className="text-outline pb-1 stroke-text">{currentText}</span>
        <span className="inline-block h-7 md:h-14 w-1 bg-cyan-300 ml-1 animate-pulse"></span>
      </h1>
    </div>
  );
};

export default AnimatedTitles;
