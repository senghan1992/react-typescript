import { FC, ReactNode } from "react";

interface HeaderProps {
  image: { src: string; alt: string };
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
