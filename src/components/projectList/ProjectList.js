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
                    Projects I have developed over the years
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