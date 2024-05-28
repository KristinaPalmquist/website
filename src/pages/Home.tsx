import styles from "./Home.module.css";
import ReadMore from "../components/ReadMore/ReadMore.tsx";

const Home = () => {
    const handleClick = () => {
        console.log("clicked");
    };

  return (
    <div className="homeContainer">
      <h1>Welcome!</h1>
      <p>
          My name is Kristina Palmquist and I am a developer based in Stockholm.

          I've studied JavaScript Development at{" "}
        <a href="https://www.iths.se" target="_blank"  rel="noreferrer" className={styles.iths}>
          IT-Högskolan
        </a>{" "}
        in Stockholm and this is my website created in React.
      </p>
        <ReadMore onClick={() => handleClick()}></ReadMore>
    </div>
  );
};

export default Home;
