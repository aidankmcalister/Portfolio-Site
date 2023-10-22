import Hamburger from "./Hamburger";
import { ReactComponent as HomeIcon } from "../app/assets/imgs/home.svg";
import { ReactComponent as FolderIcon } from "../app/assets/imgs/folder.svg";
import { ReactComponent as SendIcon } from "../app/assets/imgs/send.svg";
import { ReactComponent as Logo } from "../app/assets/imgs/no-background-logo.svg";

const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      className="w-6 h-6 mr-1.5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};

const NavItem = ({ to, children }) => {
  const linkClasses =
    "flex cursor-pointer px-4 py-2 bg-custom-secondary-blue-dark rounded-full text-custom-primary-gold-dark transition-all";
  const hoverClasses =
    "hover:text-custom-secondary-gold-dark hover:-translate-y-1 hover:duration-300 hover:ease-in-out shadow-md hover:shadow-custom-light-blue-shadow svg-fill";

  return (
    <li className="flex items-center">
      <a href={to} className={`${linkClasses} ${hoverClasses}`}>
        {children}
      </a>
    </li>
  );
};

const NavbarComponent = () => {
  return (
    <div>
      <div className="md:hidden">
        <Hamburger />
      </div>
      <header className="bg-custom-primary-blue-dark text-white p-2">
        <div className="flex w-full justify-between items-center">
          <div className="order-2 md:order-1 ml-auto md:ml-0">
            <Logo width={"12rem"} height={"3rem"} style={{ lineHeight: 0 }} />
          </div>
          <div className="order-1 md:order-2">
            <ul className="hidden md:flex space-x-4 cursor-pointer">
              <NavItem to="#home">
                <HomeIcon className="mr-2 " width={"1.4rem"} />
                Home
              </NavItem>
              <NavItem to="#portfolio">
                <FolderIcon className="mr-2 " width={"1.4rem"} />
                Portfolio
              </NavItem>
              <NavItem to="#about">
                <UserIcon />
                About
              </NavItem>
              <NavItem to="#contact">
                <SendIcon className="mr-2 " width={"1.4rem"} />
                Contact
              </NavItem>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
