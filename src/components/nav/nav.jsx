import "./nav.css"
import {ImHome} from "react-icons/im";
import {ImUserTie} from "react-icons/im";
import {ImBug} from "react-icons/im";
import {ImBubbles} from "react-icons/im";
import {BsArrowDownCircle} from "react-icons/bs";

function Navbar() {
    return (
      <div className="navigation">
        <a href="#home">
          <ImHome className="icon active-nav" />
        </a>
        <a href="#about">
          <ImUserTie className="icon" />
        </a>
        <a href="#members">
          <ImBug className="icon" />
        </a>
        <a href="#contact">
          <ImBubbles className="icon" />
        </a>
        <a href="#footer">
          <BsArrowDownCircle className="icon" />
        </a>
      </div>
    );
  }

export default Navbar;