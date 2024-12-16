import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Introduction } from "./Components/Introduction/Introduction";
import { OpenSourcePro } from "./Components/OpenSourcePro/OpenSourcePro.jsx";
import { TechUsed } from "./Components/TechUsed/TechUsed.jsx";
import { Contributors } from "./Components/Contributors/Contributors.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Introduction />
        <OpenSourcePro />
        <TechUsed />
        <Contributors />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
