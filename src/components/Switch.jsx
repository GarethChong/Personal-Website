import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import switchImg from '../assets/switch2.png'

function Switch({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[26.5vw] top-[60%] right-[5%] cursor-pointer group"
            style={{ transform: 'rotate(20deg)' }}
            onClick={() => onClick(getClickOrigin("switch", myRef, onClick))}
        >
            <img src={switchImg} className="w-full desk-object shadow-strong" />
        </div>
    )
}

export default Switch