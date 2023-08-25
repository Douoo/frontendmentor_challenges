import classes from "./Text.module.css";

function Text({ variant, children, style, fontWeight, className }) {
  const variantMapping = {
    h1: "h1",
    h2: "h2",
    p: "p",
    small: "small",
    span: "span",
  };

  const TextElement = variantMapping[variant] || p;
  const classList = `${classes[style] || ""} ${classes[fontWeight] || ""} ${
    className || ""
  }`;

  return <TextElement className={classList}>{children}</TextElement>;
}

export default Text;
