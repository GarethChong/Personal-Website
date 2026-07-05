import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import laptopImg from '../assets/laptop.png'

function Laptop({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef} className="absolute w-[35vw] top-[-18%] left-1/2 -translate-x-1/2 cursor-pointer group must-click" onClick={getClickOrigin("laptop", myRef, onClick)}>
            <img src={laptopImg} className="w-full desk-object" />
        </div>
    )
}

export default Laptop