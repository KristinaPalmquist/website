import { Link } from "react-router-dom";

import styles from "./Work.module.css";
import { useState } from "react";
// import { JavaScript } from "../components/courseComponents/JavaScript";
// import { TestingTypeScript } from './../components/courseComponents/TestingTypeScript';
// import { Agile } from './../components/courseComponents/Agile';
const Work = () => {
  const coursesItems = [
    {
      name: "HTML/CSS",
      link: "https://glittering-douhua-2a73da.netlify.app/",
      source: "https://glittering-douhua-2a73da.netlify.app/",
    },
    {
      name: "Native JavaScript",
      link: "https://cheery-queijadas-91eae3.netlify.app/",
      source: "https://cheery-queijadas-91eae3.netlify.app/",
    },
    {
      name: "UX / UI Design",
      // link: "/uxui",
      source: "https://www.expressen.se",
    },
    {
      name: "Agile Development",
      link: "/agile",
      source: "https://www.iths.se",
    },
    {
      name: "Backend JS",
      link: "/databases",
      source: "https://www.bing.se",
    },
    {
      name: "React Native",
      link: "/reactnative",
      source: "https://www.mitti.se",
    },
    {
      name: "Testing / TypeScript",
      link: "/about",
      source: "https://www.tjejerkodar.se",
    },
  ];

  const [selectedSource, setSelectedSource] = useState(coursesItems[0].source);

  const showCourse = (index) => {
    setSelectedSource(coursesItems[index].source);
    console.log(index);
  };

  return (
    <div className={styles.coursesContainer}>
      <ul className={styles.coursesList}>
        {coursesItems.map((item, index) => {
          return (
            <li key={index} className={styles.coursesListItem}>
              <Link
                to={item.link}
                className={styles.coursesLink}
                onClick={() => showCourse(index)}
              >
                {item.name}
              </Link>
              {item.link ? (
                <button className={styles.courseButton}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.courseButtonLink}
                  >
                    Check it out
                  </a>
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>
      <div className={styles.preview}>
        <iframe
          title="previewIFrame"
          className={styles.previewIFrame}
          src={selectedSource}
        ></iframe>
      </div>
    </div>
  );
};

export default Work;
