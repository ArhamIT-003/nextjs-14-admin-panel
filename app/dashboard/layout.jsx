import React from "react";
import Sidebar from "../ui/dashboard/Sidebar/Sidebar";
import Navbar from "../ui/dashboard/Navbar/Navbar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;