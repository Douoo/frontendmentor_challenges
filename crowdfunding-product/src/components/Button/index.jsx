import styles from "./index.module.css";

function Button({
  children,
  className,
  backgroundColor,
  onClick,
  foregroundColor,
}) {
  const customProperty = {
    "--btn-clr": backgroundColor,
    "--text-clr": foregroundColor,
  };
  return (
    <button
      onClick={onClick}
      style={customProperty}
      className={`${styles.btn} ${styles["btn-primary"]} ${className}`}
    >
      {children}
    </button>
  );
}

export function IconButton({
  backgroundColor,
  className,
  text,
  icon: Icon,
  foregroundColor,
  onClick,
}) {
  return (
    <button onClick={onClick} className={`${styles["icon-btn"]} ${className}`}>
      <Icon
        foregroundColor={foregroundColor}
        backgroundColor={backgroundColor}
      />
      <span className={styles["icon-text"]}>{text}</span>
    </button>
  );
}

export default Button;
