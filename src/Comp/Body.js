import React from 'react'
import "./Body.css"
import InfoComp from './InfoComp';
import FeaturesComp from './FeaturesComp';


function Body() {

    return (
        <div className="body" >
            <InfoComp />
            <FeaturesComp />
        </div>
    )
}

export default Body
