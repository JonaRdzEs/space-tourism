import { useState, useEffect } from "react";

interface Props {
  path: string;
  ariaLabel: string;
  text: string;
}

export function CurrentTechMarker({ path, ariaLabel, text }: Props) {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    window.location.pathname === path ? setActive(true) : setActive(false);
  }, [path]);

  return (
    <a
      href={path}
      className={`flex justify-center items-center font-serif w-10 border-[1px] h-10  rounded-full hover:border-opacity-100 md:w-[60px] md:h-[60px] md:text-2xl ${isActive ? "bg-white text-[#0B0D17] border-none hover:text-[#0B0D17]" : "border-white border-opacity-25 hover:text-white"}`}
      aria-label={ariaLabel}
    >
      {text}
    </a>
  );
}
