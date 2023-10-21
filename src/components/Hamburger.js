import React from "react";

const Hamburger = () => {
  return (
    <div className="color-green-akm">
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <div>Home</div>
          <div>Portfolio</div>
          <div>About</div>
          <div>Contact</div>
        </nav>
      </aside>
    </div>
  );
};

export default Hamburger;
