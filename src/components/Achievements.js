import React from 'react';
import { Award, Star, Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const AchievementCard = ({ title, date, description, icon: Icon, category }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <div className={`p-3 rounded-full mr-4 ${getCategoryColor(category)}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const getCategoryColor = (category) => {
  switch (category) {
    case 'award':
      return 'bg-yellow-500';
    case 'certification':
      return 'bg-blue-500';
    case 'publication':
      return 'bg-green-500';
    default:
      return 'bg-purple-500';
  }
};

const AchievementsPage = ({ mode }) => {
  const achievements = [
    {
      title: "Best Innovative Project Award",
      date: "June 2023",
      description: "Received the top award for developing an AI-driven solution to optimize urban traffic flow.",
      icon: Trophy,
      category: "award"
    },
    {
      title: "AWS Certified Solutions Architect",
      date: "March 2023",
      description: "Earned professional certification demonstrating expertise in designing distributed systems on AWS.",
      icon: Award,
      category: "certification"
    },
    {
      title: "Published in IEEE Conference",
      date: "September 2022",
      description: "Research paper on 'Efficient Algorithms for Edge Computing' accepted and presented at IEEE INFOCOM 2022.",
      icon: Star,
      category: "publication"
    },
    {
      title: "Hackathon Winner",
      date: "November 2022",
      description: "Led a team to victory in a 48-hour hackathon, developing a novel approach to privacy-preserving machine learning.",
      icon: Award,
      category: "award"
    },
    // Add more achievements as needed
  ];

  return (
    <motion.div 
      className={`min-h-screen ${mode === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto py-12 px-4">
        <motion.h1 
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${mode === 'light' ? 'text-gray-900' : 'text-white'}`}
          style={{ fontFamily: "Bradley Hand ITC, cursive" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Achievements
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.3 } }
          }}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl font-semibold mb-4 ${mode === 'light' ? 'text-gray-800' : 'text-white'}`}>
            Skills Breakdown
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'JavaScript', 'React', 'Node.js', 'AWS', 'Machine Learning', 'Data Analysis'].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AchievementsPage;
