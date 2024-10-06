import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Briefcase, Code, ArrowRight } from "lucide-react";
import { project, work, front_image } from "../images/images";
function Home(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const navigate = useNavigate();
  const mode = props.mode;
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const Card = ({ title, description, imageUrl }) => {
    return (
      <div 
        className={`max-w-sm rounded overflow-hidden shadow-lg ${
          mode === "light" 
            ? "bg-white border border-gray-200" 
            : "bg-gray-800 border border-gray-700"
        }`}
      >
        <img
          className="w-full h-48 object-cover"
          src={imageUrl || "/api/placeholder/400/300"}
          alt={title}
        />
        <div className="px-6 py-4">
          <div className={`font-bold text-xl mb-2 ${
            mode === "light" ? "text-gray-800" : "text-white"
          }`}>
            {title}
          </div>
          <p className={`text-base ${
            mode === "light" ? "text-gray-700" : "text-gray-300"
          }`}>
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className={`
            font-bold py-2 px-4 rounded
            ${mode === "light" 
              ? "bg-blue-500 hover:bg-blue-700 text-white" 
              : "bg-blue-600 hover:bg-blue-800 text-white"
            }
          `}>
            Learn More
          </button>
        </div>
      </div>
    );
  };
  const handleNavigation = (route, e) => {
    e.target.style.transform = "scale(0.9)";

    setTimeout(() => {
      e.target.style.transform = "scale(1)";
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(route, { state: { mode } });
    }, 100);
  };

  return (
    <>
      <div className="flex flex-wrap w-full smartphone:mt-0 ">
        <div className="flex flex-wrap w-full">
          <div className="grid grid-cols-2 items-center mt-1 smartphone:grid-cols-1">
            <div className="smartphone:w-full smartphone:h-screen smartphone:flex smartphone:items-center smartphone:justify-center smartphone:relative">
              <img
                className="w-full h-auto smartphone:blur-sm smartphone:-z-40"
                src={front_image}
                alt="Front_image"
              />
              {/* For Smartphone */}
              <div className="relative smartphone:block hidden smartphone:absolute m-0 p-0 w-full">
                <div className="flex justify-center flex-col">
                  <div className="bg-black flex justify-center py-2 relative w-screen border border-black">
                    <h1
                      className={`gradient-text-${props.mode}`}
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      Divyanshu Prakash
                    </h1>
                  </div>
                  <div className="bg-black flex justify-center py-2 relative w-screen text-lg border border-black">
                    <h4
                      className={` pop-down hidden-before-animation`}
                      style={{
                        color: "white",
                        fontFamily: "Century Gothic",
                        animation: "fadeInDown 1s ease-in-out forwards 0s",
                      }}
                    >
                      Developer | AI | ML | Web | Robotics
                    </h4>
                  </div>
                  <div className=" flex justify-center relative w-screen">
                    <button
                      className={`btn btn-sm mt-2 ${
                        isHovered ? "btn-yellow" : "btn-orange"
                      } text-white hidden-before-animation`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        width: "140px",
                        fontSize: "1.2rem",
                        borderRadius: "20px",
                        fontFamily: "arial",
                        zIndex: 10,
                        animation: "fadeInDown 1s ease-in-out forwards 1s",
                      }}
                      onClick={() => {
                        document.getElementById("works").scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      See Works →
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* For Desktop */}
            <div className="flex justify-center flex-col pr-3 smartphone:hidden">
              <h1 className={`gradient-text-${props.mode} `}>
                Divyanshu Prakash
              </h1>
              <h4
                className={`gradient-text2-${props.mode} pop-down`}
                style={{
                  animation: "fadeInDown 1s ease-in-out forwards 0s",
                }}
              >
                Developer | AI | ML | Web | Robotics
              </h4>
              <p
                className={`text-${
                  props.mode === "light" ? "black" : "white"
                } para-text pop-down`}
                style={{
                  fontFamily: "Bradley Hand ITC",
                  fontWeight: props.mode === "light" ? "bold" : "normal",
                  animation: "fadeInDown 1s ease-in-out forwards 0.5s",
                }}
              >
                I am a developer who loves to code and build new things. I am a
                passionate learner and always ready to learn new technologies.
              </p>
              <button
                className={`btn btn-sm mt-2 ${
                  isHovered ? "btn-yellow" : "btn-orange"
                } text-white pop-down`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  width: "140px",
                  fontSize: "1.2rem",
                  borderRadius: "20px",
                  fontFamily: "arial",
                  zIndex: 10,
                  animation: "fadeInDown 1s ease-in-out forwards 1s",
                }}
                onClick={() => {
                  document.getElementById("works").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                See Works →
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5  mt-48 mb-60 smartphone:mt-0 ">
            <h1
              className={`text-${
                props.mode === "light" ? "black" : "white"
              } text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
              style={{
                fontFamily: "Bradley Hand ITC",
                fontWeight: "bold",
              }}
            >
              About
            </h1>
            <p
              className={`text-${
                props.mode === "light" ? "black" : "white"
              } para-text text-base sm:text-lg md:text-xl lg:text-2xl`}
              style={{
                fontFamily: "Bradley Hand ITC",
                fontWeight: props.mode === "light" ? "bold" : "normal",
              }}
            >
              As a Mechatronics, Robotics and Automation Engineering student at{" "}
              <span style={{ fontFamily: "cursive" }}>IIT Bhilai</span>, I am
              well-versed in the principles of designing and implementing
              complex systems. Additionally, I have a strong foundation in
              programming languages such as C and C++.
              <br /> I also have a strong command of HTML, CSS, JavaScript, and
              React and Database Management on Platforms like mySQL, PostgreSQL
              and Mongodb, complementing my skills with web development
              expertise.
            </p>
          </div>
        </div>

        <div className=" mx-5 px-4">
          <div
            id="works"
            className="grid smartphone:grid-cols-1 grid-cols-2 gap-y-16 lg:gap-0"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-4 smartphone:hidden">
              <h1
                className={`text-${
                  props.mode === "light" ? "black" : "white"
                } text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
                style={{
                  fontFamily: "Bradley Hand ITC",
                  fontWeight: "bold",
                }}
              >
                Projects
              </h1>
              <p
                className={`text-${
                  props.mode === "light" ? "black" : "white"
                } text-lg`}
                style={{
                  fontFamily: "Bradley Hand ITC",
                  fontWeight: "bold",
                }}
              >
                Check out my projects here.
              </p>
              <button style={{ fontSize: "1rem" }}>
                <ArrowRight
                  size={55}
                  color={`${props.mode === "light" ? "black" : "white"}`}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid",
                    borderColor: `${
                      props.mode === "light" ? "black" : "white"
                    }`,
                    padding: "0.5rem",
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    height: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                  onClick={(e) => handleNavigation("/projects", e)}
                />
              </button>
            </div>

            <div
              className="w-full h-full transform transition-transform "
              style={{}}
            >
              <img
                src={project}
                alt="Work experience visualization"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="smartphone:flex flex-col items-center justify-center h-full space-y-4 smartphone:visible hidden smartphone:mt-3">
              <h1
                className={`text-${
                  props.mode === "light" ? "black" : "white"
                } text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
                style={{
                  fontFamily: "Bradley Hand ITC",
                  fontWeight: "bold",
                }}
              >
                Projects
              </h1>
              <p
                className={`text-${
                  props.mode === "light" ? "black" : "white"
                } text-lg`}
                style={{
                  fontFamily: "Bradley Hand ITC",
                  fontWeight: "bold",
                }}
              >
                Check out my projects here.
              </p>
              <button style={{ fontSize: "1rem" }}>
                <ArrowRight
                  size={55}
                  color={`${props.mode === "light" ? "black" : "white"} `}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid",
                    borderColor: `${
                      props.mode === "light" ? "black" : "white"
                    }`,
                    padding: "0.5rem",
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    height: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                  onClick={(e) => handleNavigation("/projects", e)}
                />
              </button>
            </div>
            <div className=" transform transition-transform" style={{}}>
              <img src={work} alt="Project visualization" />
            </div>
            <div className="flex flex-col items-center justify-center h-full space-y-4 smartphone:mt-3">
              <h1
                className={`text-${
                  props.mode === "light" ? "black" : "white"
                } text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
                style={{
                  fontFamily: "Bradley Hand ITC",
                  fontWeight: "bold",
                }}
              >
                Work Experience
              </h1>
              <p
                className={`text-${
                  props.mode === "light" ? "black" : "white"
                } text-lg`}
                style={{
                  fontFamily: "Bradley Hand ITC",
                  fontWeight: "bold",
                }}
              >
                Check out my Work Experience here.
              </p>
              <button style={{ fontSize: "1rem" }}>
                <ArrowRight
                  size={55}
                  color={`${props.mode === "light" ? "black" : "white"}`}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid",
                    borderColor: `${
                      props.mode === "light" ? "black" : "white"
                    }`,
                    padding: "0.5rem",
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    height: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                  onClick={(e) => handleNavigation("/workexperience", e)}
                />
              </button>
            </div>
          </div>

          <div className="mt-56 text-center">
            <h2
              className="text-5xl font-bold mb-12 flex items-center justify-center gap-3 "
              style={{
                fontFamily: "Arial",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <BookOpen className="w-8 h-8" />
              Blogs
            </h2>
            <div className="flex justify-center">
              <div className=" grid grid-cols-3 gap-x-20 smartphone:grid-cols-1 smartphone:gap-0 smartphone:gap-y-3 mb-36">
                <Card
                  title="React Card Component"
                  description="This is a reusable card component built with Tailwind CSS and React."
                  imageUrl="https://via.placeholder.com/400x300"
                />
                <Card
                  title="React Card Component"
                  description="This is a reusable card component built with Tailwind CSS and React."
                  imageUrl="https://via.placeholder.com/400x300"
                />
                <Card
                  title="React Card Component"
                  description="This is a reusable card component built with Tailwind CSS and React."
                  imageUrl="https://via.placeholder.com/400x300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
