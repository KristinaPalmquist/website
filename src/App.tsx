// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Courses from "./pages/Courses";
import { Menu } from "./components/Menu";
import { Title } from "./components/Title";
import CircleCursor from "./components/CircleCursor/CircleCursor.tsx";

function App() {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );
    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <div className="App" data-theme={theme}>
            <CircleCursor/>
            <div className="titleContainer">
                <Title />
                <button onClick={switchTheme} className="darkModeButton">
                    <div
                        className={
                            theme === "light" ? "lightModeActive" : "lightModeInactive"
                        }
                    >
                        light
                    </div>
                    <div className={["active", theme === "dark" ? "dark" : "light"].join(" ")}></div>
                    <div
                        className={theme === "dark" ? "darkModeActive" : "darkModeInactive"}
                    >
                        dark
                    </div>
                </button>
            </div>
            <header className="headerContainer">
                <Menu />

            </header>
            <div className="contentContainer">
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/work" element={<Courses/>}/>
                        <Route path="/courses" element={<Courses/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
            </BrowserRouter>
            </div>
</div>
)
    ;
}

export default App;