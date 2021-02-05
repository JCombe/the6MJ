import React from 'react'
import "./Impressum.css"
import wave4 from "./Assets/wave4.png"

function Impressum() {
    return (
        <div className="impressumComp">
            <div className="impressumContent">
                <h1>Impressum</h1>

                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>Julian Biscombe<br />
                Pfarrkirchener Str. 1<br />
                84307 Eggenfelden</p>

                <h2>Kontakt</h2>
                <p>Telefon: 017681556125<br />
                E-Mail: biscombe.j@gmail.com</p>

                <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
            </div>
            <div className="wave" style={{ backgroundImage: `url(${wave4})` }} ></div>

        </div>
    )
}

export default Impressum
