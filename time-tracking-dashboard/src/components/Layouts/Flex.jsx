import classes from "./Flex.module.css";

function Flex({ children, className }) {
  return <div className={`${classes["d-flex"]} ${className}`}>{children}</div>;
}

export default Flex;
