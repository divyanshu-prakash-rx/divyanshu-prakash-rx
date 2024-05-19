import React, { useState } from "react";
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
} from "../images/images";

// import {useNavigate} from 'react-router-dom'

export default function Nav(props) {
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
  const navItemImageStyle = {
    width: "auto",
    height: "21px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };
  function handleMouseEnter(e) {
    const image = e.target.querySelector(".nav-item-image");
    const text = e.target.querySelector(".nav-item-text");
    if (image && text) {
      image.style.transform = "translateY(-5px)";
      text.style.transform = "translateY(0)";
      text.style.opacity = "1";
    }
  }

  function handleMouseLeave(e) {
    const image = e.target.querySelector(".nav-item-image");
    const text = e.target.querySelector(".nav-item-text");

    if (image && text) {
      image.style.transform = "translateY(0)";
      text.style.transform = "translateY(5px)";
      text.style.opacity = "0";
    }
  }

  return (
    <>
      <nav
        className={`navbar bg-${props.mode === "light" ? props.color : "black"
          }  d-flex justify-content-between w-100 fixed py-1 mb-3 pe-4 ps-3`}
      >
        <a
          className={`navbar-brand text-${props.mode === "light" ? "black" : "white"
            } border  border-end-0 rounded-start p-2 border-${props.mode === "light" ? "dark" : "light"
            }`}
          href="/"
        >
          Divyanshu Prakash
        </a>
        <div className="">
          <ul className="nav d-flex ">
            <li className="">
              <a
                className="nav-link active"
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex align-items-center flex-column">
                  <img
                    className="mt-2 nav-item-image"
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
              </a>
            </li>
            <li className="">
              <a
                className="nav-link  active"
                href="/home"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex align-items-center flex-column">
                  <img
                    className="mt-2 nav-item-image"
                    src={props.mode === "dark" ? blogs_dark : blogs_light}
                    alt="blogs"
                    style={navItemImageStyle}
                  />
                  <span
                    className=" mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    BLOGS
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a
                className="nav-link"
                href="/about"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex align-items-center flex-column">
                  <img
                    className="mt-2 nav-item-image"
                    src={props.mode === "dark" ? project_dark : project_light}
                    alt="projects"
                    style={navItemImageStyle}
                  />
                  <span
                    className=" mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    PROJECTS
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a
                className="nav-link"
                href="/services"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex align-items-center flex-column">
                  {" "}
                  <img
                    className="mt-2 nav-item-image"
                    src={props.mode === "dark" ? about_dark : about_light}
                    alt="about"
                    style={navItemImageStyle}
                  />
                  <span
                    className=" mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    ABOUT
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a
                className="nav-link"
                href="/contact"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mt-2 d-flex align-items-center flex-column">
                  <img
                    className="nav-item-image"
                    src={props.mode === "dark" ? contact_dark : contact_light}
                    alt="contact"
                    style={navItemImageStyle}
                  />
                  <span
                    className=" mt-2 nav-item-text"
                    style={navItemTextStyle(props.mode)}
                  >
                    CONTACT
                  </span>
                </div>
              </a>
            </li>
            <div className="nav-link pe-1">
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
        </div>
      </nav>
    </>
  );
}
