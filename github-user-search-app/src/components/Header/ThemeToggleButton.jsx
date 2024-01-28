import Row from "../Layouts/Row";
import moonIcon from "../../assets/icon-moon.svg";
import sunIcon from "../../assets/icon-sun.svg";
import style from "./Header.module.css";

function ThemeToggleButton({ onThemeSwitch, themeMode }) {
  return (
    <div className={style["toggle-btn"]} onClick={onThemeSwitch}>
      {themeMode == "dark" ? (
        <Row>
          <label htmlFor="theme">LIGHT</label>
          <img src={sunIcon} alt="icon-light" />
        </Row>
      ) : (
        <Row>
          <label htmlFor="theme">DARK</label>
          <img src={moonIcon} alt="icon-moon" />
        </Row>
      )}
    </div>
  );
}

export default ThemeToggleButton;
