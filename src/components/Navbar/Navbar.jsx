import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* CV Download Button */}
          <li>
            <a
<<<<<<< HEAD
              href="https://drive.google.com/file/d/1XC4ouhRHt25ngwxs2SquX1KlJKTJFq6k/view?usp=sharing"
=======
              href="https://drive.google.com/file/d/1XC4ouhRHt25ngwxs2SquX1KlJKTJFq6k/view?usp=drive_link"
>>>>>>> 93fdbb30aeb978795e837436b31b48c5991ac57e
              download
              className={styles.cvButton}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
