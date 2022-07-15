import React from "react";
import "./Intro.css";
import myimg from "../../images/myimg.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <div className="i-bg"></div>
          <h2 className="intro-intro">Hello, My name is</h2>
          <h1 className="intro-name">OKPE NNANNA.</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI Designer</div>
              <div className="intro-title-item">Freelancer</div>
              <div className="intro-title-item">Learner</div>
            </div>
          </div>
          <div className="intro-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptas laudantium fuga deserunt ipsam sit. Expedita molestiae
            soluta veniam? Dolorem magnam aspernatur molestias illo eos beatae
            quaerat voluptas, deleniti, ducimus voluptatum!
          </div>
        </div>
      </div>

      <div className="intro-right">
        <img src={myimg} alt="" className="myimage" />
      </div>
    </div>
  );
};

export default Intro;
