import Hamburger from "./Hamburger";
import { ReactComponent as HomeIcon } from "../app/assets/imgs/home.svg";
import { ReactComponent as UserIcon } from "../app/assets/imgs/user.svg";
import { ReactComponent as FolderIcon } from "../app/assets/imgs/folder.svg";
import { ReactComponent as SendIcon } from "../app/assets/imgs/send.svg";

export const NavItem = ({ to, children }) => {
  const linkClasses =
    "flex cursor-pointer px-4 py-2 bg-custom-secondary-blue-dark rounded-full text-custom-primary-gold-dark";
  const hoverClasses =
    "hover:text-custom-secondary-gold-dark transition-all hover:animate-bounce";

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
      <header className="bg-custom-primary-blue-dark text-white p-4">
        <div className="flex w-full justify-between items-center">
          <div className="order-2 md:order-1 ml-auto md:ml-0">
            <h1 className="text-2xl font-semibold">
              {" "}
              <span className="text-custom-secondary-gold-dark">&lt; </span>
              <span className="text-custom-primary-gold-dark">
                Aidan McAlister&nbsp;
              </span>
              <span>
                <span className="text-custom-secondary-gold-light">
                  /&nbsp;
                </span>
                <span className="text-custom-secondary-gold-dark">&gt;</span>
              </span>
            </h1>
          </div>
          <div className="order-1 md:order-2">
            <ul className="hidden md:flex space-x-4 cursor-pointer">
              <NavItem to="#home">
                <HomeIcon className="mr-2" width={"1.4rem"} />
                Home
              </NavItem>
              <NavItem to="#portfolio">
                <FolderIcon className="mr-2" width={"1.4rem"} />
                Portfolio
              </NavItem>
              <NavItem to="#about">
                <UserIcon className="mr-2" width={"1.4rem"} />
                About
              </NavItem>
              <NavItem to="#contact">
                <SendIcon className="mr-2" width={"1.4rem"} />
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
