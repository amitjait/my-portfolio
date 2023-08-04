import React from "react";


const Project = ({proj}) =>{


    return (
        <div className="project">
            <div className="content">
                <div id="title">{proj.title}</div>
                <a href={proj.host} target="_blank" rel="noreferrer"><i class="fa-solid fa-globe"></i></a>
                <a href={proj.git} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
            </div>
            <a href={proj.host} target="_blank" rel="noreferrer"><img src={proj.img} alt="im"/></a>
            <p id="desc">{proj.desc}</p>
        </div>
    )
}

export default Project;