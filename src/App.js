import React from "react";
import NavbarComponent from "./components/Navbar";
import Landing from "./pages/Landing";
import { ParticlesBackground } from "./features/particleBackground";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
        <ParticlesBackground />
      </div>
      <NavbarComponent />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
