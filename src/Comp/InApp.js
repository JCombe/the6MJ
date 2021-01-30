import React from 'react'
import "./InApp.css"
import journalCalendar from "../Assets/journalCalendar.png"
import journalDay from "../Assets/journalDay.png"
import journalNight from "../Assets/journalNight.png"

function InApp() {
    return (

        < div className="inApp" >
            <img className="imgLeft" src={journalNight} width={195} height={422} alt="error" />
            <img className="imgMid" src={journalDay} width={260} height={563} alt="error" />
            <img className="imgRight" src={journalCalendar} width={195} height={422} alt="error" />
        </div >
    )
}

export default InApp
