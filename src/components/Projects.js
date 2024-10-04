import React from 'react';
import { Code, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BrowserWindow = ({ url, title }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg"
  >
    <div className="bg-gray-100 dark:bg-gray-800 p-2 flex items-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="mx-auto text-sm text-gray-600 dark:text-gray-300">{title}</div>
    </div>
    <div className="aspect-w-16 aspect-h-9">
      <iframe src={url} title={title} className="w-full h-full border-0"></iframe>
    </div>
  </motion.div>
);

const ProjectCard = ({ project, isExpanded, onToggle }) => (
  <motion.div 
    layout
    transition={{ duration: 0.5, type: "spring" }}
    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${isExpanded ? 'col-span-3' : ''}`}
  >
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <motion.h3 layout="position" className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</motion.h3>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggle} 
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {isExpanded ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
        </motion.button>
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <motion.img 
            layoutId={`image-${project.title}`}
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover rounded-lg mb-4" 
          />
          <motion.p layout="position" className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</motion.p>
          <motion.div layout="position" className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          <motion.div layout="position" className="flex justify-between items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Code className="w-5 h-5 mr-2" />
              GitHub
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Site
            </motion.a>
          </motion.div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BrowserWindow url={project.liveLink} title={project.title} />
              <motion.h4 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2"
              >
                Key Features:
              </motion.h4>
              <motion.ul 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4"
              >
                {project.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  </motion.div>
);

const ProjectsPage = ({ mode }) => {
  const [expandedProject, setExpandedProject] = React.useState(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced features for a seamless shopping experience.",
      image: "/api/placeholder/800/600",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      githubLink: "https://www.google.com",
      liveLink: "https://textcase-master.onrender.com/",
      features: [
        "User authentication and authorization",
        "Product search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment integration",
        "Order tracking and history"
      ]
    },
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by machine learning to provide instant customer support.",
      image: "/api/placeholder/800/600",
      technologies: ["Python", "TensorFlow", "Natural Language Processing", "Flask", "React"],
      githubLink: "https://github.com/yourusername/ai-chatbot",
      liveLink: "https://codeforces.com/profile/Divyanshup",
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Integration with knowledge base",
        "Continuous learning from interactions"
      ]
    },
    // Add more projects as needed
  ];

  return (
    <div className={`min-h-screen ${mode === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className="container mx-auto py-12 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${mode === 'light' ? 'text-gray-900' : 'text-white'}`} 
          style={{ fontFamily: "Bradley Hand ITC, cursive" }}
        >
          My Projects
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              isExpanded={expandedProject === index}
              onToggle={() => setExpandedProject(expandedProject === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;