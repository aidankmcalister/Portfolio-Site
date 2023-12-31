// import { ReactComponent as HomeIcon } from "../app/assets/imgs/home.svg";
import { ReactComponent as FolderIcon } from "../app/assets/imgs/folder.svg";
import { ReactComponent as SendIcon } from "../app/assets/imgs/send.svg";
import { ReactComponent as AboutIcon } from "../app/assets/imgs/user.svg";
import HamburgerComponent from "./Hamburger";
import { Link as ScrollLink } from "react-scroll";

const NavbarComponent = () => {
  return (
    <div>
      <div className="md:hidden">
        <HamburgerComponent />
      </div>
      <header className="text-white p-2">
        <div className="flex w-full justify-end items-center">
          <div className="order-1 md:order-2">
            <ul className="animate-fade-left hidden md:flex space-x-4 cursor-pointer mt-2 mr-2">
              <NavItem to="projects">
                <FolderIcon className="mr-2 " width={"1.4rem"} />
                Projects
              </NavItem>
              <NavItem to="about">
                <AboutIcon className="mr-2" width={"1.4rem"} />
                About
              </NavItem>
              <NavItem to="contact">
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

const NavItem = ({ to, children }) => {
  const linkClasses =
    "origin-center flex border-slate-300 border-2 cursor-pointer opacity-75 px-4 py-2 rounded-full text-slate-300 transition-all";
  const hoverClasses =
    "hover:bg-slate-800 hover:text-slate-300 hover:border-slate-600 hover:scale-110 hover:duration-300 hover:ease-in-out shadow-md hover:shadow-custom-light-blue-shadow svg-fill fill-slate-300";

  return (
    <li className="flex items-center">
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        className={`${linkClasses} ${hoverClasses}`}>
        {children}
      </ScrollLink>
    </li>
  );
};

export default NavbarComponent;

// import { ReactComponent as HomeIcon } from "../app/assets/imgs/home.svg";
// import { ReactComponent as FolderIcon } from "../app/assets/imgs/folder.svg";
// import { ReactComponent as SendIcon } from "../app/assets/imgs/send.svg";
// import { ReactComponent as AboutIcon } from "../app/assets/imgs/user.svg";
// import HamburgerComponent from "./Hamburger";
// // import { ReactComponent as Logo } from "../app/assets/imgs/no-background-logo.svg";

// // const UserIcon = () => {
// //   return (
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       fill="none"
// //       viewBox="0 0 24 24"
// //       stroke-width="2"
// //       stroke="currentColor"
// //       className="w-6 h-6 mr-1.5">
// //       <path
// //         stroke-linecap="round"
// //         stroke-linejoin="round"
// //         d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
// //       />
// //     </svg>
// //   );
// // };

// const NavItem = ({ to, children }) => {
//   const linkClasses =
//     "origin-center flex border-slate-300 border-2 cursor-pointer opacity-75 px-4 py-2 bg-custom-secondary-blue-dark rounded-full text-slate-300 transition-all";
//   const hoverClasses =
//     "hover:text-slate-300 hover:border-slate-600 hover:scale-110 hover:duration-300 hover:ease-in-out shadow-md hover:shadow-custom-light-blue-shadow svg-fil fill-slate-300";

//   return (
//     <li className="flex items-center">
//       <a href={to} className={`${linkClasses} ${hoverClasses}`}>
//         {children}
//       </a>
//     </li>
//   );
// };

// const NavbarComponent = () => {
//   return (
//     <div>
//       <div className="md:hidden">
//         <HamburgerComponent />
//       </div>
//       <header className=" text-white p-2">
//         <div className="flex w-full justify-between items-center">
//           <div className="order-2 md:order-1 ml-auto md:ml-0"></div>
//           <div className="order-1 md:order-2">
//             <ul className="animate-fade-left hidden md:flex space-x-4 cursor-pointer">
//               {/* <NavItem to="#home">
//                 <HomeIcon className="mr-2 " width={"1.4rem"} />
//                 Home
//               </NavItem> */}
//               <NavItem to="#projects">
//                 <FolderIcon className="mr-2 " width={"1.4rem"} />
//                 Projects
//               </NavItem>
//               <NavItem to="#about">
//                 <AboutIcon className="mr-2" width={"1.4rem"} />
//                 About
//               </NavItem>
//               <NavItem to="#contact">
//                 <SendIcon className="mr-2 " width={"1.4rem"} />
//                 Contact
//               </NavItem>
//             </ul>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default NavbarComponent;
