import style from "./Button.module.css";

function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={`${style.btn} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
