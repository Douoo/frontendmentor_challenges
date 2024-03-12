function IconBookmark({ width, height }) {
  return (
    <svg
      width={width ?? "56"}
      height={height ?? "56"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <circle fill="#707070" cx="28" cy="28" r="28" />
        <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}

function IconClose({ className, color, onClick }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="15"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
        fill={color ?? "#000"}
        fillRule="evenodd"
      />
    </svg>
  );
}

function IconCloseFlat() {
  return (
    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
        <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
      </g>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
        <path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24" />
      </g>
    </svg>
  );
}

function IconHamburger({ foregroundColor, backgroundColor }) {
  return (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <g fill={foregroundColor ?? "#FFF"} fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );
}

export { IconBookmark, IconClose, IconCloseFlat, IconCheck, IconHamburger };
