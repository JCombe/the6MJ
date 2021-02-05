import React, { useState } from 'react'
import "./InfoComp.css"
import Button from '@material-ui/core/Button';
import AppleIcon from '@material-ui/icons/Apple';
import beach from "../Assets/beach.jpg"
import wave1 from "../Assets/wave1.png"
import ReactDOM from "react-dom"
import Modal from "react-modal"
import EmailPopUp from './EmailPopUp';
import CancelIcon from '@material-ui/icons/Cancel';


// Make sure to bind modal to your appElement
Modal.setAppElement('#root');



function InfoComp() {


    const [modalIsOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false)
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
                <Button onClick={openModal}>
                    <AppleIcon className="appleIcon" style={{ fontSize: 35 }} />
                    Zur Mitteilungsliste anmelden
                </Button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    className="modalStyle"
                    contentLabel="Example Modal"
                >

                    <CancelIcon className="cancelBtn" onClick={closeModal} />
                    <h2 className="modalTitle">Werde sofort benachrichtig!</h2>
                    <form className="form">
                        <input />
                        <br />
                        <Button>Abschicken</Button>
                    </form>
                </Modal>
                <h6>Gratis App mit besondere Leistungen für Premium-Kunden.</h6>
            </div>
            <div className="wave1" style={{ backgroundImage: `url(${wave1})` }} ></div>
        </div >
    )
}

export default InfoComp
