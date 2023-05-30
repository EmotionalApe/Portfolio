import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="p">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.img} alt="" className="pImage" />
        
        <div className="middle">
          <div className="title">
            Skills Used
            <div className="skills">
              {props.skills.map((item)=>(
                <div key={item} className='text'>{item}</div>
              ))}
              {/* <div className="text">HTML</div>
              <div className="text">CSS</div>
              <div className="text">JS</div> */}
            </div>
          </div>
        </div>
        
      </a>
      <p className="pt">{props.name}</p>
    </div>
  );
}

export default Project;
