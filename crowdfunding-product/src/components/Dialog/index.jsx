import { createPortal } from "react-dom";
import styles from "./Index.module.css";
import { IconClose } from "../Icons";

function Dialog({ children, onOverlayClick, title, content, onClose }) {
  const dialogContent = (
    <>
      <div className={styles.dialog}>
       
        {children}
      </div>
      ;
      <Overlay onOverlayClick={onOverlayClick} />
    </>
  );
  return createPortal(dialogContent, document.getElementById("overlay"));
}

function Overlay({ onOverlayClick }) {
  return createPortal(
    <div className={styles.overlay} onClick={onOverlayClick}></div>,
    document.getElementById("overlay")
  );
}

export default Dialog;
