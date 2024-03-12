import React, { useState } from "react";
import { useEffect } from "react";

const ThemeContext = React.createContext({
  darkMode: null,
  toggleDarkMode: () => {},
});

export function ThemeContextProvider({ children }) {
  //Get the system theme initially
  const systemThemePref = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState(null);
  const themePreference = "theme-preference";

  const themeChangeHandler = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    //Get if there is any saved theme before hand
    const savedTheme = localStorage.getItem(themePreference);

    if (savedTheme) {
      setDarkMode(savedTheme);
    } else {
      setDarkMode(systemThemePref);
    }
    document.firstElementChild.setAttribute(
      "theme-dark",
      savedTheme || systemThemePref
    );
  }, []);

  useEffect(() => {
    document.firstElementChild.setAttribute("theme-dark", darkMode);
    localStorage.setItem(themePreference, darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: themeChangeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
