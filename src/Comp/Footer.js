import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

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
