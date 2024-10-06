import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = (props) => {
  return (
    <div
      className=" text-white py-8 "
      style={{
        backgroundColor: props.mode === "light" ? props.color : "black",
        borderTop: "1px solid #333",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0">
            <h2
              className={`text-2xl font-bold ${
                props.mode === "light" ? "text-black" : "text-white"
              }`}
            >
              Divyanshu Prakash
            </h2>
            <p
              className={`${
                props.mode === "light" ? "text-black" : "text-white"
              }`}
            >
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className={`font-semibold mb-3 ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#about"
                  className={`${
                    props.mode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  About Me
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#projects"
                  className={`${
                    props.mode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact"
                  className={`${
                    props.mode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className={`font-semibold mb-3 ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>Connect with Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  props.mode === "light" ? "text-black" : "text-white"
                }`}
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  props.mode === "light" ? "text-black" : "text-white"
                }`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  props.mode === "light" ? "text-black" : "text-white"
                }`}
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p
            className={`${
              props.mode === "light" ? "text-black" : "text-white"
            }`}
          >
            &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
