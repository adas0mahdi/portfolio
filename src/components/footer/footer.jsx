import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { BsStackOverflow } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all
        <a href="#home">
          <h2>
            <BsMouse />- scroll up
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/adas0mahdi/">
          <FaInstagram className="social" />
        </a>
        <a href="https://twitter.com/mho_y">
          <ImTwitter className="social" />
        </a>
        <a href="https://stackoverflow.com/users/22055936/adas0mahdi">
          <BsStackOverflow className="social" />
        </a>
        <a href="https://github.com/adas0mahdi">
          <ImGithub className="social" />
        </a>
      </div>
    </div>
  );
}

export default Footer;