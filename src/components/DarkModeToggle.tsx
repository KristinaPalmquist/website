import { useState } from "react";
import styles from "./DarkModeToggle.module.css";

export const DarkModeToggle = (theme) => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  setIsDarkMode(theme === "dark" ? true : false);

  // const handleClick = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  return (
    <div className={styles.darkModeContainer}>
      <button
        // active={isDarkMode}
        // onClick={handleClick}
        className={styles.darkModeButton}
      >
        <div
          // active={isDarkMode}
          className={
            isDarkMode ? styles.darkModeInactive : styles.darkModeActive
          }
        >
          light
        </div>
        <div
          // active={isDarkMode}
          className={
            isDarkMode ? styles.lightModeActive : styles.LightModeInactive
          }
        >
          dark
        </div>
      </button>
    </div>
  );
};
