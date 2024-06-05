import React from "react";
function Card({
  children,
  className,
  style,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}>) {
  return (
    <div
      style={style}
      className={`${className} bg-neutral-200 clr-neutral-900 `}
    >
      {children}
    </div>
  );
}

export default Card;
