import "./nav.css"
import {AioutlineHome} from "react-icons/ai";
import {AioutlieUser} from "react-icons/ai";
import {TiGroupOutLine} from "react-icons/ti";
import {BimessageRoundedDots} from "react-icons/bi";
import {BsArrowDownCircle} from "react-icons/bs";

function Navbar() {
    return(
        <div className="navigation">
            <a href="#home">
                <AioutlineHome className="icone active-nav"/>
            </a>
            <a href="#about">
                <AioutlineHome className="icone"/>
            </a>
            <a href="#member">
                <AioutlineHome className="icone"/>
            </a>
            <a href="#contact">
                <AioutlineHome className="icone"/>
            </a>
            <a href="#footer">
                <AioutlineHome className="icone"/>
            </a>
        </div>
    )
}


 let Icons = document.querySelector('.navigation .icon');
 Icon.forEach((icon) => {
    icon.addEventListener("click" , () => {
        changeactive();
        icon.classList.add("active-nav");
    });
 });

 function changeactive() {
    Icon.forEach(icon => {
        icon.classList.remove("active-nav")
    })
 }

 export default Navbar;