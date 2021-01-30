import React from 'react'
import "./InfoComp.css"
import Button from '@material-ui/core/Button';
import AppleIcon from '@material-ui/icons/Apple';

function InfoComp() {
    return (
        <div className="info">
            <div className="infoTop">
                <h1>The Six Minute Journal.
                Your journal for boosting your daily joy and productivity.
            </h1>
            </div>
            <div className="infoBot">
                <h3>Scientifically proven concept and tested by many users.</h3>

                <Button>
                    <AppleIcon className="appleIcon" />
                    Download from the App Store
                </Button>
                <h6>Free app with extra benefits for premium users.</h6>
            </div>
        </div >
    )
}

export default InfoComp
