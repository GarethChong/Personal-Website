import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import resumeImg from '../assets/resume.png'

function Resume({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef} className="absolute w-[20vw] left-[7%] top-[28%] cursor-pointer group must-click" onClick={() => onClick(getClickOrigin("resume", myRef, onClick))}>
            <img src={resumeImg} className="w-full desk-object"/>
        </div>
    )
}

export default Resume



