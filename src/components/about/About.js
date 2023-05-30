import React from "react";
import "./About.css";
import marufImg from "../../images/maruf2.png";
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
          Currently pursuing undergrad in IT from VIIT, Pune.
        </p>
        <p className="desc">
          I have explored the domains of Game Dev, Web Dev, App Dev and Linux. I am well versed in the ins and outs of React, HTML, CSS and backends like firebase and flask. 
          I have done a decent bit of development in Python for making different desktop apps. 
          Game Dev is something I really enjoy doing. I have experience with tools like Godot, Unity, Raylib and Blender. 
          Linux has been my daily driver for about a year now and I love to distro hop and explore the different features of the operating system. 
        </p>
      </div>
    </div>
  );
}

export default About;
