import Row from "../Layouts/Row";
import ThemeContext from "../../context/theme-context";
import { useContext } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import "../../App.css";

function Header() {
  const themeContext = useContext(ThemeContext);
  function themeChangeHandler() {
    const theme = themeContext.themeMode;
    if (theme == "dark") {
      themeContext.toggleThemeMode("light");
    } else {
      themeContext.toggleThemeMode("dark");
    }
  }

  return (
    <Row className="mb-32">
      <h1 className="clr-neutral">devfinder</h1>
      <ThemeToggleButton
        onThemeSwitch={themeChangeHandler}
        themeMode={themeContext.themeMode}
      />
    </Row>
  );
}

export default Header;
