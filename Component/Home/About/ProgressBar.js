import React from "react";

const ProgressBar = () => {
  return (
    <div>
      <div className="Skills-bar">
        <div className="bar">
          <div className="info">
            <span>JavaScript(ES6)</span>
          </div>
          <div className="Progress-line image">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>CSS4</span>
          </div>
          <div className="Progress-line brand">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>HTML5</span>
          </div>
          <div className="Progress-line uiUx">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>React.js</span>
          </div>
          <div className="Progress-line web">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Node.js</span>
          </div>
          <div className="Progress-line seo">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Nest.Js &amp; Next.Js</span>
          </div>
          <div className="Progress-line content">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
