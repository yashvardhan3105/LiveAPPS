import React from "react";
import "./Navbar.css";
// import LogoMob from "../Assets/LogoPNG/LogoMob.png";

export const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="navbar__container">
      <div className="navbar__menu">
        <div className="navbar__menu_texts">
          <div className="navbar__menu_anim">
            <h5 className="navbar__logo">
              Live <span>Apps</span>
            </h5>
            <p className="navbar__p" onClick={() => scrollToSection("Project")}>
              Project
            </p>
            <p
              className="navbar__p"
              onClick={() => scrollToSection("technology")}
            >
              Technologies
            </p>
            <p
              className="navbar__p"
              onClick={() => scrollToSection("Contributors")}
            >
              Contributors
            </p>
            <p
              className="navbar__p"
              id="contactNav"
              onClick={() => scrollToSection("Contact")}
            >
              Contact Us
            </p>
            <button className="btnLogin-popup">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};
