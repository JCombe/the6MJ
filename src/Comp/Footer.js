import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import wave4 from "../Assets/wave4.png"


function Footer() {
    return (

        <div className="footer">
            <div className="text">Designt and entworfen von Julian Biscombe.</div>
            <Link to="/Impressum" className="link">
                Impressum
                {/* <h5>Impressum</h5> */}
            </Link>

        </div>

    )
}

export default Footer
