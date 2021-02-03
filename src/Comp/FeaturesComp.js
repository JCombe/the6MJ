import React from 'react'
import "./FeaturesComp.css"
import InApp from "./InApp.js"
import { featureObjOne, featureObjTwo, featureObjThree } from "../Assets/Data.js"

function FeaturesComp() {
    return (
        <section id="featuresCompID" className="features">
            <InApp {...featureObjOne} />
            <InApp {...featureObjTwo} />
            <InApp {...featureObjThree} />

        </section>
    )
}

export default FeaturesComp
