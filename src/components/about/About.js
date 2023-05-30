import React from "react";
import "./About.css";
import marufImg from "../../images/maruf.png";
// import marufImg1 from '../../images/maruf1.png'

function About() {
  return (
    <div className="a" id="about">
      <div className="aLeft">
        <div className="aCard">
          <img src={marufImg} alt="marufImage " className="aImage" />
        </div>
      </div>
      <div className="aRight">
        <h1 className="aTitle">About Me</h1>
        <p className="aSub">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, maxime?
        </p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad sint
          perferendis, suscipit obcaecati non aliquid, modi dolores provident
          veritatis numquam aperiam dolorum iusto sapiente, labore eveniet
          eligendi eaque voluptate unde maiores fugiat? Culpa harum inventore
          soluta quod, libero sapiente totam, facere magnam eligendi sint
          praesentium? Nobis ullam blanditiis magni.
        </p>
      </div>
    </div>
  );
}

export default About;
