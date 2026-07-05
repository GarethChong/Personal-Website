import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import tennisBallImg from '../assets/tennisball.png'

function TennisBall({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[7vw] top-[27%] right-[5%] cursor-pointer group"
            style={{ transform: 'rotate(100deg)' }}
            onClick={() => onClick(getClickOrigin("tennisball", myRef, onClick))}
        >
            <img src={tennisBallImg} className="w-full desk-object" />
        </div>
    )
}

export default TennisBall