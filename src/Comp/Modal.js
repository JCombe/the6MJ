import React from 'react'
import "./Modal.css"
import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

function Modal({ onClose }) {
    return (
        <div>
            <button className="modalBackgroundArea" onClick={() => onClose()}></button>
            <div className="popUpContainer">

                <div className="modalContent">
                    <CancelIcon onClick={() => onClose()} className="cancelModalBtn" />
                    <h2 className="modalTitle">Werde sofort benachrichtig!</h2>
                    <form className="form">
                        <input className="inputModal" placeholder="hier eingeben" />
                        <br />
                        <Button>Abschicken</Button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Modal
