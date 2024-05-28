// import { useState } from "react";
import styles from "./Menu.module.css";

export const Menu = () => {
  // const [activeItemId, setActiveItemId] = useState(null);

  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    // {
    //   id: 2,
    //   name: "Work",
    //   link: "/work",
    // },
    {
      id: 3,
      name: "Courses",
      link: "/courses",
    },
    {
      id: 4,
      name: "About",
      link: "/about",
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <ul className={styles.menu}>

    {/* //   <li key="0" className={styles.menuListItem}>
    //     <a
    //       href="/"
    //       className={1 === activeItemId ? styles.activeLink : styles.menuLink}
    //       onClick={setActiveItemId(1)}
    //     >
    //       Home
    //     </a>
    //   </li>
    //   <li key="1" className={styles.menuListItem}>
    //     <a
    //       href="/courses"
    //       className={2 === activeItemId ? styles.activeLink : styles.menuLink}
    //       onClick={setActiveItemId(2)}
    //     >
    //       Courses
    //     </a>
    //   </li>
    //   <li key="2" className={styles.menuListItem}>
    //     <a
    //       href="/contact"
    //       className={3 === activeItemId ? styles.activeLink : styles.menuLink}
    //       onClick={setActiveItemId(3)}
    //     >
    //       Courses
    //     </a>
    //   </li> */}

      {menuItems.map((item, index) => {
        return (
          <li key={index} className={styles.menuListItem}>
            <a
              href={item.link}
              className={
                // item.id === activeItemId ? styles.activeLink :
                styles.menuLink
              }
              // onClick={setActiveItemId(item.id)}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
