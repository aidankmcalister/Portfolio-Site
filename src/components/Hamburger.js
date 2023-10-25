import React from "react";
import { ReactComponent as HomeIcon } from "../app/assets/imgs/home.svg";
import { ReactComponent as UserIcon } from "../app/assets/imgs/user.svg";
import { ReactComponent as FolderIcon } from "../app/assets/imgs/folder.svg";
import { ReactComponent as SendIcon } from "../app/assets/imgs/send.svg";

export const NavItem = ({ to, children }) => {
  return (
    <li className="inline-block mt-4">
      <a
        href={to}
        className="cursor-pointer flex items-center hover:translate-x-3 transition-all hover:opacity-75">
        {children}
      </a>
    </li>
  );
};

const HamburgerComponent = () => {
  return (
    <div>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <ul className="cursor-pointer text-2xl">
            <NavItem to="#home">
              <HomeIcon className="mr-1" width={"1.4rem"} />
              Home
            </NavItem>
            <NavItem to="#portfolio">
              <FolderIcon className="mr-1" width={"1.4rem"} />
              Portfolio
            </NavItem>
            <NavItem to="#about">
              <UserIcon className="mr-1" width={"1.4rem"} />
              About
            </NavItem>
            <NavItem to="#contact">
              <SendIcon className="mr-1" width={"1.4rem"} />
              Contact
            </NavItem>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default HamburgerComponent;
