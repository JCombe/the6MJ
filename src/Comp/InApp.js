import React from 'react'
import "./InApp.css"


function InApp({ img, featureTitle, feature, imgStart, header, wave }) {
    return (

        < div className="inApp" >
            <div className="inAppTop">
                <h1 style={{ display: header === "on" ? "flex" : "none", }}>Merkmale</h1>

            </div>
            <div className="inAppBot" style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                <div className="imgBox" style={{ backgroundImage: `url(${img})` }}>
                </div>
                <div className="text">
                    <p className="featureTitle">{featureTitle}</p>
                    <p className="feature">{feature}</p>
                </div>

            </div>
            <div className="wave" style={{ backgroundImage: `url(${wave})` }} ></div>
        </div >
    )
}

export default InApp
