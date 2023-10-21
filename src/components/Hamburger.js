import React from "react";

export const NavItem = ({ to, children }) => {
  return (
    <li>
      <a href={to} className="cursor-pointer">
        {children}
      </a>
    </li>
  );
};

const Hamburger = () => {
  return (
    <div>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <ul className="cursor-pointer text-2xl">
            <NavItem to="#home">Home</NavItem>
            <NavItem to="#portfolio">Portfolio</NavItem>
            <NavItem to="#about">About</NavItem>
            <NavItem to="#contact">Contact</NavItem>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Hamburger;
