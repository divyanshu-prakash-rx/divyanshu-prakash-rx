import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  dark,
  blogs_dark,
  about_dark,
  contact_dark,
  home_dark,
  light,
  project_dark,
  blogs_light,
  about_light,
  contact_light,
  home_light,
  project_light,
  achieve_light,
  achieve_dark,
  workex_dark,
  workex_light,
} from "../images/images";

export default function Nav(props) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navItemImageStyle = {
    width: "auto",
    height: "21px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  function handleMouseEnter(e) {
    const image = e.target.querySelector(".d");
    const text = e.target.querySelector(".nav-item-text");
    if (image && text) {
      image.style.transform = "translateY(-5px)";
      text.style.transform = "translateY(0)";
      text.style.opacity = "1";
    }
  }

  function handleMouseLeave(e) {
    const image = e.target.querySelector(".d");
    const text = e.target.querySelector(".nav-item-text");

    if (image && text) {
      image.style.transform = "translateY(0)";
      text.style.transform = "translateY(5px)";
      text.style.opacity = "0";
    }
  }
  const navItemTextStyle = (mode) => ({
    color: mode === "light" ? "black" : "white",
    fontSize: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: "1px",
    fontFamily: "Roboto, sans-serif",
    opacity: "0",
    transform: "translateY(5px)",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  });
  const navigate = useNavigate();
  const mode = props.mode;
  const handleNavigation = (route, e) => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(route, { state: { mode } });
    }, 100);
  };
  return (
    <div className="mb-16">
      <nav
        className={`fixed top-0 z-50 w-full flex justify-between px-4 pt-3 pb-2`}
        style={{
          backgroundColor: props.mode === "light" ? props.color : "black",
        }}
      >
        <div className="pb-2">
          <button
            onClick={(e) => handleNavigation("/", e)}
            className={` text-${
              props.mode === "light" ? "black" : "white"
            } border border-${
              props.mode === "light" ? "black" : "white"
            } rounded-l-lg p-2 
              `}
            style={{
              fontFamily: "Caveat, cursive",
              fontWeight: "bold",
              letterSpacing: "1px",
              textDecoration: "none",
            }}
          >
            Divyanshu Prakash
          </button>
        </div>
        <div className="">
          <ul className="below-850:hidden md:flex">
            <li>
              <button
                className=" active"
                onClick={(e) => handleNavigation("/", e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mx-8">
                  <img
                    className="mt-2 d"
                    src={props.mode === "dark" ? home_dark : home_light}
                    alt="home"
                    style={navItemImageStyle}
                  />
                  <span
                    className="mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    HOME
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                className=" active"
                onClick={(e) => handleNavigation("/blogs", e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mx-8">
                  <img
                    className="mt-2 d"
                    src={props.mode === "dark" ? blogs_dark : blogs_light}
                    alt="blogs"
                    style={navItemImageStyle}
                  />
                  <span
                    className="mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    BLOGS
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                className=""
                onClick={(e) => handleNavigation("/projects", e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="me-4 ms-8">
                  <img
                    className="mt-2 d"
                    src={props.mode === "dark" ? project_dark : project_light}
                    alt="projects"
                    style={navItemImageStyle}
                  />
                  <span
                    className="mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    PROJECTS
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                className=""
                onClick={(e) => handleNavigation("/workexperience", e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="me-4 ms-2">
                  <div className="flex justify-center">
                    <img
                      className="mt-2 d"
                      src={props.mode === "dark" ? workex_dark : workex_light}
                      alt="workexs"
                      style={navItemImageStyle}
                    />
                  </div>
                  <span
                    className="mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    WORK EXPERIENCE
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                className=""
                onClick={(e) => handleNavigation("/achievements", e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="me-4 ms-0">
                  <div className="flex justify-center">
                    <img
                      className="mt-2 d"
                      src={props.mode === "dark" ? achieve_dark : achieve_light}
                      alt="achievements"
                      style={navItemImageStyle}
                    />
                  </div>
                  <span
                    className="mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    ACHIEVEMENTS
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                className=""
                onClick={(e) => handleNavigation("/about", e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mx-6">
                  <img
                    className="mt-2 d"
                    src={props.mode === "dark" ? about_dark : about_light}
                    alt="about"
                    style={navItemImageStyle}
                  />
                  <span
                    className="mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    ABOUT
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button
                className=""
                onClick={(e) => handleNavigation("/contact", e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mt-2 mx-8">
                  <img
                    className="d"
                    src={props.mode === "dark" ? contact_dark : contact_light}
                    alt="contact"
                    style={navItemImageStyle}
                  />
                  <span
                    className="mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    CONTACT
                  </span>
                </div>
              </button>
            </li>
            <div className=" px-1">
              <img
                className="mt-2"
                src={props.mode === "light" ? dark : light}
                alt="dark"
                style={navItemImageStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
                onClick={(e) => {
                  e.target.style.transform = "scale(0.9)";
                  setTimeout(() => {
                    e.target.style.transform = "scale(1)";
                  }, 100);
                  props.toggleMode();
                }}
              />
            </div>
          </ul>
          <div className="below-850:flex hidden  items-center">
            <button
              className={`${
                props.mode === "light" ? "text-black" : "text-white"
              } border rounded-l-lg p-2 ${
                props.mode === "light" ? "border-black" : "border-white"
              }`}
              onClick={toggleMenu}
            >
              <i className="fas fa-bars h-10"></i>
            </button>
            {menu && (
              <div className="fixed inset-0 flex justify-end z-50">
                <div
                  className={`fixed inset-0 backdrop-blur-sm dark:bg-black/55`}
                  onClick={toggleMenu}
                ></div>
                <div
                  className={`w-64 h-80 m-2 p-3 rounded-l-lg shadow-lg z-50`}
                  style={{
                    backgroundColor:
                      props.mode === "light" ? props.color : "black",
                  }}
                >
                  <div className="flex justify-end">
                    <button
                      onClick={toggleMenu}
                      className={`${
                        props.mode === "light" ? "text-black" : "text-white"
                      }focus:outline-none mb-2 `}
                    >
                      <svg
                        viewBox="0 0 10 10"
                        class="w-2.5 h-2.5 overflow-visible"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 0L10 10M10 0L0 10"
                          fill="none"
                          stroke={props.mode === "light" ? "black" : "white"}
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <ul
                    className={`flex flex-col list-none space-y-2 ${
                      props.mode === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    <li>
                      <button
                        onClick={(e) => handleNavigation("/", e)}
                        className="hover:text-gray-300 text-sm"
                      >
                        HOME
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleNavigation("/blogs", e)}
                        className="hover:text-gray-300 text-sm"
                      >
                        BLOGS
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleNavigation("/projects", e)}
                        className="hover:text-gray-300 text-sm"
                      >
                        PROJECTS
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleNavigation("/workexperience", e)}
                        className="hover:text-gray-300 text-sm"
                      >
                        WORK EXPERIENCE
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleNavigation("/achievements", e)}
                        className="hover:text-gray-300 text-sm"
                      >
                        ACHIEVEMENTS
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleNavigation("/about", e)}
                        className="hover:text-gray-300 text-sm"
                      >
                        ABOUT
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleNavigation("/contact", e)}
                        className="hover:text-gray-300 text-sm"
                      >
                        CONTACT
                      </button>
                    </li>
                  </ul>
                  <div
                    class={`my-5 border
                    ${
                      props.mode === "light" ? "border-black" : "border-white"
                    } `}
                  ></div>
                  <div
                    className={`${
                      props.mode === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    Switch theme
                    <button
                      className={`text-sm ms-6 ${
                        props.mode === "light" ? "text-black" : "text-white"
                      }`}
                      onClick={props.toggleMode}
                    >
                      {props.mode === "light" ? "Dark" : "Light"} Mode
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  mode: PropTypes.string.isRequired,
  color: PropTypes.string,
  toggleMode: PropTypes.func.isRequired,
};
