import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import photoImg from '../assets/photo.png'

function Photo({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[16vw] top-[22%] right-[14%] cursor-pointer group"
            style={{ transform: 'rotate(340deg)' }}
            onClick={() => onClick(getClickOrigin("photo", myRef, onClick))}
        >
            <img src={photoImg} className="w-full desk-object" />
        </div>
    )
}

export default Photo