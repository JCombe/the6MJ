import React, { useState } from 'react'
import "./InfoComp.css"
import Button from '@material-ui/core/Button';
import AppleIcon from '@material-ui/icons/Apple';
import beach from "../Assets/beach.jpg"
import wave1 from "../Assets/wave1.png"
import EmailPopUp from './EmailPopUp';


function InfoComp() {

    const [showPopUp, setPopUp] = useState(false)

    const openPopUp = () => {
        setPopUp(prev => !prev);
    }

    return (
        <div className="info" style={{ backgroundImage: `url(${beach})` }}>
            <div className="infoTop">
                {/* <h1>Das Vier Minuten Tagebuch.</h1> */}
                <h1>Dein elektronische Tagebuch um deine Produktivität zu verbessern und Achtsamkeit zu üben.</h1>

                <h1>Überall und immer dabei.</h1>
            </div>
            <div className="infoBot">
                <h3>Getestet und erfolgreiche Konzepte.</h3>
                <Button onClick={openPopUp}>
                    <AppleIcon className="appleIcon" style={{ fontSize: 35 }} />
                    Zur Mitteilungsliste anmelden
                </Button>
                <EmailPopUp showPopUp={showPopUp}
                    setPopUp={setPopUp} />
                <h6>Gratis App mit besondere Leistungen für Premium-Kunden.</h6>
            </div>
            <div className="wave1" style={{ backgroundImage: `url(${wave1})` }} ></div>
        </div >
    )
}

export default InfoComp
