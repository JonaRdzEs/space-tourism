import { NavLink } from "./nav/NavLink";

interface Links {
  text: string,
  path: string,
}

interface Props {
  links: Links[]
}

const validDestinations = ["moon", "mars", "europa", "titan"];

export function DesktopMenu({ links }: Props) {
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
    <ul className="hidden md:flex md:items-stretch md:gap-9 md:grow h-24 md:backdrop-blur-xl md:py-10 md:px-12 xl:max-w-[830px]">
    {links.map((link, index) => (
      <li className="h-full" key={link.path}>
        <NavLink    
          {...link}
          path={getPath(link.path)}
          leftText={`0${index}`}
          className="flex items-center h-full"
          activeClassName="border-b-4"
        />
      </li>
    ))}
  </ul>
  );
};