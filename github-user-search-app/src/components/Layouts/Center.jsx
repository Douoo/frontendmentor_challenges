import style from "./Center.module.css";
function Center({ children }) {
  return <div className={style.center}>{children}</div>;
}

export default Center;
