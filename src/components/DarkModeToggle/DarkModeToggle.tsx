import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContent } from "../../context/ThemeContent";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContent);

  return (
    <div
      className={styles.container}
      onClick={() => {
        toggle();
      }}
    >
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀</div>
      <div className={styles.ball} style={mode == "light" ? { left: "2px" } : { right: "2px" }}></div>
    </div>
  );
};

export default DarkModeToggle;
