import classes from "./Scaffold.module.css";
export default function Scaffold({ children, className }) {
  return <main className={className}>{children}</main>;
}
