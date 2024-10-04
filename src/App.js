import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Blogs from './components/Blogs'
import Contact from './components/Contact'

import React, { useState } from 'react';
import './style/App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
  // const mode = localStorage.getItem("mode");
  const colour = '#f0dbb5ba'
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = colour
    }


  }
  return (
    <>
    <Nav title="DP" mode={mode} toggleMode={toggleMode} color={colour} />
       <Router>
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/projects" element={<Projects mode={mode} />} />
          <Route path="/achievements" element={<Achievements mode={mode} />} />
          <Route path="/blogs" element={<Blogs mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
        </Routes>
      </Router>
     
    </>
  )
}

export default App