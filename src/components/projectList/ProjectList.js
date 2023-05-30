import React from 'react'
import "./ProjectList.css"
import Project from "../project/Project"
import {projects} from '../../data.js'

function ProjectList() {
  return (
    <div className='pl' id="projectList">
        <div className="plTexts">
            <h1 className="plTitle">My Projects</h1>
                <p className="plDesc">
                    Here I will showcase all the projects that I have wokred on
                </p>
        </div>
        <div className="plList">
        {projects.map((item)=>(
          <Project key={item.id} img={item.img} url={item.link} name={item.name} skills={item.skills}/>
        ))}
        </div>
    </div>
  )
}

export default ProjectList