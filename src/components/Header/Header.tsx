import styles from "./Header.module.css";

export const Header = ({navbarOpen, setNavbarOpen}) => {
  const navbarClick = () => {
    setNavbarOpen(prevState => {
      return !prevState;
    })
  }

  return (
    <header className={styles.header}>
      <h1 className={[styles.headerText, navbarOpen ? styles.headerTextOpen : ''].join(" ")}>Kristina Palmquist</h1>
      {/*<h1 className={styles.headerText}>Kristina Palmquist</h1>*/}
      <button className={styles.navbarBtn} onClick={navbarClick}>
        <div className={styles.innerContainer}>
          <span className={[styles.line, styles.line1, navbarOpen ? styles.line1Open : ''].join(" ")}>
          {/*<span className={[styles.line, styles.line1, navbarOpen ? styles.line1Open : styles.line1Closed].join(" ")}>*/}
          </span>
          <span className={[styles.line, styles.line2, navbarOpen ? styles.line2Open : ''].join(" ")}>
          {/*<span className={[styles.line, styles.line2, navbarOpen ? styles.line2Open : styles.line2Closed].join(" ")}>*/}
          </span>
          <span className={[styles.line, styles.line3, navbarOpen ? styles.line3Open : ''].join(" ")}>
          {/*<span className={[styles.line, styles.line3, navbarOpen ? styles.line3Open : styles.line3Closed].join(" ")}>*/}
          </span>
        </div>
      </button>
    </header>
  )
}