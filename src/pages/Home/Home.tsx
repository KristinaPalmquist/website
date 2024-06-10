import styles from "./Home.module.css";
// import ReadMore from "../components/ReadMore/ReadMore.tsx";

const Home = () => {
    // const handleClick = () => {
    //     console.log("clicked");
    // };

  return (
    <div className="homeContainer">
      <h1>Welcome to my page</h1>
      <p>
          My name is Kristina Palmquist and I am a developer based in Stockholm.

          I've studied JavaScript Development at{" "}
        <a href="https://www.iths.se" target="_blank"  rel="noreferrer" className={styles.iths}>
          IT-Högskolan
        </a>{" "}
        in Stockholm and this is my website created in React.
      </p>
        <p>The first course I took was HTML & CSS and I still love it. To be able to get something out on a page with so little effort is amazing to me.</p>
        <p>With the addition of JavaScript that is actually all you need. </p>
    </div>
  );
};

export default Home;
