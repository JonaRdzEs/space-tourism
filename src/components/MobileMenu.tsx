import { useState } from "react";
import { NavLink, type LinkProps } from "./nav/NavLink";
import { motion } from "framer-motion";
import { ToggleMenuButton } from "./nav/ToggleMenuButton";

const links: LinkProps[] = [
  {
    leftText: "00",
    text: "HOME",
    path: "/",
  },
  {
    leftText: "01",
    text: "DESTINATION",
    path: "/destinations/moon",
  },
  {
    leftText: "02",
    text: "CREW",
    path: "/3",
  },
  {
    leftText: "03",
    text: "TECHNOLOGY",
    path: "/4",
  },
];

const sidebar = {
  open: {
    clipPath: "circle(141.2% at 100% 0)",
    transition: {
      type: "spring",
    },
  },
  closed: {
    clipPath: "circle(0% at 100% 0)",
    transition: {
      type: "spring",
    },
  },
};

export function MobileMenu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onToggleMenu = () => setOpen((prev) => !prev);

  return (
    <motion.div
      className="relative md:hidden"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <ToggleMenuButton
        onClick={onToggleMenu}
        aria-hidden={isOpen}
        aria-controls="mobile-menu"
      />
      <motion.ul
        id="mobile-menu"
        className="fixed top-0 right-0 bottom-0 w-full z-10 max-w-64 pt-28 pl-8 backdrop-blur-xl flex flex-col gap-8"
        variants={sidebar}
      >
        {links.map((link) => (
          <NavLink key={link.path} {...link} />
        ))}
      </motion.ul>
    </motion.div>
  );
}
