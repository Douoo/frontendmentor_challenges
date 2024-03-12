import { useContext } from "react";

import moonIcon from "../../assets/icon-moon.svg";
import Row from "../Layouts/Row";
import sunIcon from "../../assets/icon-sun.svg";
import style from "./Header.module.css";
import ThemeContext from "../../context/theme-context";

function ThemeToggleButton() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={style["toggle-btn"]} onClick={themeContext.toggleDarkMode}>
      <Row>
        {themeContext.darkMode ? (
          <>
            <label htmlFor="theme">LIGHT</label>
            <img src={sunIcon} alt="icon-light" />
          </>
        ) : (
          <>
            <label htmlFor="theme">DARK</label>
            <img src={moonIcon} alt="icon-moon" />
          </>
        )}
      </Row>
    </div>
  );
}

export default ThemeToggleButton;
