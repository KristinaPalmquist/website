// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

// import "./App.css";
import Home from "./pages/Home/Home.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import About from "./pages/About/About.tsx";
import Courses from "./pages/Courses/Courses.tsx";
import { Menu } from "./components/Menu";
import { Title } from "./components/Title";
import CircleCursor from "./components/CircleCursor/CircleCursor.tsx";
import ErrorComponent from "./pages/404/404.tsx";

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
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
            </BrowserRouter>
            </div>
</div>
)
    ;
}

export default App;