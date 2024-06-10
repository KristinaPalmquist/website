// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import useLocalStorage from "use-local-storage";

import "./App.css";
import Home from "./pages/Home/Home.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import About from "./pages/About/About.tsx";
import Courses from "./pages/Courses/Courses.tsx";
import CircleCursor from "./components/CircleCursor/CircleCursor.tsx";
import ErrorComponent from "./pages/404/404.tsx";
import {DarkModeToggle} from "./components/DarkMode/DarkModeToggle.tsx";
import {useState} from "react";
import {MenuOverlay} from "./components/Header/MenuOverlay.tsx";
import {Header} from "./components/Header/Header.tsx";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
  }

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className="App" data-theme={theme}>
      <CircleCursor/>
      <div className="darkModeContainer">
        <DarkModeToggle theme={theme} onThemeChange={handleThemeChange}/></div>
      <div className="headerContainer">
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
      </div>
      <div className="contentContainer">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/work" element={<Courses/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
    ;
}

export default App;