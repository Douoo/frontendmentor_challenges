import Row from "../Layouts/Row";
import ThemeToggleButton from "./ThemeToggleButton";
import "../../App.css";

function Header() {
 

  return (
    <Row className="mb-32">
      <h1 className="clr-neutral">devfinder</h1>
      <ThemeToggleButton />
    </Row>
  );
}

export default Header;
