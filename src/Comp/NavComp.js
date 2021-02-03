import React from 'react'
import "./NavComp.css"
import Button from '@material-ui/core/Button';



function NavComp() {



    return (
        <div className="navComp">
            <div className="title">Das Vier Minuten Tagebuch</div>
            <div className="navCompRight">
                <a href="#featuresCompID" className="navBtn">Merkmale</a>
                <Button >Anmelden</Button>

            </div>
        </div>
    )
}

export default NavComp
