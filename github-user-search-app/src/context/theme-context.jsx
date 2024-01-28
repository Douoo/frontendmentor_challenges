import React, { useState } from "react";
import { useEffect } from "react";

const ThemeContext = React.createContext({
  themeMode: null,
  toggleThemeMode: () => {},
});

export function ThemeContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState(null);
  const themePreference = "theme-preference";

  const themeChangeHandler = (themeMode) => {
    localStorage.setItem(themePreference, themeMode);
    setThemeMode(themeMode);
    document.firstElementChild.setAttribute("data-theme", themeMode);
  };

  useEffect(() => {
    //Get the system theme initially
    const systemThemePref = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    //Get if there is any saved theme before hand
    const savedTheme = localStorage.getItem(themePreference);

    if (savedTheme) {
      setThemeMode(savedTheme);
    }
    document.firstElementChild.setAttribute(
      "data-theme",
      savedTheme || systemThemePref
    );
  }, []);

  return (
    <ThemeContext.Provider
      value={{ themeMode: themeMode, toggleThemeMode: themeChangeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
