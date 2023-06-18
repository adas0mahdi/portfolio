import React, { useRef } from 'react';
import './qualifications.css';

const Qualification = () => {
  const qualificationContainerRef = useRef(null);
  const mouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e) => {
    mouseDownRef.current = true;
    startXRef.current = e.pageX - qualificationContainerRef.current.offsetLeft;
    scrollLeftRef.current = qualificationContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!mouseDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - qualificationContainerRef.current.offsetLeft;
    const walk = x - startXRef.current;
    qualificationContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    mouseDownRef.current = false;
  };

  return (
    <div>
      <span className="quali-text">My Qualification</span>
      <div
        className="qualification-container"
        ref={qualificationContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        
        

      <div className="qualification">

        
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content mongoDB"></div>
          <h1>mongoDB</h1>
        </div>
        <div className="qualification">
          <div className="content canva"></div>
          <h1>canva</h1>
        </div>
        <div className="qualification">
          <div className="content postman"></div>
          <h1>postman</h1>
        </div>
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content tailwind"></div>
          <h1>tailwind</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="qualification">
          <div className="content wordpress"></div>
          <h1>wordpress</h1>
        </div>
        <div className="qualification">
          <div className="content php"></div>
          <h1>php</h1>
        </div>
        
      </div>
    </div>
  );
};

export default Qualification;





