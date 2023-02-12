import React from 'react'
import pre from '../styles/preEvent.module.css'


const PreEvent = ({ days, hours, minutes, seconds }) => {
    return (
        <div className={pre.preEvent}>
            <div className={pre.preEventAnimate}>

                <h2 className={pre.heading}>
                    COMING SOON !
                </h2>

                <p className={pre.desc}>
                    All the best Participants
                </p>

                <div className={pre.wrapper}>
                    <div className={pre.segment}>
                        <span className={pre.time}>{days}</span>
                        <span className={pre.timeUnit}>DAYS</span>
                    </div>
                    <div className={pre.segment}>
                        <span className={pre.time}>{hours}</span>
                        <span className={pre.timeUnit}>HOURS</span>
                    </div>
                    <div className={pre.segment}>
                        <span className={pre.time}>{minutes}</span>
                        <span className={pre.timeUnit}>MINUTES</span>
                    </div>
                    <div className={pre.segment}>
                        <span className={pre.time}>{seconds}</span>
                        <span className={pre.timeUnit}>SECONDS</span>
                    </div>
                </div>
                <div className={pre.follow}>
                    <a aria-label="instagram link" href='https://www.instagram.com/nexus.pesu/' className={pre.followLink}>Follow us for updates now!</a>
                </div>
            </div>
        </div>
    )
}

export default PreEvent