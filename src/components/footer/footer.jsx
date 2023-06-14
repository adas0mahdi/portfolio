import "./footer.css"
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/bs";
import { TiSocailDribbbl } from "react-icons/bs";
import { TiSocailYoutube } from "react-icons/bs";
import {AiFillGithub} from "react-icons/bs";


function Footer() {
    <div id="footer" className="container footer-container">
        <h1> That's all
            <a href="#home">
                <h2>
                    <BsMouse/>- scroll up
                </h2>
            </a>
        </h1>
        <div className="social-links">

            <a href="#Home">
                <BsInstagram className="social"/>
            </a>
            <a href="#Home">
                <FaFacebookF className="social"/>
            </a>
            <a href="#Home">
                <TiSocailDribbbl className="social"/>
            </a>
            <a href="#Home">
                <TiSocailYoutube className="social"/>
            </a>
            <a href="#Home">
                <AiFillGithub className="social"/>
            </a>

        </div>
    </div>
}


export default Footer;