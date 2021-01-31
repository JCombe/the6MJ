import React from 'react'
import "./InApp.css"
import journalCalendar from "../Assets/JournalCalendar.png"
import journalDay from "../Assets/JournalDay.png"
import journalNight from "../Assets/JournalNight.png"

function InApp() {
    return (

        < div className="imgs" >

            <div className="imgBox" style={{ backgroundImage: `url(${journalNight})` }}>

            </div>
            <div className="imgBox" style={{ backgroundImage: `url(${journalDay})` }}>
            </div>
            <div className="imgBox" style={{ backgroundImage: `url(${journalCalendar})` }}>
            </div>
        </div >
    )
}

export default InApp
