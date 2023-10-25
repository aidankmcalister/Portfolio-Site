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
        className="bg-slate-700 shadow-md shadow-custom-light-blue-shadow font-sometype rounded-lg p-1 cursor-pointer flex items-center hover:translate-x-3 transition-all hover:opacity-75">
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
      <aside className="sidebar text-slate-300 bg-slate-800 ">
        <nav>
          <ul className="cursor-pointer text-2xl">
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
        </nav>
      </aside>
    </div>
  );
};

export default HamburgerComponent;
