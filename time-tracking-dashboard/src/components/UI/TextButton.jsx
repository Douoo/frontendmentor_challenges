import styles from "./TextButton.module.css";

function TextButton({ children, onPressed, className }) {
  function onTap(event) {
    onPressed(event);
  }
  return (
    <button className={`${styles["text-btn"]} ${className}`} onClick={onTap}>
      {children}
    </button>
  );
}

export default TextButton;
