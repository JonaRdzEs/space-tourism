import { useState, useEffect } from "react";

interface Props {
  path: string,
  ariaLabel: string,
}

export function CurrentCrewMarker({ path, ariaLabel }: Props) {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    window.location.pathname === `${path}` ? setActive(true) : setActive(false);
  }, [path]);

  return (
    <a 
      href={path} 
      className={`block w-[10px] h-[10px] bg-white rounded-full hover:bg-opacity-50 xl:w-4 xl:h-4 ${isActive ? "bg-opacity-100" : "bg-opacity-[0.17]"}`} 
      aria-label={ariaLabel} 
    />
  );
}