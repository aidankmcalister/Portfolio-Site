import "./App.css";
import NavbarComponent from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="bg-custom-primary-blue-dark">
      <NavbarComponent />
      <Landing />
    </div>
  );
}

export default App;
