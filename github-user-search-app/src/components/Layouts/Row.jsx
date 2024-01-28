import style from "./Row.module.css";

function Row({ children, className, crossAxisAlignment, mainAxisAlignment }) {
  return (
    <div
      style={{
        "--main-axis-aln": mainAxisAlignment,
        "--cross-axis-aln": crossAxisAlignment,
      }}
      className={`${style.row} ${className}`}
    >
      {children}
    </div>
  );
}

export default Row;
