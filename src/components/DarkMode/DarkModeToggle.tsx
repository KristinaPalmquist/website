import {useEffect, useState} from "react";
import styles from "./DarkModeToggle.module.css";

export const DarkModeToggle = ({theme, onThemeChange}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme])

  const handleClick = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    onThemeChange(newTheme);
  };
  return (
    <button onClick={handleClick} className={styles.darkModeButton}>
      <div className={isDarkMode ? styles.darkModeInactive : styles.darkModeActive}> light</div>
      <div className={[styles.active, theme === "dark" ? styles.dark : styles.light].join(" ")}></div>
      <div className={isDarkMode ? styles.lightModeActive : styles.lightModeInactive}> dark</div>
    </button>
  );
};