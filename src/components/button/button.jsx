import "./button.css";

function Buttons() {
    return (
        <div className="container button-container">
            <a href="#about" className="btn pri">
                Learn more
            </a>
            <a href="https://drive.google.com/file/d/1of01Io0QBtuUYCQY5ZyU3BhLMYNF4iBG/view?usp=sharing" className="btn btm med">
                CV
            </a>
            <a href="#contact" className="btn sec">
                Get In Touch
            </a>
        </div>
    );
}

export default Buttons;