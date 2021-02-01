import React from 'react'
import "./InfoComp.css"
import Button from '@material-ui/core/Button';
import AppleIcon from '@material-ui/icons/Apple';
import beach from "../Assets/beach.jpg"
import wave1 from "../Assets/wave1.png"


function InfoComp() {
    return (
        <div className="info" style={{ backgroundImage: `url(${beach})` }}>
            <div className="infoTop">
                <h1>The Six Minute Journal.
                Your journal for boosting your daily joy and productivity.
            </h1>
            </div>
            <div className="infoBot">
                <h3>Scientifically proven concept and tested by many users.</h3>

                <Button>
                    <AppleIcon className="appleIcon" style={{ fontSize: 35 }} />
                    Download from the App Store
                </Button>
                <h6>Free app with extra benefits for premium users.</h6>
            </div>
            <div className="wave1" style={{ backgroundImage: `url(${wave1})` }} ></div>
        </div >
    )
}

export default InfoComp
