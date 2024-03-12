import styles from "./Layout.module.css";

function Flex({
  axisDirection,
  children,
  className,
  crossAxisAlignment,
  gap,
  mainAxisAlignment,
}) {
  const customStyle = {
    "--axis-direction": axisDirection,
    "--flex-gap": gap,
    "--main-alignment": mainAxisAlignment,
    "--cross-alignment": crossAxisAlignment,
  };
  return (
    <div style={customStyle} className={`${styles["d-flex"]} ${className}`}>
      {children}
    </div>
  );
}

export default Flex;
