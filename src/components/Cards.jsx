import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import cardsImg from '../assets/cards.png'

function Cards({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[15vw] top-[65%] right-[35%] cursor-pointer group"
            style={{ transform: 'rotate(40deg)' }}
            onClick={() => onClick(getClickOrigin("cards", myRef, onClick))}
        >
            <img src={cardsImg} className="w-full desk-object" />
        </div>
    )
}

export default Cards

