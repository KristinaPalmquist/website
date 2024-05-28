// import { Link } from "react-router-dom";

import styles from "./Courses.module.css";
import { useState } from "react";
import ReadMore from "../components/ReadMore/ReadMore.tsx";
import Modal from "../components/Modal/Modal.tsx";
// import { JavaScript } from "../components/courseComponents/JavaScript";
// import { TestingTypeScript } from './../components/courseComponents/TestingTypeScript';
// import { Agile } from './../components/courseComponents/Agile';


export interface Course {
    name: string;
    link: string;
    source: string;
    about: string;
}
// interface CourseModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }
const Courses = () => {
  const coursesItems: Course[] = [
    {
      name: "HTML / CSS",
      link: "https://glittering-douhua-2a73da.netlify.app/",
      source: "https://glittering-douhua-2a73da.netlify.app/",
      about: "",
    },
    {
      name: "Webbteknik 1",
      link: "/wt1",
      source: "https://www.tjejerkodar.se",
      about: "",
    },
    {
      name: "Webbteknik 2",
      link: "/wt2",
      source: "https://www.tjejerkodar.se",
      about: "",
    },
    {
      name: "Native JavaScript",
      link: "https://cheery-queijadas-91eae3.netlify.app/",
      source: "https://cheery-queijadas-91eae3.netlify.app/",
      about: "",
    },
    {
      name: "UX / UI Design",
      link: "/uxui",
      source: "https://www.expressen.se",
      about: "",
    },
    {
      name: "Agile Development",
      link: "/agile",
      source: "https://www.iths.se",
      about: "",
    },
    {
      name: "Backend JS",
      link: "/databases",
      source: "https://www.bing.se",
      about: "",
    },
    {
      name: "React Native",
      link: "/reactnative",
      source: "https://www.mitti.se",
      about: "",
    },
    {
      name: "Testing / TypeScript",
      link: "/testing_typescript",
      source: "https://www.tjejerkodar.se",
      about: "",
    },
    {
      name: "Java",
      link: "/wt1",
      source: "https://www.tjejerkodar.se",
      about: "",
    },
    {
      name: "Java - ObjektOrienterad Programmering",
      link: "/wt1",
      source: "https://www.tjejerkodar.se",
      about: "",
    },
    {
      name: "Flutter",
      link: "/flutter",
      source: "https://www.tjejerkodar.se",
      about: "",
    },
  ];

  // const [selectedSource, setSelectedSource] = useState(coursesItems[0].source);
const [isOpen, setOpen] = useState(false);
  // const showCourse = (index) => {
  //   setSelectedSource(coursesItems[index].source);
  //   console.log(index);
  // };

  // const dialog = document.getElementById('dialog');
  //
  // const openDialog = (index: number) => {
  //   console.log("click");
  //   setSelectedSource(coursesItems[index].source);
  //   setOpen(true);
  //   dialog.showModal();
  // };
  //
  // const closeDialog = () => {
  //   dialog.close();
  // };



  return (
      <div>
        <div className={styles.previewContainer}>
          <div className={styles.preview}>
            <iframe
                title="previewIFrame"
                className={styles.previewIFrame}
                src={coursesItems[0].source}
            ></iframe>
          </div>
        </div>

        <div className={styles.coursesContainer}>
          <ul className={styles.coursesList}>
            {coursesItems.map((item, index) => {
              return (
                  <li key={index} className={styles.coursesListItem}>
                    {/*<Link*/}
                    {/*  to={item.link}*/}
                    {/*  className={styles.coursesLink}*/}
                    {/*  onClick={() => showCourse(index)}*/}
                    {/*>*/}
                    {/*  {item.name}*/}
                    {/*</Link>*/}
                    {/*{item.link ? (*/}
                    {/*  <button className={styles.courseButton}>*/}
                    {/*    <a*/}
                    {/*      href={item.link}*/}
                    {/*      target="_blank"*/}
                    {/*      rel="noreferrer"*/}
                    {/*      className={styles.courseButtonLink}*/}
                    {/*    >*/}
                    {/*      Check it out*/}
                    {/*    </a>*/}
                    {/*  </button>*/}
                    {/*) : null}*/}
                   <div className={styles.courseName}> {item.name} </div>
                    <div className={styles.courseReadMore} style={{width: '230px'}}>
                      <ReadMore onClick={() => setOpen(true)}></ReadMore>
                    </div>
                    {/*<dialog id="dialog">*/}
                      <Modal  isOpen={isOpen} onClose={() => setOpen(false)} children={item} ></Modal>
                    {/*</dialog>*/}
                  </li>
              );
            })}
          </ul>
        </div>

      </div>
  );
};

export default Courses;
