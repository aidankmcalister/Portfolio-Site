import React from "react";
// import { ReactComponent as HomeIcon } from "../app/assets/imgs/home.svg";/
import { ReactComponent as UserIcon } from "../app/assets/imgs/user.svg";
import { ReactComponent as FolderIcon } from "../app/assets/imgs/folder.svg";
import { ReactComponent as SendIcon } from "../app/assets/imgs/send.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const NavItem = ({ to, children }) => {
  return (
    <li className="mt-4">
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        className="bg-slate-700 shadow-md shadow-custom-light-blue-shadow font-sometype rounded-lg p-1 cursor-pointer flex items-center hover:translate-x-3 transition-all hover:opacity-75">
        {children}
      </ScrollLink>
    </li>
  );
};

const HamburgerComponent = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar text-slate-300 bg-slate-800 ">
        <nav>
          <ul className="cursor-pointer text-2xl">
            <NavItem to="projects">
              <FolderIcon className="mr-2" width={"1.4rem"} />
              PROJECTS
            </NavItem>
            <NavItem to="about">
              <UserIcon className="mr-2" width={"1.4rem"} />
              ABOUT
            </NavItem>
            <NavItem to="contact">
              <SendIcon className="mr-2" width={"1.4rem"} />
              CONTACT
            </NavItem>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default HamburgerComponent;
