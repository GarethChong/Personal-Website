import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import tokyoImg from '../assets/tokyo.png'

function Photo({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[8vw] top-[25%] right-[20%] cursor-pointer group"
            style={{ transform: 'rotate(340deg)' }}
            onClick={() => onClick(getClickOrigin("photo", myRef, onClick))}
        >
            <div className="bg-white p-2 pb-6 shadow-lg inline-block desk-object">
                <img src={tokyoImg} className="w-[full]" />
            </div>
        </div>
    )
}

export default Photo