import { useEffect, useState, type ReactNode } from "react";

export interface LinkProps {
  leftText: string;
  text: ReactNode;
  path: string;
}

export function NavLink({ leftText, path, text }: LinkProps) {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    window.location.pathname === path ? setActive(true) : setActive(false);
  }, [path]);

  return (
    <a href={path} className={`flex justify-start items-center gap-3 ${isActive ? "border-r-4" : ""}`}>
      <span className="font-sans font-bold">{leftText}</span>
      <span className="font-sans">{text}</span>
    </a>
  );
}
