import React, { useState } from "react";
import ExpandableLine from "./menuIcon";

const NavbarComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">
          Aidan McAlister
        </a>
        <ExpandableLine />
        <ul
          className={`${isMenuOpen ? "block" : "hidden"} ld:flex lg:space-x-4`}>
          <li>
            {" "}
            <a href="/" className="text-white hover:text-blue-200">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarComponent;
