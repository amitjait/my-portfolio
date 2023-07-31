import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import './style.css';


const App = ()=>{

    return (
        <div className="app">
            <div className="home">
                <Navbar />
                <Banner />
            </div>
        </div>
    )
}


export default App;