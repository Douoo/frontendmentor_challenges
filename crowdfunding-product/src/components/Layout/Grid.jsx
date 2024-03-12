import styles from "./Layout.module.css";

export default function Grid({ children }) {
  return <div className={styles["d-grid"]}>{children}</div>;
}
