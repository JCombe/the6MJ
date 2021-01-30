import React from 'react'
import "./Body.css"
import dotedBG from "../Assets/dotedBG.jpg"
import InfoComp from './InfoComp';
import FeaturesComp from './FeaturesComp';


function Body() {
    document.body.style.backgroundImage = "url('dotedBG.jpg')";

    return (
        <div className="body">
            <InfoComp />
            <FeaturesComp />
        </div>
    )
}

export default Body
