import React, { useState } from 'react'
import front_image from '../images/Front_image-2.png'
import { BookOpen, Briefcase, Code } from 'lucide-react';

function Home(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const PortfolioSection = ({ title, icon: Icon, items }) => (
    <div className="  rounded-lg shadow-lg p-6 m-4" style={
      {
        backgroundColor: props.mode === "light" ? "#f8e2bd" : "black",
        color: props.mode === "light" ? "black" : "white",
        border: props.mode === "light" ? "1px solid #c4b8b8" : "1px solid white"
      }
    }>
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 mr-2 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-2xl font-bold "style={{fontFamily:"Arial"}}>{title}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b  pb-4 last:border-b-0 last:pb-0"style={{
            fontFamily: "Bradley Hand ITC", fontWeight: props.mode === "light" ? "bold" : "normal", fontSize: "119%"
          }} >
            <h3 className="text-lg font-semibold ">{item.title}</h3>
            <p className="text-sm text-gray-600 ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const projects = [
    { title: "E-commerce Platform", description: "Built a full-stack e-commerce solution using React and Node.js" },
    { title: "AI Chatbot", description: "Developed a machine learning-powered chatbot for customer support" },
    { title: "Mobile Fitness App", description: "Created a cross-platform mobile app for tracking workouts and nutrition" },
  ];

  const workExperience = [
    { title: "Senior Developer at TechCorp", description: "Led a team of 5 developers in building enterprise software solutions" },
    { title: "Full Stack Developer at StartupX", description: "Wore multiple hats in a fast-paced startup environment" },
    { title: "Junior Developer at WebSolutions", description: "Contributed to various client projects and internal tools" },
  ];

  const blogs = [
    { title: "The Future of AI in Web Development", description: "Exploring how artificial intelligence is shaping the future of web technologies" },
    { title: "Optimizing React Performance", description: "Tips and tricks for building lightning-fast React applications" },
    { title: "From Junior to Senior: My Developer Journey", description: "Reflections on career growth and lessons learned in the tech industry" },
  ];
  return (
    <>
      <div className='flex flex-wrap w-full mt-11 '>
        <div className="grid grid-cols-2 items-center">
          <img className="w-full h-auto" src={front_image} alt="Front_image" />
          <div className='flex justify-center flex-col pr-3'>
            <h1 className={`gradient-text-${props.mode}`}>Divyanshu Prakash</h1>
            <h4 className={`gradient-text2-${props.mode}`}>Developer | AI | ML | Web | Robotics</h4>
            <p className={`text-${props.mode === "light" ? "black" : "white"} para-text`} style={{ fontFamily: "Bradley Hand ITC", fontWeight: props.mode === "light" ? "bold" : "normal" }}>
              I am a developer who loves to code and build new things. I am a passionate learner and always ready to learn new technologies.
            </p>
            <button
              className={`btn btn-sm mt-2 ${isHovered ? 'btn-yellow' : 'btn-orange'} text-white`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                width: "140px",
                height: "4",
                fontSize: "1.2rem",
                borderRadius: "20px",
                fontFamily: "arial",
              }}
            >
              See Works →
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-center" style={{
            width: "60%", margin: "150px 0px 230px 0px"
          }}>
            <h1
              className={`text-${props.mode === "light" ? "black" : "white"} text-7xl`}
              style={{
                fontFamily: "Bradley Hand ITC", fontWeight: "bold"
              }}
            >
              About
            </h1>
            <p
              className={`text-${props.mode === "light" ? "black" : "white"} para-text`}
              style={{
                fontFamily: "Bradley Hand ITC", fontWeight: props.mode === "light" ? "bold" : "normal", fontSize: "119%"
              }}
            >
              As a Mechatronics, Robotics and Automation Engineering student at <span style={{ fontFamily: "cursive" }}>IIT Bhilai</span>, I am well-versed in the principles of designing and implementing complex systems. Additionally, I have a strong foundation in programming languages such as C and C++.
              <br /> I also have a strong command of HTML, CSS, JavaScript, and React and Database Management on Platforms like mySQL, PostgreSQL and Mongodb, complementing my skills with web development expertise.
            </p>
          </div>
        </div>
        <div >
          <div className=" mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PortfolioSection title="Projects" icon={Code} items={projects} />
              <PortfolioSection title="Work Experience" icon={Briefcase} items={workExperience} />
              <PortfolioSection title="Blogs" icon={BookOpen} items={blogs} />
            </div>
          </div>
        </div>
        <div style={{ height: "100vh" }}>
        </div>
      </div >
    </>
  )
}

export default Home
