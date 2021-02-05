import React, { useState } from 'react'
import "./NavComp.css"
import Button from '@material-ui/core/Button';
import Modal from './Modal.js';




function NavComp() {

    const [opened, setOpened] = useState(false)


    return (
        <div className="navComp">

            <a href="/" className="title">Productive Diary</a>
            <div className="navCompRight">
                <a href="#featuresCompID" className="navBtn">Merkmale</a>
                <Button onClick={() => setOpened(true)}>Anmelden</Button>
                {
                    opened &&
                    <Modal onClose={() => setOpened(false)} />
                }
            </div>
        </div>
    )
}

export default NavComp
