import React from "react";
import { Code, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage = (props) => {
  const mode = props.mode;
  const BrowserWindow = ({ url, title }) => (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-100 dark:bg-gray-800 p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mx-auto text-sm text-gray-600 dark:text-gray-300">
          {title}
        </div>
      </div>
      <div className="h-[600px]">
        <iframe
          src={url}
          title={title}
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );

  const ProjectCard = ({ project, isExpanded, onToggle }) => (
    <motion.div
      layout
      transition={{ duration: 0.5, type: "spring" }}
      className={`rounded-lg shadow-lg overflow-hidden ${
        isExpanded ? "col-span-3" : ""
      }`}
      style={{ backgroundColor: mode === "light" ? "#f0dbb5ba" : "#030712" }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <motion.h3
            layout="position"
            className="text-2xl font-bold"
            style={{ color: mode === "light" ? "#1a202c" : "white" }}
          >
            {project.title}
          </motion.h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggle}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isExpanded ? (
              <Minimize2 className="w-6 h-6" />
            ) : (
              <Maximize2 className="w-6 h-6" />
            )}
          </motion.button>
        </div>
        
        {/* Main content */}
        <div className="flex justify-center">
        <motion.div layout>
          <div className="flex justify-center">
          <motion.img
            layoutId={`image-${project.title}`}
            src={project.image}
            alt={project.title}
            className={`w-full h-48 object-cover rounded-lg mb-4`}
            style={{ 
              width: "70%",
              height: "auto",
             }}
          /></div>
          <motion.p
            layout="position"
            className="mb-4"
            style={{ color: mode === "light" ? "#1a202c" : "white" }}
          >
            {project.description}
          </motion.p>
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
          <motion.div
            layout="position"
            className="flex justify-between items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400"
              style={{ color: mode === "light" ? "#1a202c" : "white" }}
            >
              <Code className="w-5 h-5 mr-2" />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400"
              style={{ color: mode === "light" ? "#1a202c" : "white" }}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Site
            </motion.a>
          </motion.div>
        </motion.div></div>
  
        {/* Expanded content with full width */}
        <AnimatePresence>
          {isExpanded && (
            <div className="flex justify-center">
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
              style={{ 
                width: "70%",
               }}
            >
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                <BrowserWindow url={project.liveLink} title={project.title} />
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ color: mode === "light" ? "#1a202c" : "white" }}
                  className="text-xl font-semibold mt-4 mb-2"
                >
                  Key Features:
                </motion.h4>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ color: mode === "light" ? "#4a5568" : "#cbd5e0" }}
                  className="list-disc pl-5 mb-4"
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
              </div>
            </motion.div></div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  const [expandedProject, setExpandedProject] = React.useState(null);
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features for a seamless shopping experience.",
      image: "https://via.placeholder.com/800x600",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      githubLink: "https://www.google.com",
      liveLink: "https://textcase-master.onrender.com/",
      features: [
        "User authentication and authorization",
        "Product search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment integration",
        "Order tracking and history",
      ],
    },
    {
      title: "AI Chatbot",
      description:
        "An intelligent chatbot powered by machine learning to provide instant customer support.",
      image: "https://via.placeholder.com/800x600",
      technologies: [
        "Python",
        "TensorFlow",
        "Natural Language Processing",
        "Flask",
        "React",
      ],
      githubLink: "https://github.com/yourusername/ai-chatbot",
      liveLink: "https://codeforces.com/profile/Divyanshup",
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Integration with knowledge base",
        "Continuous learning from interactions",
      ],
    },
  ];

  return (
    <div className={`min-h-screen `}>
      <div className="container mx-auto py-12 px-4">
        <h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
          style={{ fontFamily: "Bradley Hand ITC, cursive" }}
        >
          My Projects
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isExpanded={expandedProject === index}
              onToggle={() =>
                setExpandedProject(expandedProject === index ? null : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
