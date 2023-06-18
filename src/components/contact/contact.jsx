import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>contact me</h1>
      <div className="contact-links">
        <a href="mailto:adas0mahdi.com" className="contact OutlineMail">
          < AiOutlineMail className="icon" />
          <h2>
          OutlineMail<span>Creative Ambition</span>
          </h2>
        </a>
        <a href="https://www.facebook.com/adas.mahdi.atef/" className="contact Facebook">
          <ImFacebook2 className="icon" />
          <h2>
            Facebook<span>Creative Ambition</span>
          </h2>
        </a>
        <a href="https://wa.me/639953532613?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20service.%20Can%C2%A0you%C2%A0help%C2%A0me?" className="contact Whatsapp">
          <RiWhatsappFill className="icon" />
          <h2>
             Whatsapp<span>Creative Ambition</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;