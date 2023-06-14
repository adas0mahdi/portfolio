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
                <AioutlieUser className="icone"/>
            </a>
            <a href="#member">
                <TiGroupOutLine className="icone"/>
            </a>
            <a href="#contact">
                <BimessageRoundedDots className="icone"/>
            </a>
            <a href="#footer">
                <BsArrowDownCircle className="icone"/>
            </a>
        </div>
    )
}


 let Icons = document.querySelectorAll('.navigation .icon');
 Icons.forEach((icon) => {
    icon.addEventListener("click" , () => {
        changeactive();
      icon.classList.add("active-nav");
    });
 });

 function changeactive() {
    Icons.forEach(icon => {
        icon.classList.remove("active-nav")
    })
 }

 export default Navbar;