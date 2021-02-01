import React from 'react'
import "./FeaturesComp.css"
import InApp from "./InApp.js"
import { featureObjOne, featureObjTwo, featureObjThree } from "../Assets/Data.js"

function FeaturesComp() {
    return (
        <div className="features">
            <InApp {...featureObjOne} />
            <InApp {...featureObjTwo} />
            <InApp {...featureObjThree} />

        </div>
    )
}

export default FeaturesComp
