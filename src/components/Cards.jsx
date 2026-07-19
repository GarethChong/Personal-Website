import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import cardsImg from '../assets/cards_new.png'

function Cards({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[24vw] top-[55%] right-[29%] cursor-pointer group"
            onClick={() => onClick(getClickOrigin("cards", myRef, onClick))}
        >
            <img src={cardsImg} className="w-full desk-object shadow-strong" />
        </div>
    )
}

export default Cards

