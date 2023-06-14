import "./members"
import React from "react";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Project Name</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Adas</h1>
          <h3 className="position">Project Name</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          </h4>
          <a href="#project" className="contact-member">
            <span>Project</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Adas</h1>
          <h3 className="position">Project Name</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          </h4>
          <a href="#project" className="contact-member">
            <span>Project</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Adas</h1>
          <h3 className="position">Project Name</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          </h4>
          <a href="#project" className="contact-member">
            <span>Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;