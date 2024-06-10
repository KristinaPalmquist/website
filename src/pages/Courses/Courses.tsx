// import { Link } from "react-router-dom";

import styles from "./Courses.module.css";
import {useState} from "react";
import ReadMore from "../../components/ReadMore/ReadMore.tsx";
import Modal from "../../components/Modal/Modal.tsx";
// import { JavaScript } from "../components/courseComponents/JavaScript";
// import { TestingTypeScript } from './../components/courseComponents/TestingTypeScript';
// import { Agile } from './../components/courseComponents/Agile';


export interface Course {
  name: string; // course name
  school: string;
  courseCode?: string;
  link?: string;
  source: string;
  courseContent: string;
  courseAssignments?: string[];
}

const Courses = () => {
  const coursesItems: Course[] = [
    {
      name: "HTML / CSS",
      school: "IT-Högskolan",
      link: "https://glittering-douhua-2a73da.netlify.app/",
      source: "https://glittering-douhua-2a73da.netlify.app/",
      courseContent: `
          Create static websites using HTML5 and CSS3, publish them, and develop modern, responsive web solutions that 
          adhere to web standards and WCAG accessibility requirements (level AA) while being SEO optimized. The course 
          aims to teach effective website structuring, styling, and publishing.
          By the end, students will understand HTML and CSS syntax, modern layout techniques, responsive design, SEO, and 
          basic digital accessibility. They will be able to create, publish, and optimize websites independently, ensuring 
          they meet client requirements and accessibility standards.`,
      courseAssignments: [
        `Build a website for an imaginary or real organization/customer. The website should be responsive and work for 
          all widths between 360px (mobile) and 980px (desktop). The project must fulfill demands for AA accessibility 
          grade. The page must include navbar, content, and footer. The project is to be published on the web through FTP 
          or similar.
          At least one media query. The whole website must be responsive.
          Both class and id selectors must be used in a meaningful way with logical names.
          Either Flexbox or Grid Layout must be used to solve a suitable layout issue.
          You should also contribute to the site's accessibility by using at least one HTML5 structural element to help users with screen readers navigate between different parts of the page. (ARIA does not need to be used.)

You should use the title and description tags, as well as heading elements (h1-h6), appropriately according to Google's SEO recommendations to help Google and users understand the content, and according to accessibility recommendations such as writing descriptive page titles and creating headings with h-elements.

All code should be free from errors in W3C's validation services for HTML and CSS. It's sufficient to validate the entire HTML and CSS at once, even though it can be helpful to validate after each new "section" or "segment". You must indicate and confirm with a comment that both HTML and CSS are validated before submission.

Example in CSS: /All code validated/ at the bottom of the page

Each person should report their contribution to the project in a presentation, which you will then present to each other in different groups in breakout rooms, and submit their work.

Additional Requirements for Higher Grade (VG)
You should write semantic HTML code, using the most appropriate HTML element for all content. For example, it's not acceptable to use a div element to enclose a text paragraph, or to use h4 for a main heading. Additionally, br elements should generally not be used to create spacing (it's very rare that br is the right element for this; instead, use margin or padding properties). Semantic code contributes to SEO, accessibility, and code that is easier to maintain and develop further.

You should write uniformly formatted code. Indentation should be consistent, e.g., not two spaces in one CSS block and four in another. This applies to both HTML and CSS. See the module “Some Coding Conventions” for an example of how to configure automatic code formatting. Uniform formatting contributes to code that is easier to maintain and develop further.

You should use at least one selector beyond type selector, class selector, and ID selector, to solve a problem where the selector is appropriate.

You should name classes, ID values, and files in a descriptive way. For example, it's not acceptable to create a class named “my-class” or an image named “my-image”, as these names do not communicate enough about what the object represents. Descriptive names contribute to code that is easier to maintain and develop further.

You should include at least one responsive image that fits within the existing space. At least two image variants should be specified for the image in question. The image files should look the same but differ in resolution. Optimized images contribute to SEO. The GIMP can be used to create different size variants of an image. Additionally, the img element should generally have a descriptive alt attribute as part of the accessibility requirement to describe all non-text content with text, and according to Google's SEO recommendations for image optimization.
          `
      ]
    },
    {
      name: "Webbteknik 1",
      school: "Linnéuniversitetet",
      courseCode: "1ME321",
      link: "https://lnu.se/kurs/webbteknik-1/distans-deltid-vt/",
      source: "https://www.tjejerkodar.se",
      courseContent: `
        In this course, you will gain a good understanding of how the web works and knowledge of the technology for 
        developing websites. The topics covered include the internet, information architecture for websites, layout and 
        style, and the basics of web design. You will learn to create websites using HTML and CSS. Whether you are a 
        beginner or have previously worked with web design, this course will teach you both the technology behind the 
        web and the methods for developing websites.`,
      courseAssignments: []
    },
    {
      name: "Native JavaScript",
      school: "IT-Högskolan",
      link: "https://cheery-queijadas-91eae3.netlify.app/",
      source: "https://cheery-queijadas-91eae3.netlify.app/",
      courseContent: `
        This course teaches JavaScript programming, focusing on creating and developing dynamic and interactive web pages 
        that communicate with web services. Students will learn both theoretical and practical aspects of frontend 
        programming with JavaScript, including how it runs in the browser, key web concepts like DOM, asynchronous calls, 
        HTTP, and JSON, and how to program interactive interfaces.
        By the end, students will be able to use JavaScript to add or modify web page functionality, create dynamic and 
        interactive sites using JavaScript with HTML and CSS, solve complex frontend problems, and handle asynchronous 
        web requests. They will be equipped to independently develop browser applications and enhance dynamic websites 
        with JavaScript, HTML, and CSS.`,
      courseAssignments: [
        `Combine JavaScript wih HTML and CSS to build a dynamic website. Data from at least one web service/API must 
          be consumed through JavaScript and displayed. It is not allowed to use APIs that are used as examples in the 
          course material. Create a layout to present the information fetched from the web service. Optional to use a 
          CSS framework. The website must include at least two web sites in separate HTML files. Links are to be created 
          for the user to navigate between the pages. At least two of the HTML files must read and run JavaScript code. 
          At least 10 values from the API must be displayed.
          Build functionality to display, add, edit and remove cities from the Cities service. The page should be run by 
          at least one web form. Use Web Storage to save and "remember" and at later page reload use at least one value. 
          Use Chart.js or some other data visualization library to visualize data collected from a web service. All code 
          must be uniformly formatted.`
      ]
    },
    {
      name: "Webbteknik 2",
      school: "Linnéuniversitetet",
      courseCode: "1ME322",
      link: "https://lnu.se/kurs/webbteknik-2/distans-deltid-vt/",
      source: "https://www.tjejerkodar.se",
      courseContent: `
        This course builds on the content covered in the Web Technology 1 course. We will now focus on interactivity and 
        the construction of dynamic websites using client-side technology. The programming language JavaScript is 
        introduced and used in combination with HTML and CSS. Programming is covered from the basics, so no prior 
        programming knowledge is required.`,
      courseAssignments: []
    },
    {
      name: "UX / UI Design",
      school: "IT-Högskolan",
      link: "/uxui",
      source: "https://www.expressen.se",
      courseContent: "",
      courseAssignments: []
    },
    {
      name: "Agile Development",
      school: "IT-Högskolan",
      link: "/agile",
      source: "https://www.iths.se",
      courseContent: "",
    },
    {
      name: "Backend JS",
      school: "IT-Högskolan",
      link: "/databases",
      source: "https://www.bing.se",
      courseContent: "",
      courseAssignments: []
    },
    {
      name: "React Native",
      school: "IT-Högskolan",
      link: "/reactnative",
      source: "https://www.mitti.se",
      courseContent: "",
      courseAssignments: []
    },
    {
      name: "Testing / TypeScript",
      school: "IT-Högskolan",
      link: "/testing_typescript",
      source: "https://www.tjejerkodar.se",
      courseContent: "",
      courseAssignments: []
    },
    {
      name: "Java",
      school: "IT-Högskolan",
      link: "/wt1",
      source: "https://www.tjejerkodar.se",
      courseContent: "",
      courseAssignments: []
    },
    {
      name: "Java - ObjektOrienterad Programmering",
      school: "IT-Högskolan",
      link: "/wt1",
      source: "https://www.tjejerkodar.se",
      courseContent: "",
      courseAssignments: []
    },
    {
      name: "Flutter",
      school: "IT-Högskolan",
      link: "/flutter",
      source: "https://www.tjejerkodar.se",
      courseContent: "",
      courseAssignments: []
    },
  ];


  const [isOpen, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const openDialog = (item: Course) => {
    setSelectedCourse(item);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      {/*<div className={styles.previewContainer}>*/}
      {/*  <div className={styles.preview}>*/}
      {/*    <iframe*/}
      {/*        title="previewIFrame"*/}
      {/*        className={styles.previewIFrame}*/}
      {/*        src={coursesItems[0].source}*/}
      {/*    ></iframe>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div>{isOpen ? 'open' : 'not open'}</div>*/}
      {/*<div>{selectedCourse?.name || null}</div>*/}

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
                  <ReadMore onClick={() => openDialog(item)}></ReadMore>
                </div>
                {/*<button onClick={() => openDialog(item)}>Open Dialog</button>*/}

                {/**/}
              </li>
            );
          })}
        </ul>
      </div>
      <Modal isOpen={isOpen} onClose={() => closeDialog()} children={selectedCourse}
             className={isOpen ? styles.modalVisible : styles.modalHidden}></Modal>

      {/*<dialog id="dialog">*/}
      {/*  <button onClick={() => closeDialog()}>Close</button>*/}
      {/*  {selectedCourse.name}*/}
      {/*</dialog>*/}
    </div>
  );
};

export default Courses;
