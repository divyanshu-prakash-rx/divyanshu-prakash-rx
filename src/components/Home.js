import React, { useEffect, useRef, useState } from 'react'
import Timeline from './Timeline';
import front_image from '../images/Front_image-2.png'
function Home(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className='row w-100' >
        <img className={` col-6
            `} src={front_image} alt="Front_image" style={{
            width: "50%",
            height: "auto",
          }} />
        <div className={`d-flex justify-content-center flex-column col-6 
          }`}
        >
          <h1 className={`gradient-text-${props.mode}`}>Divyanshu Prakash</h1>
          <h4 className={`gradient-text2-${props.mode} `}>Developer | AI | ML | Web | Robotics</h4>
          <p className={`text-${props.mode === "light" ? "black" : "white"} para-text`} style={{ fontFamily: "Bradley Hand ITC", fontWeight: props.mode === "light" ? "bold" : "normal" }}>
            I am a developer who loves to code and build new things. I am a passionate learner and always ready to learn new technologies.</p>
          <button
            className={`btn btn-sm ${isHovered ? 'btn-warning' : 'btn-orange'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              width: "150px", height: "4",
              fontSize: "1.2rem",
              borderRadius: "0px",
              fontFamily: "arial",
            }}
          >
            See Works →
          </button>
        </div>
        {/* <div className="d-flex justify-content-center">
          <Timeline /></div> */}
        <div className="d-flex justify-content-center">
          <div className="text-center" style={{
            width: "60%", margin: "230px 0px 230px 0px"
          }}>
            <h1
              className={`text-${props.mode === "light" ? "black" : "white"}`}
              style={{
                fontSize: "70px", fontFamily: "Bradley Hand ITC", fontWeight: "bold"
              }}
            >
              About
            </h1>
            <p
              className={`text-${props.mode === "light" ? "black" : "white"} para-text`}
              style={{
                fontFamily: "Bradley Hand ITC", fontWeight: props.mode === "light" ? "bold" : "normal",
                fontSize: "119%"
              }}
            >
              As a Mechatronics, Robotics and Automation Engineering student at <span style={{fontFamily:"cursive"}}>IIT Bhilai</span>, I am well-versed in the principles of designing and implementing complex systems. Additionally, I have a strong foundation in programming languages such as C and C++.
              <br /> I also have a strong command of HTML, CSS, JavaScript, and React and Database Manangement on Platforms like mySQL,PostgreSQL and Mongodb, complementing my skills with web development expertise.
            </p></div>
        </div>
        <div className="px-4">
          <div className="row mt-5">
            <div className={`col-6 `}>
              <h1 className={`ms-4 text-${props.mode === "light" ? "black" : "white"}`} style={{
                fontSize:
                  "300%", fontFamily: "Bradley Hand ITC", fontWeight: "bold"
              }}>Projects</h1>
            </div>
            <div className="col-6" style={{ height: "50vh" }}>

            </div>
          </div>
          <div className="row mt-5">
            <div className={`col-6 `} style={{ height: "50vh" }}>

            </div>
            <div className="col-6 text-end">
              <h1 className={`text-${props.mode === "light" ? "black" : "white"}`} style={{
                fontSize:
                  "300%", fontFamily: "Bradley Hand ITC", fontWeight: "bold"
              }}>Work Experience</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className={`col-6 `}>
              <h1 className={`ms-4 text-${props.mode === "light" ? "black" : "white"}`} style={{
                fontSize:
                  "300%", fontFamily: "Bradley Hand ITC", fontWeight: "bold"
              }}>Blogs</h1>
            </div>
            <div className="col-6" style={{ height: "50vh" }}>

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