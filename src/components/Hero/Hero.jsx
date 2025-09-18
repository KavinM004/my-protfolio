import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kavin M</h1>
        <p className={styles.description}>
          "I am a full-stack developer proficient in React and Node.js. Feel
          free to reach out to discuss opportunities or collaborations!"
        </p>
        {/* It opens in new tab/}
        {/* <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=karthickkavin004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Contact Me
        </a> */}
        
         {/* it open in pop up */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=karthickkavin004@gmail.com",
              "emailWindow",
              "width=600,height=600,left=200,top=200"
            );
          }}
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
