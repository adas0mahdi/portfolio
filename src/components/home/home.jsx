
import React, { useEffect } from "react";
import "./home.css";
import img from "../props/image2.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  useEffect(() => {
    const toggle = document.querySelector(".main-img");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
    });
  }, []);

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Adas Mahdi Atef is my name. I recently received my degree from the
          University of Baguio. I installed fire alarm systems for a year before
          transitioning to freelancing web management and design. I'm unsure of
          where I'll be in five years or what my major career objective is, so I
          can't answer with absolute certainty. I don't have enough professional
          expertise to know for sure because the world is changing so quickly.
          But I'm confident that I can approach every assignment with a unique
          perspective and a remarkable strategy. I am always up for new
          challenges and helpful criticism. I am receptive to new ideas and
          quick to pick them up. I want to work as a team and use all of my
          abilities to create things that are exceptional in quality.
        </p>
      </h2>
      <Buttons />
    </div>
  );
}

export default Home;



















// import "./home.css";
// import img  from "../props/image2.jpg";
// import Buttons from "../button/button";
// import {BsMouse} from "react-icons/bs"

// function Home() {
//     return (
//         <div id="home" className="container home-container">
//           <div className="logo">
//             <div className="main-img">
//               <span className="circle"></span>
//               <span className="circle"></span>
//               <span className="circle"></span>
//               <span className="circle"></span>
//               <span className="circle"></span>
//               <span className="circle"></span>
//               <span className="circle"></span>
//               <span className="circle"></span>
//             </div>
    
//             <img src={img} alt="" />
//           </div>

//             <a href="#footer" className="scroll-down">
//                 <hr />
//                 <h5>scroll down</h5>
//                 <BsMouse className="scroll" />
//                 <hr />
//             </a>

//             <h2>
//                 <span>About Me</span> <br />
//                 <p>
//                 Adas Mahdi Atef is my name. I recently received my degree from the University of Baguio. I installed fire alarm systems for a year before transitioning to freelancing web management and design.
//                 I'm unsure of where I'll be in five years or what my major career objective is, so I can't answer with absolute certainty. I don't have enough professional expertise to know for sure because the world is changing so quickly. But I'm confident that I can approach every assignment with a unique perspective and a remarkable strategy. I am always up for new challenges and helpful criticism. I am receptive to new ideas and quick to pick them up. I want to work as a team and use all of my abilities to create things that are exceptional in quality.
//                 </p>
//             </h2> 
//             <Buttons />
//         </div>
//     );
// }

// const toggle = document.querySelector(".main-image");
// toggle.addEventListener("click", () => {
//     toggle.classList.toggle("active")
// });

// export default Home;