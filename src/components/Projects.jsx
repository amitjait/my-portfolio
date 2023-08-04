import React from "react";
import Project from "./Project";
import projects from "../data/projectsData";

const Projects = () =>{

    return(
        <div className="projects">
            <h1><i class="fa-solid fa-window-maximize"></i>PROJECTS</h1>
            <div className="project-main">
            {
                projects.map((proj) => <Project proj={proj} />)
            }
            </div>
        </div>
    )
}

export default Projects;