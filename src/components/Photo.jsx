import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import tokyoImg from '../assets/tokyo.png'

function Photo({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[16vw] top-[22%] right-[14%] cursor-pointer group"
            style={{ transform: 'rotate(340deg)' }}
            onClick={() => onClick(getClickOrigin("photo", myRef, onClick))}
        >
            <div className="bg-white p-3 pb-8 shadow-lg inline-block">
                <img src={tokyoImg} className="w-[full] desk-object" />
            </div>
        </div>
    )
}

export default Photo