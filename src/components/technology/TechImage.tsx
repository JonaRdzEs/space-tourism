import { useEffect, useState } from "react";

interface Props {
  images: {
    portrait: string,
    landscape: string,
  },
  name: string,
}

export function TechImage({ images, name }: Props) {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.matchMedia("(min-width: 1440px)").matches)
  
  useEffect(() => {
    const matchMedia = window.matchMedia("(min-width: 1440px)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)
    };
    matchMedia.addEventListener("change", handleMediaChange);

    return () => {
      matchMedia.removeEventListener("change", handleMediaChange);
    }
  }, []);

  return (
    <img
      className="w-full h-auto mx-auto mt-8 mb-6 md:mt-16 md:mb-14 xl:order-3 xl:w-[515px] xl:mt-0 xl:self-baseline"
      src={isDesktop ? images.portrait : images.landscape}
      alt={name}
    />
  );
}