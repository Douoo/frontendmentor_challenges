import styles from "./Container.module.css";

function Container({ children, className }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}

export default Container;
