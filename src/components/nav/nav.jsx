import React, { useState } from "react";
import "./nav.css";
import { ImHome } from "react-icons/im";
import { ImUserTie } from "react-icons/im";
import { ImBug } from "react-icons/im";
import { ImBubbles } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  const [activeNav, setActiveNav] = useState("home");

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <div className="navigation">
      <a href="#home" onClick={() => handleNavClick("home")}>
        <ImHome className={`icon ${activeNav === "home" ? "active-nav" : ""}`} />
      </a>
      <a href="#about" onClick={() => handleNavClick("about")}>
        <ImUserTie className={`icon ${activeNav === "about" ? "active-nav" : ""}`} />
      </a>
      <a href="#projects" onClick={() => handleNavClick("projects")}>
        <ImBug className={`icon ${activeNav === "projects" ? "active-nav" : ""}`} />
      </a>
      <a href="#contact" onClick={() => handleNavClick("contact")}>
        <ImBubbles className={`icon ${activeNav === "contact" ? "active-nav" : ""}`} />
      </a>
      <a href="#footer" onClick={() => handleNavClick("footer")}>
        <BsArrowDownCircle className={`icon ${activeNav === "footer" ? "active-nav" : ""}`} />
      </a>
    </div>
  );
}

export default Navbar;











// import "./nav.css"
// import {ImHome} from "react-icons/im";
// import {ImUserTie} from "react-icons/im";
// import {ImBug} from "react-icons/im";
// import {ImBubbles} from "react-icons/im";
// import {BsArrowDownCircle} from "react-icons/bs";

// function Navbar() {
//     return (
//       <div className="navigation">
//         <a href="#home">
//           <ImHome className="icon active-nav" />
//         </a>
//         <a href="#about">
//           <ImUserTie className="icon" />
//         </a>
//         <a href="#projects">
//           <ImBug className="icon" />
//         </a>
//         <a href="#contact">
//           <ImBubbles className="icon" />
//         </a>
//         <a href="#footer">
//           <BsArrowDownCircle className="icon" />
//         </a>
//       </div>
//     );
//   }

// export default Navbar;