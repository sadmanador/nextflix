import React from "react";
import useScrollLimit from "../../hooks/useScrollLimit";
import styles from "../../styles/Browse.module.scss";
import type { ChildrenProvider } from "@/types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const SCROLL_LIMIT: number = 80;

const Layout = ({ children }: ChildrenProvider) => {
  const isScrolled: boolean = useScrollLimit(SCROLL_LIMIT);
  return (
    <div className={styles.container}>
      <Navbar isScrolled={isScrolled} />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;