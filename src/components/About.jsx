import React from 'react';
import { motion } from 'framer-motion';

function About({ mode }) {
  const isDarkMode = mode === 'dark';
  
  return (
    <div className="flex justify-center items-center min-h-screen " >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl px-6 py-12 rounded-lg shadow-2xl"
        style={{
          border: isDarkMode ? "1px solid white" : "1px solid black"
      }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-5xl md:text-7xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? 'text-white' : 'text-black'}`}
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          <p className="mb-4">
            As a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Mechatronics, Robotics and Automation Engineering</span> student at 
            <span className="font-italic text-indigo-600 dark:text-indigo-400"> IIT Bhilai</span>, I am well-versed in the principles of designing and implementing complex systems.
          </p>
          
          <p className="mb-4">
            My strong foundation in programming languages such as <span className="font-semibold">C and C++</span> forms the backbone of my technical expertise.
          </p>
          
          <p>
            Complementing my engineering skills, I've cultivated proficiency in web technologies, including:
          </p>
          
          <ul className="list-disc list-inside mt-2 mb-4 pl-4">
            <li>HTML, CSS, and JavaScript</li>
            <li>React for dynamic front-end development</li>
            <li>Database management using MySQL, PostgreSQL, and MongoDB</li>
          </ul>
          
          <p>
            This diverse skill set allows me to bridge the gap between hardware and software, creating innovative solutions that span multiple domains.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;