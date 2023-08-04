import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ExtraMenuBar from "./components/ExtraMenuBar";

import './style.css';


const App = ()=>{

    let [click, setClick] = useState(false);

    return (
        <div className="app">
            <div className="home">
                <Navbar click={click} setClick={setClick}/>
                {click && <ExtraMenuBar />}
                <Banner />
                <Technologies />
                <Projects />
            </div>
        </div>
    )
}


export default App;