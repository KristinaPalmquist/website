import styles from "./MenuOverlay.module.css";

export const MenuOverlay = ({navbarOpen, setNavbarOpen}
) => {

  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Work",
      link: "/work",
    },
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
    <nav className={navbarOpen ? styles.navbarOpen : styles.navbar}>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => {
          return (
            <li key={index} className={styles.menuListItem}>
              <a
                href={item.link}
                className={styles.menuLink}
                onClick={() => setNavbarOpen(false)}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}