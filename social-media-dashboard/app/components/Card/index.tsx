import React from "react";
function Card({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string | null }>) {
  return (
    <div
      className={`${className} bg-neutral-200 clr-neutral-900 `}
    >
      {children}
    </div>
  );
}

export default Card;
