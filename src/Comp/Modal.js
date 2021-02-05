import React, { useState } from 'react'
import "./Modal.css"
import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import emailjs from "emailjs-com"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Modal({ onClose }) {

    const [sent, setSent] = useState(false)

    function sendEmail(e) {

        setSent(true)

        e.preventDefault();

        emailjs.sendForm("service_0r4yfhj", 'template_uhgm5b2', e.target, 'user_9gvbbFqpDfJrVaQ1IhQl7')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <button className="modalBackgroundArea" onClick={() => onClose()}></button>
            <div className="popUpContainer">

                <div className="modalContent">

                    <CancelIcon onClick={() => onClose()} className="cancelModalBtn" />
                    {sent ? <div className="modalCheckedTitle">
                        <CheckCircleIcon className="checkIcon" style={{ fontSize: 70 }} />
                        <div className="modalTitle">Registrierung erfolgreich!</div>
                    </div>
                        :
                        <div className="modalTitle">Werde sofort benachrichtig!</div>
                    }


                    <form className="form" onSubmit={sendEmail}>
                        <input className="inputModal" placeholder="Name" type="text" name="name" />
                        <input className="inputModal" placeholder="E-mail-Adresse" type="email" name="email" />
                        <textarea className="inputModalNachricht" placeholder="Nachricht" name="message" />

                        <br />
                        <Button type="submit">Abschicken</Button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Modal
