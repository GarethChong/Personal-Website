import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import switchImg from '../assets/switch.png'

function Switch({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[23vw] top-[63%] right-[7%] cursor-pointer group"
            style={{ transform: 'rotate(20deg)' }}
            onClick={() => onClick(getClickOrigin("switch", myRef, onClick))}
        >
            <img src={switchImg} className="w-full desk-object" />
        </div>
    )
}

export default Switch