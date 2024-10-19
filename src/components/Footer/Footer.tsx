// components/Footer.tsx

import React from "react";
import styles from "../../styles/Footer.module.scss"; // Importing SASS styles
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <h3>Questions? Call 1-844-505-2993</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerLogo}>
        <Image src='/assets/logo.png' alt='' width={90} height={30} className={styles.nfLogo} />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
