import JournalCalendar from "./JournalCalendar.png"
import JournalDay from "./JournalDay.png"
import JournalNight from "./JournalNight.png"
import wave1 from "../Assets/wave1.png"
import wave2 from "../Assets/wave2.png"
import wave3 from "../Assets/wave3.png"
import wave4 from "../Assets/wave4.png"



export const featureObjOne = {
    featureTitle:
        "Answer three question in the morning.",
    feature:
        "Three key questions can be answered. These question are asked in order to trigger greatfulness for big and small things, improve your focus and for reinsure your mind of your many strengths.",
    imgStart: "",
    img: JournalDay,
    header: "on",
    wave: wave2
}

export const featureObjTwo = {
    featureTitle:
        "Answer three question in before you go to bed.",
    feature:
        "These question are design to make you reflect on your day and all the experiences you had wheter good or bad. There is also a section for individual notes.",
    imgStart: "start",
    img: JournalNight,
    header: "",
    wave: wave3


}

export const featureObjThree = {
    featureTitle: "Review and reflect on old entries you have taken in the past.",
    feature:
        "Go back in time and see what feelings and thoughts went through you mind on a specific day.",
    imgStart: "",
    img: JournalCalendar,
    header: "",
    wave: wave4
}