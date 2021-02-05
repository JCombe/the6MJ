import React, { useState } from 'react'
import "./Modal.css"
import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import emailjs from "emailjs-com"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Modal({ onClose }) {

    const [sent, setSent] = useState(false)

    function sendEmail(e) {

        console.log("Email was sent!")

        document.getElementById("sendBtn").setAttribute("disabled", "disabled")

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


                    <form name="myForm" className="form" onSubmit={sendEmail} >
                        <input id="nameId" className="inputModal" placeholder="Name" type="text" name="name" required />
                        <input id="emailId" className="inputModal" placeholder="E-mail-Adresse" type="email" name="email" required />
                        <textarea id="messageId" className="inputModalNachricht" placeholder="Nachricht (optional)" name="message" />

                        <br />
                        <Button id="sendBtn" type="submit">Abschicken</Button>
                    </form>
                </div>
            </div>
        </div >

    )
}

export default Modal
