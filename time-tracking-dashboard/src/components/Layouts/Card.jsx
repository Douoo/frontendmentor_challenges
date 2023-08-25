import "./Card.css";
function Card({ children, className, styles }) {
  return (
    <div style={styles} className={`round-border ${className}`}>
      {children}
    </div>
  );
}

export default Card;
