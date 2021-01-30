import React from 'react'
import "./NavComp.css"
import dotedBG from "../Assets/dotedBG.jpg"
import Button from '@material-ui/core/Button';


function NavComp() {
    return (
        <div className="navComp">
            <h1>The Six Minute Journal</h1>
            <div className="navCompRight">
                <h2>Features</h2>
                <Button>Get App</Button>
            </div>
        </div>
    )
}

export default NavComp
