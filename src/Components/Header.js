import React from "react";

function Header() {
  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="header">
      <div className="name">Sungjin Park</div>
      <div className="menu">
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("projects-div")}>Projects</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </div>
  );
}

export default Header;
