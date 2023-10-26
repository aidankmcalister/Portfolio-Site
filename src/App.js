import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Landing from "./pages/Landing";
import PortfolioPage from "./pages/PortfolioProjectPage";
import { ParticlesBackground } from "./features/particleBackground";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden relative min-h-screen flex ">
        <div className="grow flex flex-col">
          <div>
            <ParticlesBackground />
          </div>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="project/:projectId" element={<PortfolioPage />} />
          </Routes>
          <div className="grow flex items-end">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
