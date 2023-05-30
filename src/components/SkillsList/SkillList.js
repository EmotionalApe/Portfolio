import React from "react";
import "./SkillList.css";
import Skill from "../Skill/Skill";

function SkillList() {
  return (
    <div className="sl" id="skillsList">
      <div className="slTexts">
        <h1 className="slTitle">My Skills</h1>
        <p className="slDesc">Here I will showcase all the skills I have</p>
      </div>
      <div className="slList">
        <Skill
          name="Web Dev"
          imgUrl="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
          skills={["HTML", "CSS", "React"]}
        />
        <Skill
          name="Game Dev"
          imgUrl="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
          skills={["Unity", "Godot", "C#", "Blender", "Raylib", "Pygame"]}
        />
      </div>
    </div>
  );
}
export default SkillList;
