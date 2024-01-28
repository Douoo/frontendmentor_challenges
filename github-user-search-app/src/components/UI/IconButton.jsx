import style from "./Button.module.css";

function IconButton({ disabled, hyperlink, icon: IconComponent, textContent }) {
  const disabledProperty = {
    color: "var(--clr-disabled)",
    "--clr-icon": "var(--clr-disabled)",
  };

  return (
    <a
      style={disabled ? disabledProperty : {}}
      className={style.icon_btn}
      href={hyperlink}
    >
      <IconComponent />
      {`${textContent || `Not available`}`}
    </a>
  );
}

export default IconButton;
