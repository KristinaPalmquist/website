// import { useState } from "react";
// import styles from "./Menu.module.css";
//
// export const Menu = ({navbarOpen, setNavbarOpen}) => {
//   const [menuVisible, setMenuVisible] = useState(false);
//
//   const menuItems = [
//     {
//       id: 1,
//       name: "Home",
//       link: "/",
//     },
//     {
//       id: 2,
//       name: "Work",
//       link: "/work",
//     },
//     {
//       id: 3,
//       name: "Courses",
//       link: "/courses",
//     },
//     {
//       id: 4,
//       name: "About",
//       link: "/about",
//     },
//     {
//       id: 5,
//       name: "Contact",
//       link: "/contact",
//     },
//   ];
//   return (
//     <div className={styles.outerDiv}>
//
//
//
//       <ul className={styles.menu}>
//         {menuItems.map((item, index) => {
//           return (
//             <li key={index} className={styles.menuListItem}>
//               <a
//                 href={item.link}
//                 className={
//                   // item.id === activeItemId ? styles.activeLink :
//                   styles.menuLink
//                 }
//                 // onClick={setActiveItemId(item.id)}
//               >
//                 {item.name}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
