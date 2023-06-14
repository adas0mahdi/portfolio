import "./contact.css";
import { ImGithub } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>contact me</h1>
      <div className="contact-links">
        <a href="https://github.com/yourusername" className="contact github">
          < ImGithub className="icon" />
          <h2>
            Github <span>Creative Ambition</span>
          </h2>
        </a>
        <a href="https://www.facebook.com/yourusername" className="contact Facebook">
          <ImFacebook2 className="icon" />
          <h2>
            Facebook<span>Creative Ambition</span>
          </h2>
        </a>
        <a href="https://twitter.com/yourusername" className="contact Twitter">
          <ImTwitter className="icon" />
          <h2>
            Twitter<span>Creative Ambition</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;