import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import patchImg from '../assets/patch.png'

function CallSignPatch({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef}
            className="absolute w-[16vw] top-[50%] left-[31%] cursor-pointer group"
            style={{ transform: 'rotate(250deg)' }}
            onClick={() => onClick(getClickOrigin("patch", myRef, onClick))}
        >
            <img src={patchImg} className="w-full desk-object shadow-strong" />
        </div>
    )
}

export default CallSignPatch

