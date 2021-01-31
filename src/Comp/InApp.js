import React from 'react'
import "./InApp.css"


function InApp({ img, feature, imgStart }) {
    return (

        < div className="inApp" style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
            <div className="imgBox" style={{ backgroundImage: `url(${img})` }}>
            </div>
            <p>{feature}</p>
        </div >
    )
}

export default InApp
