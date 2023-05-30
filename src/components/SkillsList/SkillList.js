import React from "react";
import "./SkillList.css";
import Skill from "../Skill/Skill";

function SkillList() {
  return (
    <div className="sl" id="skillsList">
      <div className="slTexts">
        <h1 className="slTitle">My Skills</h1>
        {/* <p className="slDesc"> Idhar skills dalne hai para</p> */}
      </div>
      <div className="slList">
        <Skill
          name="Web Dev"
          skills={["HTML", "CSS", "React", "Bootstrap", "Flask", "Firebase"]}
        />
        <Skill
          name="Game Dev"
          skills={["Unity", "Godot", "C#", "Blender", "Raylib", "Pygame"]}
        />
        <Skill
          name="App Dev"
          skills={["Python"]}
        />

        <Skill
          name="Linux"
          skills={["Bash", ]}
        />
      </div>
    </div>
  );
}
export default SkillList;
