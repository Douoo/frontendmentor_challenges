"use client";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(global.window?.__theme || "light");

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);
  return (
    <div className="flex gap-4 justify-between items-center">
      <span>Dark Mode</span>
      <label className={styles.switch}>
        <input type="checkbox" onChange={toggleTheme} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}

export default ThemeToggle;
