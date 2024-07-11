import styles from "./404.module.css";
import {Link} from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className={styles.contentContainer}>
      <h1>404</h1>
      <p>Ooops! Something went wrong. Please go back and hope you have better luck.</p>
      <Link to={'/'} className={styles.startLink}>Back to start</Link>
    </div>
  );
}

export default ErrorComponent;