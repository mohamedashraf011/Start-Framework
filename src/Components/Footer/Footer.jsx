import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerTop}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className={styles.footerColumn}>
            <h3>AROUND THE WEB</h3>
            <div className={styles.socialIcons}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaGlobe /></a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              <br /> Route
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
