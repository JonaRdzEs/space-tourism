import { useEffect, useState, type ReactNode } from "react";

export interface LinkProps {
  className?: string;
  activeClassName: string;
  leftText?: string;
  text: ReactNode;
  path: string;
}

export function NavLink({ leftText, path, text, className = "", activeClassName = "" }: LinkProps) {
  const [isActive, setActive] = useState(false);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    window.location.pathname === path ? setActive(true) : setActive(false);
    if(path === "/technology/titan") {
      setVisible(false)
    }
  }, [path]);

  return isVisible && (
    <a href={path} className={`flex justify-start items-center gap-3 ${className} ${isActive ? activeClassName : ""}`}>
      {leftText && <span className="font-sans font-bold">{leftText}</span>}
      <span className="font-sans uppercase">{text}</span>
    </a>
  );
}
