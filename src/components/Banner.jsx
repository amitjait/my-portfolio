import React from "react";
import photo from "../images/img.png"

const Banner = ()=>{
    return (
        <div className="banner">
            <div className="in-banner">
                <div className="content">
                    <div className="name-sec">
                        My name is Amit
                    </div>
                    <div className="intro">
                        I am a web developer with more than 1 year of experience
                    </div>
                    <div className="more">
                        <button id="more">
                            More
                        </button>
                    </div>

                    <h2>Technologies</h2>
                    <div className="tech">
                        <div className="java">java</div>
                        <div className="js">JavaScript</div>
                        <div className="react">React</div>
                        <div className="html">HTML</div>
                        <div className="css">CSS</div>
                        <div className="spring">Spring Boot</div>
                    </div>
                    
                </div>
                <div className="image">
                    <div className="in-image">
                        <img src={photo} alt="my phot" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner;