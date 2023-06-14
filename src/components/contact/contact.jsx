import React from "react";
import "./contact.css";
import { AiFillGithub } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/bs";

function Contact() {
  return (
    <div className="container contact-container">
      <h1>contact me</h1>
      <div className="contact-links">
        <a href="https://github.com/yourusername" className="contact github">
          <AiFillGithub className="icon" />
          <h2>
            Github <span>Creative Ambition</span>
          </h2>
        </a>
        <a href="https://www.facebook.com/yourusername" className="contact Facebook">
          <BsFacebook className="icon" />
          <h2>
            Facebook<span>Creative Ambition</span>
          </h2>
        </a>
        <a href="https://twitter.com/yourusername" className="contact Twitter">
          <AiFillTwitterCircle className="icon" />
          <h2>
            Twitter<span>Creative Ambition</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;