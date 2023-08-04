import React from "react";
import photo from "../images/img1.png"

const Banner = ()=>{
    return (
        <div className="banner">
            <div className="in-banner">
                <div className="content">
                    <div className="name-sec">
                        My name is <span style={{color:"rgb(255, 110, 30)", fontWeight:"bold"}}>Amit</span>
                    </div>
                    <div className="intro">
                        I am a web developer with more than 1 year of experience
                    </div>
                    <div className="more">
                        <button id="more">
                            More
                        </button>
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