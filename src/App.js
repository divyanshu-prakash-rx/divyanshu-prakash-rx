import Home from './components/Home'
import Nav from './components/Nav'
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('dark')
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

      <Nav title="DP" mode={mode} toggleMode={toggleMode} color={colour}/>
      <Home mode={mode}/>
    </>
  )
}

export default App