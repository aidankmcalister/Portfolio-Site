import React from "react";
import NavbarComponent from "./components/Navbar";
import Landing from "./pages/Landing";
import { ParticlesBackground } from "./features/particleBackground";

function App() {
  return (
    <>
      <div className="">
        <ParticlesBackground />
      </div>
      <NavbarComponent />
      <Landing />
    </>
  );
}

export default App;
