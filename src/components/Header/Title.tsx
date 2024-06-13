import styles from "./Title.module.css";
import logo from "../../assets/images/logo.png";
// import useLocalStorage from "use-local-storage";

export const Title = () => {

  return (

    <a href="/public" className={styles.titleLink}>
      <div className={styles.title}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <h1 className={styles.name}>Kristina Palmquist</h1>
      </div>
      {" "}
    </a>
  );
};
