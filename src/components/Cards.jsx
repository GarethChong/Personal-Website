import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import cardsImg from '../assets/cards.png'

function Cards({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[17vw] top-[57%] right-[33%] cursor-pointer group"
            style={{ transform: 'rotate(20deg)' }}
            onClick={() => onClick(getClickOrigin("cards", myRef, onClick))}
        >
            <img src={cardsImg} className="w-full desk-object shadow-strong" />
        </div>
    )
}

export default Cards

