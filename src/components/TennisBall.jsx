import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import tennisBallImg from '../assets/tennisball.png'

function TennisBall({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[10vw] top-[27%] right-[5%] cursor-pointer group"
            style={{ transform: 'rotate(40deg)' }}
            onClick={() => onClick(getClickOrigin("tennisball", myRef, onClick))}
        >
            <img src={tennisBallImg} className="w-full desk-object shadow-strong" />
        </div>
    )
}

export default TennisBall