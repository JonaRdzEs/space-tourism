import { useState } from "react";
import { NavLink, type LinkProps } from "./nav/NavLink";
import { motion } from "framer-motion";
import { ToggleMenuButton } from "./nav/ToggleMenuButton";

const validDestinations = ["moon", "mars", "europa", "titan"];

interface Links {
  text: string,
  path: string,
}

interface Props {
  links: Links[]
}

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

export function MobileMenu({ links }: Props) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onToggleMenu = () => setOpen((prev) => !prev);
  const [destinationName] = window.location.pathname.split("/").reverse();

  const getPath = (path: string): string => {
    if (path === "/") {
      return path;
    } else {
      return validDestinations.includes(destinationName)
        ? `${path}/${destinationName}`
        : `${path}/moon`;
    }
  };

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
        {links.map((link, index) => (
          <li key={link.path}>
            <NavLink
              {...link}
              path={getPath(link.path)}
              leftText={`0${index}`}
              activeClassName="border-r-4"
            />
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
