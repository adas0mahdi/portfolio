import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImMail } from "react-icons/im";
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
        <a href="#Home">
          <FaInstagram className="social" />
        </a>
        <a href="#Home">
          <ImFacebook2 className="social" />
        </a>
        <a href="#Home">
          <ImTwitter className="social" />
        </a>
        <a href="#Home">
          <ImMail className="social" />
        </a>
        <a href="#Home">
          <ImGithub className="social" />
        </a>
      </div>
    </div>
  );
}

export default Footer;