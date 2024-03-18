import React from "react";
import styles from "./style.module.scss";

export const HomePage = ({ children }) => {
  return (
    <>
      <div >
        <main className={styles.page}>
          <div className={styles.containerHome}>{children}</div>
        </main>
      </div>
    </>
  );
};
