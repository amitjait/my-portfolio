import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import './style.css';


const App = ()=>{

    return (
        <div className="app">
            <Navbar />
            <Banner />
        </div>
    )
}


export default App;