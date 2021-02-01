import React from 'react'
import "./NavComp.css"
import Button from '@material-ui/core/Button';


function NavComp() {


    return (
        <div className="navComp">
            <div className="title">The Six Minute Journal</div>
            <div className="navCompRight">
                <div className="navBtn">Features</div>
                <Button>Get App</Button>
            </div>
        </div>
    )
}

export default NavComp
