import styles from "./Contact.module.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="styles.contactContainer">
      <table className={styles.contactTable}>
        <tbody>
        <tr>
          <td className={styles.contactHeader}>Phone</td>
          <td className={styles.contactDetails}>
            <Link to="tel:+46739500790"
               className={styles.contactLink}>
            +46 739 500 790</Link></td>
        </tr>
        <tr>
          <td className={styles.contactHeader}>Email</td>
          <td className={styles.contactDetails}>
            <Link to="#" onClick={(e) => {
              window.location.href = "mailto:kristina.palmquist@gmail.com";
              e.preventDefault()
            }}
                  className={styles.contactLink}>

            kristina.palmquist@gmail.com
            </Link>
          </td>
        </tr>
        <tr>
          <td className={styles.contactHeader}>LinkedIn</td>
          <td className={styles.contactDetails}>
            <a
              href="https://www.linkedin.com/in/kristinapalmquist/"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              https://www.linkedin.com/in/kristinapalmquist/
            </a>
          </td>
        </tr>
        <tr>
          <td className={styles.contactHeader}>GitHub</td>
          <td className={styles.contactDetails}>
            <a
              href="https://github.com/KristinaPalmquist"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              https://github.com/KristinaPalmquist
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
