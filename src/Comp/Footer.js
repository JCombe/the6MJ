import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (

        <div className="footer">
            <h5>Designt and entworfen von Julian Biscombe.</h5>
            <Link to="/Impressum">
                Impressum
                {/* <h5>Impressum</h5> */}
            </Link>
        </div>

    )
}

export default Footer
