import { Button } from '@material-ui/core'
import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from "react-spring"
import CancelIcon from '@material-ui/icons/Cancel';
import "./EmailPopUp.css"

function EmailPopUp({ showPopUp, setShowPopUp }) {

    const popUpRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showPopUp ? 1 : 0,
        transform: showPopUp ? `translateY(0%)` : `translateY(-100%)`
    });

    const closePopUp = e => {
        if (popUpRef.current === e.target) {
            setShowPopUp(false);
        }
    };

    return (
        <div className="popUpComp">
            {showPopUp ? (
                <div className="background" onClick={closePopUp} ref={popUpRef}>

                    <animated.div style={animation}>

                        <div showPopUp={showPopUp}>
                            <div className="popUpContent">
                                Type Email:
                            </div>
                            <Button>
                                Abschicken
                            </Button>
                            <CancelIcon onClick={() => this.setShowPopUp(prev => !prev)} />
                        </div>
                    </animated.div>

                </div>
            ) : null}
        </div>
    )
}

export default EmailPopUp
