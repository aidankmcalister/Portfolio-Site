import Hamburger from "./Hamburger";

export const NavItem = ({ to, children }) => {
  return (
    <li>
      <a
        href={to}
        className="cursor-pointer px-4 py-2 bg-custom-secondary-blue-dark rounded-full text-custom-primary-gold-dark hover:text-custom-secondary-gold-dark transition-all">
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
              <NavItem to="#home">Home</NavItem>
              <NavItem to="#portfolio">Portfolio</NavItem>
              <NavItem to="#about">About</NavItem>
              <NavItem to="#contact">Contact</NavItem>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
