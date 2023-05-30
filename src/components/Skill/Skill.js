import React from "react";
import "./Skill.css";

function Skill(props) {
  return (
    <div className="s">
      <div className="left">
        <div className="sTitle">
          {props.name}
        </div>
        {/* <img
          src={props.imgUrl}
          alt=""
          className="sImage"
        /> */}
        
      </div>
      <div className="vl"></div>
      <div className="right">
        <div className="sSkills">
          <ul>
              {props.skills.map((item)=>(
                <li key={item} class='sText'>{item}</li>
              ))}
            {/* <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;
